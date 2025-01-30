import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const existingProduct = state.cart.find(
        (product) => product.id === action.payload.id
      );

      if (existingProduct) {
        existingProduct.qty += action.payload.qty;
      } else {
        state.cart.push(action.payload);
      }
    },
    removeFromCart(state, action) {
        state.cart = state.cart.filter((product) => product.id !== action.payload.id);
    }
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
