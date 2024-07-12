// Restauarant menu...

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MenuCard from "./RestaurantMenuCard";
// import { getMenu } from "../../config";

const OfferCard = () => {
  return (
    <div className="offerCard">
      <h2 className="offerLogo">Logo</h2>
      <div className="offerDetails">
        <h4>Extra ₹20 Off</h4>
        <h5>Extra ₹20 OffAPPLICABLE OVER & ABOVE</h5>
      </div>
    </div>
  );
};

const Menu = () => {
  const { id } = useParams();
  const [RestroMenu, setRestroMenu] = useState([]);

  useEffect(() => { getSwiggyData(id) }, [])

  // Calling API to get Menu data...
  const getSwiggyData = async (id) => {
    const data = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=29.1491875&lng=75.7216527&restaurantId=${id}&catalog_qa=undefined&submitAction=ENTER`);
    const jsonData = await data.json();
    setRestroMenu(jsonData);
  };

  // const {name, city, locality, areaName, costForTwoMessage, cuisines, avgRattings, totalRatingString, sla} = RestroMenu?.data?.cards[2]?.card?.card?.info;
  console.log(RestroMenu?.data?.cards[2]?.card?.card?.info)

  return (
    <div className="RestaurantFullMenu">

      <div className="aboutRestaurant">
        <h2>Restaurant Name</h2>
        <div className="basicDetails">
          <h4>✪ 4.5(300+ ratings) • Cost for 2</h4>
          <h3>cuisines</h3>
          <h3>● Outlet Hisar</h3>
          <h3>Timing</h3>
          <h5>🚲 Order above 149 for discounted delivery fee</h5>
        </div>
      </div>

      <div className="dealsOffers">
        <div className="dealsOffersHead">
          <h1>Deals for you</h1>
          <div className="dealsNavigationButtons">
            <button>◁</button>
            <button>▷</button>
          </div>
        </div>

        <div className="allOfferCards">
          <OfferCard />
          <OfferCard />
          <OfferCard />
        </div>

      </div>


      <MenuCard />
    </div>)
};

export default Menu;