import { useContext, useEffect, useState } from "react";
import { FavouriteContext, WeatherContext } from "../../context";

import HeartIcon from "../../assets/heart.svg";
import RedHeartIcon from "../../assets/heart-red.svg";

const AddToFavourite = () => {
  const { favourites, addToFavourite, removeFromFavourite } =
    useContext(FavouriteContext);

  const { weatherData } = useContext(WeatherContext);
  const { latitude, longitude, location } = weatherData;

  const [isFavourite, setIsFavourite] = useState(false);
  useEffect(() => {
    const found = favourites.find((fav) => fav.location === location);
    setIsFavourite(found);
  }, []);

  const handleFavourites = () => {
    const found = favourites.find((fav) => fav.location === location);

    if (!found) {
      addToFavourite(latitude, longitude, location);
    } else {
      removeFromFavourite(location);
    }
    setIsFavourite(!isFavourite);
    console.log("Clicked");
  };

  return (
    <div className="md:col-span-2">
      <div className="flex items-center justify-end space-x-6">
        <button
          className="text-sm md:text-base inline-flex items-center space-x-2 px-3 py-1.5 rounded-md bg-[#C5C5C54D]"
          onClick={handleFavourites}
        >
          <span>Add to Favourite</span>
          <img src={isFavourite ? RedHeartIcon : HeartIcon} alt="" />
        </button>
      </div>
    </div>
  );
};

export default AddToFavourite;
