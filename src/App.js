import { useState } from "react";
import styled from "styled-components/macro";
import Category from "./components/Category";
import data from "./assets/data.json";
import { nanoid } from "nanoid";

const features = data.map((data) => {
  return { ...data, id: nanoid() };
});

function App() {
  const [coreFeatures, setCoreFeatures] = useState(features);
  const [favorites, setFavories] = useState([]);
  function toggleFavorite(id) {
    if (favorites.includes(id)) {
      setFavories(favorites.filter((favorite) => favorite !== id));
    } else {
      setFavories([...favorites, id]);
    }
  }

  const core = coreFeatures.filter(
    (feature) => feature.category === "Core Features"
  );
  const infantry = coreFeatures.filter(
    (feature) => feature.category === "Infantry Gameplay"
  );
  return (
    <div>
      <AppTitle>BATTLEFIX 2042</AppTitle>
      <SubTitle>Is Battlefield 2042 fixed for me?</SubTitle>
      <Category
        label="Core Features"
        data={core}
        toggleFavorite={toggleFavorite}
        favorites={favorites}
      />
      <Category
        label="Infantry Gameplay"
        data={infantry}
        favorites={favorites}
        toggleFavorite={toggleFavorite}
      />
    </div>
  );
}

export default App;

const AppTitle = styled.h1`
  font-family: "MyFont";
  text-align: center;
  color: #26ffdf;
  margin-bottom: 0;
`;

const SubTitle = styled.h2`
  margin: 0;
  padding: 0;
  text-align: center;
  font-size: 0.8em;
  color: black;
  background-color: #26ffdf;
`;
