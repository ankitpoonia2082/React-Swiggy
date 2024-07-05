// Search bar --->
// import { restaurantList } from "../../config";
// import { useState } from "react";

// const filterRestro = (searchtxt, restaurantList) => {
//     let data = restaurantList.filter((restaurant) => restaurant.info.name.includes(searchtxt));
// };


// const Search = () => {
//     let [searchtxt, setSearchtxt] = useState(''); // to create a state variable 
//     let [restaurants, setRestaurants] = useState(restaurantList)
//     return (
//         <div className="searchbar">
//             <input type="text" value={searchtxt} onChange={(e) => {
//                 setRestaurants(filterRestro(searchtxt, restaurantList));
//             }} placeholder="Search here..." input />

//         </div>
//     );
// };

// export default Search;