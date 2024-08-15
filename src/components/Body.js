
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import useRestaurant from "../utils/customHooks/useRestaurant";
import Shimmers from './Shimmer';
import GetApp from "./GetApp";
import Card from './RestaurantCard';
import WhatsOnYourMindCard from "./WhatsOnYourMind";
import TopRestaurants from "./TopRestaurantsChains";
import ExploreRestaurantsNearMe from "./ExploreRestaurantNear";
import ExploreCuisinesNearMe from "./CuisinesNearMe";
import { filterRestro } from "../utils/helper"


export const searchToggle = () => {
    if (showSearch) {
        setShowSearch(false);
    } else setShowSearch(true);
};

/**
 * Body Structure
Body: -
    Search bar
    cards(Multiple)
        Image
        Name
        Ratings
        Cuizines
 */

// Body Component:
const Body = () => {
    // Custom Hook
    const restaurants = useRestaurant();

    // useState hook : to create a local state variable... 
    const [showSearch, setShowSearch] = useState(true);
    const [searchtxt, setSearchtxt] = useState('');
    const [whatOnYourMindData, setWhatOnYourMindData] = useState([]);
    const [topRestaurantsData, setTopRestaurantsData] = useState([]);
    const [allRestaurants, setAllRestaurants] = useState([]);
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);
    const [exploreRestaurantNear, setExploreRestaurantNear] = useState([]);
    const [cuisinesNearMe, setCuisinesNearMe] = useState([]);
    const [eatAcrossCities, setEatAcrossCities] = useState([]);
    const [getAppData, setGetAppData] = useState([]);
    const [exploreConfig, setExploreConfig] = useState("exploreRestaurantNear");

    useEffect(
        () => {
            if (restaurants) {
                // Seating top restaurant chains data
                if (restaurants?.[0]?.card?.card?.id == "top_brands_for_you") {
                    setTopRestaurantsData(restaurants?.[0]?.card?.card || []);
                } else if (restaurants?.[1]?.card?.card?.id == "top_brands_for_you") {
                    setTopRestaurantsData(restaurants?.[1]?.card?.card || []);
                };

                // Seting restaurant data
                setAllRestaurants(restaurants?.[3]?.card?.card?.gridElements?.infoWithStyle.restaurants || restaurants?.[4]?.card?.card?.gridElements?.infoWithStyle.restaurants || []);

                // Seting restaurant data for filtering
                setFilteredRestaurants(restaurants?.[3]?.card?.card?.gridElements?.infoWithStyle.restaurants || restaurants?.[4]?.card?.card?.gridElements?.infoWithStyle.restaurants || []);

                // Seting whats on your mind data
                if (restaurants?.[0]?.card?.card?.header?.title == "What's on your mind?") {
                    setWhatOnYourMindData(restaurants?.[0]?.card?.card);
                };

                //  Get App data
                if (restaurants?.[8]?.card?.card?.id == "app_install_links") {
                    setGetAppData(restaurants?.[8].card?.card);
                } else if (restaurants?.[9]?.card?.card?.id == "app_install_links") {
                    setGetAppData(restaurants?.[9].card?.card);
                }

                //  Explore restaurant near me data
                if (restaurants?.[8]?.card?.card?.id == "restaurant_near_me_links") {
                    setExploreRestaurantNear(restaurants?.[8].card?.card);
                } else if (restaurants?.[7]?.card?.card?.id == "restaurant_near_me_links") {
                    setExploreRestaurantNear(restaurants?.[7].card?.card);
                }

                //  Explore Cuisines near me data
                if (restaurants?.[6]?.card?.card?.title == "Best Cuisines Near Me") {
                    setCuisinesNearMe(restaurants?.[6].card?.card);
                } else if (restaurants?.[7]?.card?.card?.title == "Best Cuisines Near Me") {
                    setCuisinesNearMe(restaurants?.[7].card?.card);
                }

                //  Explore Cuisines near me data / Best Places to Eat Across Cities
                if (restaurants?.[6]?.card?.card?.title == 'Best Places to Eat Across Cities') {
                    setEatAcrossCities(restaurants?.[6].card?.card);
                } else if (restaurants?.[5]?.card?.card?.title == 'Best Places to Eat Across Cities') {
                    setEatAcrossCities(restaurants?.[5].card?.card);
                }
            }
        },
        [restaurants]
    );

    // Conditional rendering...
    return !allRestaurants?.length ? <Shimmers /> : (
        <>
            <div className='px-20 py-10'>
                {/* Searchbar */}
                <>
                    {(!showSearch) ? '' :
                        <div className="flex justify-center">
                            <input type="text"
                                className='border border-gray-300 rounded-s-lg min-w-full p-2'
                                value={searchtxt} onChange={(e) => {
                                    setSearchtxt(e.target.value)
                                }}
                                onKeyDown={(e) => {
                                    if (e.key === "Enter")
                                        setFilteredRestaurants(filterRestro(searchtxt, restaurants));
                                }}
                                placeholder="Search here..." >
                            </input>
                            <button className='border border-gray-300 rounded-e-lg p-2' onClick={() => {
                                setFilteredRestaurants(filterRestro(searchtxt, allRestaurants))
                            }} >Search</button>
                        </div>

                    }
                </>

                {/* What's on your mind */}
                {(!whatOnYourMindData) ? '' : <>
                    {(!whatOnYourMindData) ? '' : <WhatsOnYourMindCard {...whatOnYourMindData} />}
                </>}

                {/* Top restaurant chains in city Component */}
                {(!topRestaurantsData) ? '' : <>
                    {(!topRestaurantsData) ? '' :
                        <TopRestaurants {...topRestaurantsData} />
                    }
                </>}

                {/* Restaurant component */}
                <>
                    {(!filteredRestaurants.length) ? <h1>No restaurant found matching {searchtxt}</h1> :
                        <div className="my-10">
                            <h1 className='font-bold text-3xl mb-5'>Restaurants ({filteredRestaurants.length})</h1>
                            <div className='flex flex-wrap justify-items-start'>{
                                filteredRestaurants.map((restaurant) => {
                                    return (<Link to={"/restaurantMenu/" + restaurant?.info?.id} key={restaurant?.info?.id} >
                                        < Card {...restaurant.info} />
                                    </Link>)
                                })
                            }
                            </div>
                        </div>
                    }
                </>

                {/* Best Places to Eat Across Cities */}
                <>
                    <ExploreCuisinesNearMe {...eatAcrossCities}
                        isVisible={exploreConfig === "eatAcrossCities"}
                        setIsVisible={() => setExploreConfig("eatAcrossCities")}

                    />
                </>

                {/* Explore cuisines nearby component */}
                <>
                    <ExploreCuisinesNearMe {...cuisinesNearMe}
                        isVisible={exploreConfig === "cuisinesNearMe"}
                        setIsVisible={() => setExploreConfig("cuisinesNearMe")}
                    />
                </>

                {/* Explore Restaurant nearby component */}
                <>
                    <ExploreRestaurantsNearMe {...exploreRestaurantNear}
                        isVisible={exploreConfig === "exploreRestaurantNear"}
                        setIsVisible={() => setExploreConfig("exploreRestaurantNear")}
                    />
                </>
            </div>

            <>
                <GetApp {...getAppData} />
            </>

        </>
    )
};

export default Body;