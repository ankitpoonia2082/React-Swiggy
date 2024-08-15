// Restaurant Menu card
import { IMG_CDN } from "../../config"
import { veg_logo, nonVeg_logo } from "../../config";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/slices/cartSlice";


const MenuCard = ({ id, name, category, description, imageId, isVeg, price, ratings }) => {
  const dispatch = useDispatch();

  const handelAddItem = () => {
    dispatch(addItem({
      id: id,
      name: name,
      category: category,
      description: description,
      imageId: imageId,
      isVeg: isVeg,
      price: price,
      ratings: ratings
    }))
  };

  return (

    <div className="h-60 flex justify-between border-b mt-5 py-4">

      <div className="w-2/3">
        <h3 className="w-5">{(isVeg) ? <img alt="Veg" src={veg_logo} /> : <img alt="Veg" src={nonVeg_logo} />}</h3>
        <h1 className="font-bold text-gray-700 text-xl">{name}</h1>
        <h2 className="">₹ {price / 100}</h2>
        <div className="text-sm my-2 flex">
          <h3 className="text-orange-400">⭐️ {ratings?.aggregatedRating?.rating}</h3>
          <h3>({ratings?.aggregatedRating?.ratingCountV2})</h3>

        </div>
        <p className="my-2 line-clamp-3 text-ellipsis text-gray-600">{description}</p>
      </div>

      <div className="w-2/12 flex flex-col items-center">
        {(!imageId) ? <img src="https://static.vecteezy.com/system/resources/previews/003/170/825/non_2x/isolated-food-plate-fork-and-spoon-design-free-vector.jpg"></img> :
          <img className="min-w-full h-5/6 rounded-xl" src={IMG_CDN + imageId} alt='' />
        }

        <button onClick={() => handelAddItem()} className="relative bottom-4 left-0 z-10 w-24 shadow-lg border bg-white text-green-600 font-bold py-2 rounded-xl hover:bg-slate-200">ADD</button>
      </div>
    </div>

  );
};

export default MenuCard;