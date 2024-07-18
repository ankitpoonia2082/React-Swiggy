
import Card from './RestaurantCard';
import { swiggyApi } from "../../config";
import { useEffect, useState } from "react";
import Shimmers from './Shimmer';
import { Link } from 'react-router-dom';
import { filterRestro } from "../utils/helper"
import useRestaurant from "../utils/customHooks/useRestaurant";
import useOnline from '../utils/customHooks/useOnline';

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

    // const isOnline = useOnline();

    // if (!isOnline) {
    //     return (<h1>Sorry, something went wrong. Please check your network connection and try again.</h1>)
    // }


    // Conditional rendering...
    return !allRestaurants?.length ? <Shimmers /> : (
        <>
            <div className="searchbar">
                <input type="text" value={searchtxt} onChange={(e) => {
                    setSearchtxt(e.target.value)
                }}
                    onKeyDown={(e) => {
                        if (e.key === "Enter")
                            setFilteredRestaurants(filterRestro(searchtxt, restaurants));
                    }}
                    placeholder="Search here..." ></input>

                <button onClick={() => {
                    setFilteredRestaurants(filterRestro(searchtxt, allRestaurants))
                }} >Search</button>

            </div>

            {(!filteredRestaurants.length) ? <h1>No restaurant found matching {searchtxt}</h1> : <div className="body">
                <h1>Restaurants</h1>
                <div className='restaurants-list'>{
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
    )
};

export default Body;