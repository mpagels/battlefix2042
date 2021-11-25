import { useFavorites } from "../contexts/FavoriteContext";
import Category from "../components/Category";

export default function Start() {
  const {
    favorites,
    toggleFavorite,
    core,
    infantry,
    vehicles,
    scoring,
    teamwork,
    maps,
    quality,
    audio,
  } = useFavorites();
  return (
    <>
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
    </>
  );
}
