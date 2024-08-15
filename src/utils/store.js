import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./slices/cartSlice";

const store = configureStore({
    // Adding cart Slice
    reducer: {
        cart: cartSlice,
    }

});

export default store;