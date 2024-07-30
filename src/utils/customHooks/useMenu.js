import { useEffect, useState } from "react";
import { getMenu } from "../../../config"

const useMenu = (id) => {
  const [menuData, setMenuData] = useState(null);

  useEffect(() => {
    if (id) {
      getMenuData(id);
    }
  }, [id]);

  const getMenuData = async (id) => {
    try {
      const response = await fetch(getMenu + id);
      const jsonData = await response.json();
      setMenuData(jsonData);
    } catch (error) {
      console.error('Error fetching menu data:', error); // Handle fetch errors
    }
  };

  useEffect(() => { }, [menuData]);
  return menuData;
};

export default useMenu;
