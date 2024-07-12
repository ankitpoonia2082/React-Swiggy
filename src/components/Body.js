
import Card from './RestroCard';
import { swiggyApi } from "../../config";
import { useEffect, useState } from "react";
import Shimmers from './Shimmer';

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


// Function for filtering searched restaurant...
const filterRestro = (searchtxt, restaurantList) => {
    return restaurantList.filter((restaurant) => restaurant?.info?.name?.toLowerCase().includes(searchtxt.toLowerCase()));
};


// Body Component:
const Body = () => {

    // useState hook : to create a local state variable... 
    let [searchtxt, setSearchtxt] = useState('');
    let [allRestaurants, setAllRestaurants] = useState([]);
    let [filteredRestaurants, setFilteredRestaurants] = useState([]);

    // useEffect hook : for calling fn that calls api , with empty dependency to call it ones after render...
    useEffect(() => {
        getSwiggyData();
    }, []);

    // Calling API to get live data...
    const getSwiggyData = async () => {
        const data = await fetch(swiggyApi);
        const jsonData = await data.json();
        setAllRestaurants(jsonData?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        setFilteredRestaurants(jsonData?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    };

    // Early return (Way to avoide component rendering)...
    // if (!allRestaurants.length) {
    //     return (
    //         <div><h1>Check your internet connection...</h1></div>
    //     );
    // }


    // Conditional rendering...
    return !allRestaurants?.length ? <Shimmers /> : (
        <>
            <div className="searchbar">
                <input type="text" value={searchtxt} onChange={(e) => {
                    setSearchtxt(e.target.value)
                    // setRestaurants(filterRestro(searchtxt, restaurants))
                }}
                    onKeyDown={(e) => {
                        if (e.key === "Enter")
                            setFilteredRestaurants(filterRestro(searchtxt, allRestaurants));
                    }}
                    placeholder="Search here..." input />

                <button onClick={() => {
                    setFilteredRestaurants(filterRestro(searchtxt, allRestaurants))
                }} >Search</button>

            </div >

            {(!filteredRestaurants.length) ? <h1>No restaurant fount matching {searchtxt}</h1> : <div className="body">
                <h1>Restaurants</h1>
                <div className='restaurants-list'>{
                    filteredRestaurants.map((restaurant) => < Card key={restaurant?.info?.id} {...restaurant.info} />)
                }
                </div>
            </div>
            }
        </>
    )
};

export default Body;