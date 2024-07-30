// Top Picks

import { veg_logo, nonVeg_logo } from "../../config";
import { IMG_CDN } from "../../config";

const TopPicks = ({ name, isVeg, price, imageId }) => {


    return (
        <div className="flex flex-col bg-cover justify-between w-64 h-64 mx-4 p-3 text-white rounded-2xl" style={{ backgroundImage: `url(${IMG_CDN + imageId})` }}>
            <div>
                <h3 className="w-4">{(isVeg) ? <img alt="Veg" src={veg_logo} /> : <img alt="Veg" src={nonVeg_logo} />}</h3>
                <h1 className="font-bold my-2">{name}</h1>
            </div>
            <div className="flex justify-between">
                <h1>₹ {price / 100}</h1>
                <button className="bottom-4 left-0 z-10 w-24 shadow-lg border bg-white text-green-600 font-bold py-2 rounded-xl hover:bg-slate-200">ADD</button>
            </div>
        </div>
    );
};

export default TopPicks;