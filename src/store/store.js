import { configureStore } from "@reduxjs/toolkit";
import productsSlice from "../features/productsSlice";
import cartSlice from "../features/cartSlice";

const store = configureStore({
  reducer: {
    products: productsSlice,
    cart: cartSlice,
  },
});

export default store;
