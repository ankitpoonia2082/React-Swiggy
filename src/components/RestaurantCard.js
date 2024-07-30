// Restro card Component

import { Link } from "react-router-dom";
import { IMG_CDN } from "../../config";

const Card = ({ id, name, cuisines, avgRating, locality, cloudinaryImageId }) => {
    return (
        <div className="m-3 w-60" >
            <img className="h-40 w-60 rounded-xl fill-red-600" alt='No Image avalable' src={IMG_CDN + cloudinaryImageId} />
            <div className="m-3">
                <h3 className="font-bold">{name}</h3>
                <h4 className="text-sm">⭐️ {avgRating}</h4>
                <h4 className="text-gray-700 text-sm">{cuisines?.join(', ')}</h4>
                <h5 className="text-gray-700 text-sm">{locality}</h5>
            </div>
        </div>
    )
};

export default Card;