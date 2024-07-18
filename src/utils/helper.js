
// Filter Function 
export const filterRestro = (searchtxt, restaurantList) => {
  return restaurantList.filter((restaurant) => restaurant?.info?.name?.toLowerCase().includes(searchtxt.toLowerCase()));
};