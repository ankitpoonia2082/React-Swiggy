// Restro card Component

import { IMG_CDN } from "../../config";

const Card = (data) => {
    const { name, cuisines, avgRating, locality, cloudinaryImageId, sla } = data;
    return (
        <div className="m-3 w-60">
            <img
                className="h-40 w-60 rounded-xl object-cover"
                alt='No Image available'
                src={IMG_CDN + cloudinaryImageId}
            />
            <div className="m-3">
                <h3 className="font-bold truncate">{name}</h3>
                <h4 className="text-sm truncate">&#10026; {avgRating} {(!sla.deliveryTime) ? '' : '⦿ ' + sla.deliveryTime + '-' + (+sla.deliveryTime + 5) + 'mins'}</h4>
                <h4 className="text-gray-700 text-sm truncate">{cuisines?.join(', ')}</h4>
                <h5 className="text-gray-700 text-sm truncate">{locality}</h5>
            </div>
        </div>
    )
};


export default Card;