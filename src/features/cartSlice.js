import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
    totalPrice: 0,
  },

  reducers: {
    addItemToCart: (state, action) => {
      const item = action.payload;
      const existingItem = state.cart.find(
        (cartItem) => cartItem.id === item.id
      );

      if (existingItem) {
        existingItem.quantity += 1;
        state.totalPrice += item.price;
      } else {
        state.cart.push({ ...item, quantity: 1 });
        state.totalPrice += item.price;
      }
    },

    removeItemFromCart: (state, action) => {
      const itemId = action.payload;
      const itemIndex = state.cart.findIndex((item) => item.id === itemId);

      if (itemIndex !== -1) {
        const item = state.cart[itemIndex];
        state.totalPrice -= item.price * item.quantity;
        state.cart.splice(itemIndex, 1);
      }

      if (state.totalPrice < 0) {
        state.totalPrice = 0;
      }
    },

    updateItemQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const item = state.cart.find((item) => item.id === id);

      if (item) {
        state.totalPrice -= item.price * item.quantity;
        item.quantity = quantity;
        state.totalPrice += item.price * quantity;
      }

      if (state.totalPrice < 0) {
        state.totalPrice = 0;
      }
    },

    clearCart: (state) => {
      state.cart = [];
      state.totalPrice = 0;
    },
  },
});

export const {
  addItemToCart,
  removeItemFromCart,
  updateItemQuantity,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;
