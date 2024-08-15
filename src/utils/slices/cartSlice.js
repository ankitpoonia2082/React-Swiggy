import { createSlice } from "@reduxjs/toolkit";

// Creating cart Slice...

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [],
    },
    reducers: {
        addItem: (state, action) => {
            state.items.push(action.payload);
        },

        removeItem: (state, action) => {
            const id = action.payload.id;
            state.items.map((item, index) => {
                if (item.id == id)
                    state.items.splice(index, 1);
            })
        },

        clearCart: (state) => {
            state.items = [];
        },
    },

});


export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;