
import Card from './RestaurantCard';
import { useEffect, useState } from "react";
import Shimmers from './Shimmer';
import { Link } from 'react-router-dom';
import { filterRestro } from "../utils/helper"
import useRestaurant from "../utils/customHooks/useRestaurant";

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
    const restaurants = useRestaurant();

    // useState hook : to create a local state variable... 
    let [searchtxt, setSearchtxt] = useState('');
    let [allRestaurants, setAllRestaurants] = useState([]);
    let [filteredRestaurants, setFilteredRestaurants] = useState([]);

    useEffect(
        () => {
            setAllRestaurants(restaurants)
            setFilteredRestaurants(restaurants)
        },
        [restaurants]
    );

    // Conditional rendering...
    return !allRestaurants?.length ? <Shimmers /> : (
        <div className='px-20 py-10'>
            <div className="flex justify-center">
                <input type="text" className='border border-gray-500 rounded-full p-2' value={searchtxt} onChange={(e) => {
                    setSearchtxt(e.target.value)
                }}
                    onKeyDown={(e) => {
                        if (e.key === "Enter")
                            setFilteredRestaurants(filterRestro(searchtxt, restaurants));
                    }}
                    placeholder="Search here..." >
                </input>
                <button className='border border-gray-950 rounded-full p-2' onClick={() => {
                    setFilteredRestaurants(filterRestro(searchtxt, allRestaurants))
                }} >Search</button>
            </div>

            {(!filteredRestaurants.length) ? <h1>No restaurant found matching {searchtxt}</h1> : <div className="body">
                <h1 className='font-bold text-3xl'>Restaurants</h1>
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
        </div>
    )
};

export default Body;