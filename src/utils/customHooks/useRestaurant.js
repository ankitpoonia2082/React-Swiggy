// useRestaurant : gives us restaurants avalabel in our location;
import { useState, useEffect } from "react";
import { swiggyApi2 } from "../../../config";


const useRestaurant = () => {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    getSwiggyData();
  }, []);

  const getSwiggyData = async () => {
    try {
      const data = await fetch(swiggyApi2, {
        method: 'GET',
      });
      const jsonData = await data.json();
      setRestaurants(jsonData?.data?.cards)
    } catch {
      window.alert('Error fetching restaurants data:');
    }
  };
  return restaurants;
};

export default useRestaurant;