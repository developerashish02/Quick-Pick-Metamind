import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
    totalPrice: 0,
  },
  reducers: {
    addToCart: (state, action) => {
      const item = action.payload;
      const existingItem = state.cart.find(
        (cartItem) => cartItem.id === item.id
      );

      if (existingItem) {
        existingItem.quantity += 1;
        state.totalPrice += item.price;
      } else {
        state.cart.push({ ...item, quantity: 1, totalPrice: item.price });
        state.totalPrice += item?.price;
      }
    },

    removeFromCart: (state, action) => {
      const itemId = action.payload;
      const existingItem = state.cart.find(
        (cartItem) => cartItem.id === itemId
      );

      console.log(existingItem, "existingItem");
      if (existingItem) {
        if (existingItem.quantity > 1) {
          existingItem.quantity -= 1;
          state.totalPrice -= existingItem.price;
        } else {
          state.cart = state.cart.filter((cartItem) => cartItem.id !== itemId);
          state.totalPrice -= existingItem.price;
        }
      }
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;
