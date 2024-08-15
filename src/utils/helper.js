
// Filter Function 
export const filterRestro = (searchtxt, restaurantList) => {
  return restaurantList.filter((restaurant) => restaurant?.info?.name?.toLowerCase().includes(searchtxt.toLowerCase()));
};


// Menu search healper function
export const filterItems = (searchValue, restaurantAllMenu) => {
  const searchValueLower = searchValue.toLowerCase();

  return restaurantAllMenu
    .map(group => {
      // Filter items within each group
      const filteredItems = group.itemCards.filter(item => {
        const itemName = item?.card?.info?.name?.toLowerCase() || '';
        return itemName.includes(searchValueLower);
      });

      // Return the group only if there are matching items
      return filteredItems.length > 0 ? { itemCards: filteredItems } : null;
    })
    .filter(group => group !== null); // Remove groups that have no matching items
};