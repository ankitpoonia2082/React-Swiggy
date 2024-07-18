// Restauarant menu...

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MenuCard from "./RestaurantMenuCard";
import OfferCard from "./OfferCard";
import useMenu from "../utils/customHooks/useMenu";

const Menu = () => {
  const { id } = useParams();
  const menu = useMenu(id);

  const [restaurantData, setRestaurantData] = useState([]);
  const [restaurantOffers, setRestaurantOffers] = useState([]);
  const [restaurantInfo, setRestaurantInfo] = useState([]);
  const [restaurantMenu, setRestaurantMenu] = useState([]);


  useEffect(() => {
    if (menu) {
      setRestaurantData(menu?.data);
      setRestaurantMenu(menu?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards || []);
      setRestaurantOffers(menu?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.offers || []);
      setRestaurantInfo(menu?.data?.cards[2]?.card?.card?.info || []);
    }
  }, [menu]);


  const { name, city, locality, areaName, costForTwoMessage, cuisines, avgRatingString, totalRatingString, sla, cloudinaryImageId, expectationNotifiers
  } = restaurantInfo;

  // console.log(restaurantData)

  return (!restaurantMenu.length && !restaurantData.length) ? <h1>Loading menu...</h1> : (
    <div className="RestaurantFullMenu">

      {/* Restaurant basic details */}
      <div className="aboutRestaurant">
        <h2>{name}</h2>
        <div className="basicDetails">
          <h4>⭐︎ {avgRatingString},{totalRatingString} • {costForTwoMessage}</h4>
          <h3>{cuisines?.join(',')}</h3>
          <h3>● Outlet - {locality}</h3>
          <h3>● {sla?.minDeliveryTime}-{sla?.maxDeliveryTime} mins</h3>
          <h5>🚲 {expectationNotifiers?.enrichedText}</h5>
        </div>
      </div>

      {/* Restaurant deals and offer details */}
      <div className="dealsOffers">
        <div className="dealsOffersHead">
          <h1>Deals for you</h1>
          <div className="dealsNavigationButtons">
            <button>◁</button>
            <button>▷</button>
          </div>
        </div>

        <div className="allOfferCards">
          {restaurantOffers.map((offer) => <OfferCard key={offer?.info?.offerIds[0]} {...offer?.info} />)}
        </div>

      </div>

      {/* Restaurant menu items */}
      <div>
        <h1>Recomended ({restaurantMenu.length})</h1>
        <div className="menuItems">
          {restaurantMenu.map((item) => <MenuCard key={item?.card?.info?.id} {...item.card.info} />)}
        </div>
      </div>
    </div>
  )
};

export default Menu;