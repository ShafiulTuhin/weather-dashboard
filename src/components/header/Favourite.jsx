import Favourite from "../../assets/heart.svg";

const FavLocation = () => {
  return (
    <div className="p-2 hover:bg-black/30 cursor-pointer flex gap-2 items-center rounded-md transition-all">
      <img src={Favourite} alt="Favourite" />
      <span>Favourite Locations</span>
    </div>
  );
};

export default FavLocation;
