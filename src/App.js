import { useState } from "react";
import styled from "styled-components/macro";
import Category from "./components/Category";
import data from "./assets/data.json";
import { nanoid } from "nanoid";
import FavoriteSwitch from "./components/FavoriteSwitch";

const fixes = data.map((data) => {
  return { ...data, id: nanoid() };
});

function App() {
  const [favorites, setFavories] = useState([]);

  const [favoriteIsChecked, setFavoriteIsChecked] = useState(false);

  const handleChange = (event) => {
    setFavoriteIsChecked(event.target.checked);
  };

  function toggleFavorite(id) {
    if (favorites.includes(id)) {
      setFavories(favorites.filter((favorite) => favorite !== id));
    } else {
      setFavories([...favorites, id]);
    }
  }

  const core = get("Core Features");
  const infantry = get("Infantry Gameplay");
  return (
    <div>
      <AppTitle>BATTLEFIX 2042</AppTitle>
      <SubTitle>Is Battlefield 2042 fixed for me?</SubTitle>
      <SwitchWrapper>
        <FavoriteSwitch
          favoriteIsChecked={favoriteIsChecked}
          handleChange={handleChange}
          label={"Show favorites only"}
        />
      </SwitchWrapper>
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

  function get(fix) {
    return fixes
      .filter((feature) => feature.category === fix)
      .filter((feature) => {
        if (favoriteIsChecked) {
          return favorites.includes(feature.id);
        } else {
          return true;
        }
      });
  }
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

const SwitchWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;
