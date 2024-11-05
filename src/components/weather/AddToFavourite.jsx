import Favourite from "../../assets/heart.svg";

const AddToFavourite = () => {
  return (
    <div className="flex items-center justify-end space-x-6">
      <button className="text-sm md:text-base inline-flex items-center space-x-2 px-3 py-1.5 rounded-md bg-[#C5C5C54D]">
        <span>Add to Favourite</span>
        <img src={Favourite} alt="" />
      </button>
    </div>
  );
};

export default AddToFavourite;
