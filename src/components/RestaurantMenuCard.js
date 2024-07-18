// Restaurant Menu card
import { IMG_CDN } from "../../config"

const MenuCard = ({ id, name, category, description, imageId, isVeg, price, ratings }) => {

  return (
    <div className="restauarantMenuCard">
      <div className="menuDetail">
        <h3>{(isVeg) ? '🟢' : '🔴'}</h3>
        <h1>{name}</h1>
        <div className="itemPrice">
          <h2>₹ {price / 100}</h2>
          <h4>🔸 60% OFF USE</h4>
        </div>
        <div className="itemRating">
          <h3>⭐️ {ratings?.aggregatedRating?.rating}({ratings?.aggregatedRating?.ratingCountV2})</h3>
        </div>
        <p>{description}</p>
      </div>
      <div className="menuImage">
        <img className="itemImg" src={IMG_CDN + imageId} />
        <button>ADD</button>
      </div>
    </div>
  );
};

export default MenuCard;