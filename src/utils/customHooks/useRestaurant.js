// useRestaurant : gives us restaurants avalabel in our location;
import { useState, useEffect } from "react";
import { swiggyApi2 } from "../../../config";
import useLocation from "./useLocation";


const useRestaurant = () => {
  const location = useLocation();

  const [restaurants, setRestaurants] = useState([]);

  const [lat, setLat] = useState(29.1491875);
  const [lng, setLng] = useState(75.7216527);


  useEffect(() => {
    getSwiggyData();
    if (location) {
      setLat(location?.coords?.latitude);
      setLng(location?.coords?.longitude);
    };
  }, [location]);

  const getSwiggyData = async () => {
    try {
      const data = await fetch(swiggyApi2 + `lat=${lat}&lng=${lng}`, {
        method: 'GET',
      });
      const jsonData = await data.json();
      setRestaurants(jsonData?.data?.cards)
    } catch (error) {
      // window.alert('Error fetching restaurants data:');
    }
  };
  return restaurants;
};

export default useRestaurant;