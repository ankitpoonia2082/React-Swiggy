// Restro card Component

import { IMG_CDN } from "../../config";

const Card = ({ name, cuisines, avgRating, locality, cloudinaryImageId }) => {
    return (
        <div className="card">
            <img alt='No Image avalable' src={IMG_CDN + cloudinaryImageId}></img>
            <h3 className="restroName">{name}</h3>
            <h3 className="restroCuisines">{cuisines?.join(', ')}</h3>
            <h3 className="restroRating">{avgRating} ⭐️</h3>
            <h5 className="restroAddress">{locality}</h5>
        </div>
    )
};

export default Card;