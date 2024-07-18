// useRestaurant : gives us restaurants avalabel in our location;
import { useState, useEffect } from "react";
import { swiggyApi } from "../../../config";


const useRestaurant = () => {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    getSwiggyData();
  }, []);

  const getSwiggyData = async () => {
    try {
      const data = await fetch(swiggyApi);
      const jsonData = await data.json();
      setRestaurants(jsonData?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    } catch {
      console.error('Error fetching restaurants data:', error); // Handle fetch errors
    }
  };

  return restaurants;
};

export default useRestaurant;