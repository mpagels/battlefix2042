import { useEffect, useState } from "react";
import styled from "styled-components/macro";
import Category from "./components/Category";
import FavoriteSwitch from "./components/FavoriteSwitch";

const backendUrl = process.env.REACT_APP_BACKEND;

function App() {
  const [favorites, setFavories] = useState(
    JSON.parse(localStorage.getItem("favorites")) || []
  );
  const [fixes, setFixes] = useState([]);
  const [favoriteIsChecked, setFavoriteIsChecked] = useState(
    JSON.parse(localStorage.getItem("favoriteIsChecked")) || false
  );

  useEffect(() => {
    localStorage.setItem(
      "favoriteIsChecked",
      JSON.stringify(favoriteIsChecked)
    );
  }, [favoriteIsChecked]);

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
    if (favorites.length === 0) {
      setFavoriteIsChecked(false);
    }
  }, [favorites]);

  useEffect(() => {
    fetch(`${backendUrl}/fixes?_limit=-1`)
      .then((res) => res.json())
      .then((data) => setFixes(data));
  }, []);

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

  const core = get("CoreFeature");
  const infantry = get("InfantryGameplay");
  const vehicles = get("Vehicles");
  const scoring = get("ScoringSystem");
  const teamwork = get("SquadAndTeamwork");
  const maps = get("Maps");
  const quality = get("UiAndQualityOfLife");
  const audio = get("Audio");

  return (
    <div>
      <AppTitle>BATTLEFIX 2042</AppTitle>
      <SubTitle>Is Battlefield 2042 fixed for me?</SubTitle>
      <SwitchWrapper>
        <FavoriteSwitch
          favoriteIsChecked={favoriteIsChecked}
          handleChange={handleChange}
          label={`Show ${favorites.length} favorites only`}
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
      <Category
        label="Vehicles"
        data={vehicles}
        favorites={favorites}
        toggleFavorite={toggleFavorite}
      />
      <Category
        label="Scoring System"
        data={scoring}
        favorites={favorites}
        toggleFavorite={toggleFavorite}
      />
      <Category
        label="Squad and Teamwork System"
        data={teamwork}
        favorites={favorites}
        toggleFavorite={toggleFavorite}
      />
      <Category
        label="Maps"
        data={maps}
        favorites={favorites}
        toggleFavorite={toggleFavorite}
      />
      <Category
        label="UI and Quality of life"
        data={quality}
        favorites={favorites}
        toggleFavorite={toggleFavorite}
      />
      <Category
        label="Audio"
        data={audio}
        favorites={favorites}
        toggleFavorite={toggleFavorite}
      />
    </div>
  );

  function get(fix) {
    return fixes
      .filter((feature) => feature.category === fix)
      .filter((feature) => {
        if (favoriteIsChecked && favorites.length > 0) {
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
