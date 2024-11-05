import { FavouriteContext } from "../context";
import { useLocalStorage } from "../hooks";

const FavouriteProvider = ({ children }) => {
  const [favourites, setFavourites] = useLocalStorage("favourites", []);

  const addToFavourite = (latitude, logitude, location) => {
    setFavourites([
      ...favourites,
      {
        latitude,
        logitude,
        location,
      },
    ]);
  };

  const removeFromFavourite = (location) => {
    setFavourites(favourites.filter((fav) => fav.location !== location));
  };
  return (
    <FavouriteContext.Provider
      value={{ favourites, addToFavourite, removeFromFavourite }}
    >
      {children}
    </FavouriteContext.Provider>
  );
};

export default FavouriteProvider;
