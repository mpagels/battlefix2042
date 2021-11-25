import { useContext, useState, createContext, useEffect } from "react";

const backendUrl = process.env.REACT_APP_BACKEND;

export const FavoriteContext = createContext({
  totalPrice: 0,
  buy: () => undefined,
});

export function FavoriteContextProvider({ children }) {
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
    <FavoriteContext.Provider
      value={{
        favorites,
        handleChange,
        favoriteIsChecked,
        toggleFavorite,
        core,
        infantry,
        vehicles,
        scoring,
        teamwork,
        maps,
        quality,
        audio,
      }}
    >
      {children}
    </FavoriteContext.Provider>
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

export function useFavorites() {
  const {
    favorites,
    handleChange,
    favoriteIsChecked,
    toggleFavorite,
    core,
    infantry,
    vehicles,
    scoring,
    teamwork,
    maps,
    quality,
    audio,
  } = useContext(FavoriteContext);
  return {
    favorites,
    handleChange,
    favoriteIsChecked,
    toggleFavorite,
    core,
    infantry,
    vehicles,
    scoring,
    teamwork,
    maps,
    quality,
    audio,
  };
}
