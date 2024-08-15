// Restauarant menu...

import { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import Category from "./CategoryItems";
import OfferCard from "./OfferCard";
import TopPicks from "./TopPicks";
import useMenu from "../utils/customHooks/useMenu";
import Slider from "react-slick";
import Shimmer from "./Shimmer";
// Import css files for react-slick
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { filterItems } from "../utils/helper";

const Menu = () => {
  const { id } = useParams();
  const menu = useMenu(id);
  const sliderRef = useRef();
  const topPicksSliderRef = useRef();

  const [restaurantData, setRestaurantData] = useState([]);
  const [restaurantOffers, setRestaurantOffers] = useState([]);
  const [restaurantInfo, setRestaurantInfo] = useState([]);
  const [restaurantAllMenu, setRestaurantAllMenu] = useState([]);
  const [allMenuFiltered, setAllMenuFiltered] = useState([]);
  const [topPicks, setTopPicks] = useState([]);
  const [searchValue, setSearchValue] = useState('');

  useEffect(() => {
    if (menu) {
      setRestaurantData(menu?.data || []);
      setRestaurantInfo(menu?.data?.cards[2]?.card?.card?.info || []);
      setRestaurantOffers(menu?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.offers || []);
      setTopPicks(menu?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.carousel || []);

      let data = menu?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
      let arr = [];
      data.map((item) => {
        if (item?.card?.card?.title && item?.card?.card?.title !== 'Top Picks') {
          arr.push(item?.card?.card);
        };
      });
      setRestaurantAllMenu(arr);
      setAllMenuFiltered(arr);
    };
  }, [menu]);

  var settings = {
    initialSlide: 0,
    speed: 800,
    slidesToShow: 3.1,
    slidesToScroll: 1,
    infinite: false,
    initialSlide: 0
  };
  var topPicksSettings = {
    initialSlide: 0,
    speed: 800,
    slidesToShow: 2.6,
    slidesToScroll: 1.6,
    infinite: false,
    initialSlide: 0
  };

  const { name, locality, costForTwoMessage, cuisines, avgRatingString, totalRatingString, sla, expectationNotifiers
  } = restaurantInfo;

  return (!restaurantAllMenu.length && !restaurantData.length) ? <Shimmer /> : (
    <div className="my-11 mx-28">

      {/* Restaurant basic details */}
      <div className="p-5 rounded-3xl bg-gradient-to-t from-slate-200">
        <h2 className="font-bold text-2xl my-5 rounded-3xl">{name}</h2>
        <div className="basicDetails border p-5 rounded-xl bg-white">
          <h4 className="font-bold">⭐︎ {avgRatingString},{totalRatingString} • {costForTwoMessage}</h4>
          <h3 className="font-bold text-orange-500 underline">{cuisines?.join(',')}</h3>
          <div className="flex font-bold">
            <h3>● Outlet -</h3>
            <h3 className="font-bold text-gray-600">{locality}</h3>
          </div>
          <h3 className="font-bold">● {sla?.minDeliveryTime}-{sla?.maxDeliveryTime} mins</h3>
          <h5 className="text-gray-600">🚲 {expectationNotifiers?.enrichedText}</h5>
        </div>
      </div>

      {/* Restaurant Data */}
      <div className="flex flex-col justify-between my-8">

        {/* Restaurant deals and offer details */}
        <div className="mt-8">
          <div className="flex justify-between">
            <h1 className="font-bold text-xl">Offers for you</h1>
            <div className="">
              <button className="bg-slate-300 rounded-full px-3 py-1 m-1" onClick={() => {
                if (restaurantOffers.length > 3) sliderRef.current.slickPrev();
              }}>&#8249;</button>
              <button className="bg-slate-300 rounded-full px-3 py-1 m-1"
                onClick={() => {
                  if (restaurantOffers.length > 3) sliderRef.current.slickNext();
                }} >&#8250;</button>
            </div>
          </div>

          <div className="my-4">
            <Slider ref={sliderRef} {...settings}>
              {restaurantOffers.map((offer) => <OfferCard key={offer?.info?.offerIds[0]} {...offer?.info} />)}
            </Slider>
          </div>

        </div>

        {/* Restaurant menu items */}
        <div>

          {/* MENU heading */}
          <div>
            <h1 className="text-center py-4">- MENU -</h1>
          </div>

          {/* Searchbar in menu */}
          <div className="border-b py-5">
            <input
              className="w-full bg-slate-100 text-center py-3 rounded-lg"
              placeholder="Search for dishes"
              onChange={(e) => { setSearchValue(e.target.value) }}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  setAllMenuFiltered(filterItems(searchValue, restaurantAllMenu))
                };
              }}
            ></input>
          </div>

          {/* Top Picks */}
          <div>
            {(topPicks.length == 0) ? "" :
              <div className="mt-8">
                <div className="flex justify-between">
                  <h1 className="font-bold text-xl">Top Picks</h1>
                  <div className="">
                    <button className="bg-slate-300 rounded-full px-3 py-1 m-1" onClick={() => {
                      if (topPicks.length > 3) topPicksSliderRef.current.slickPrev();
                    }}>&#8249;</button>
                    <button className="bg-slate-300 rounded-full px-3 py-1 m-1"
                      onClick={() => {
                        if (topPicks.length > 3) topPicksSliderRef.current.slickNext();
                      }} >&#8250;</button>
                  </div>
                </div>

                <div className="my-4">
                  <Slider ref={topPicksSliderRef} {...topPicksSettings}>
                    {topPicks.map((item) => <TopPicks key={item?.dish?.info.id} {...item.dish.info} />)}
                  </Slider>
                </div>
              </div>
            }
          </div>

          {/* Category wise items */}
          <div className="my-14">
            {allMenuFiltered.map((data) =>
              <Category {...data} key={data?.title} />
            )}
          </div>

        </div>
      </div>
    </div>
  )
};

export default Menu;