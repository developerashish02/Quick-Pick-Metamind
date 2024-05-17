import { createSlice } from "@reduxjs/toolkit";

const productsSlice = createSlice({
  name: "products",
  initialState: {
    allProducts: [],
  },

  reducers: {
    addAllProducts: (state, action) => {
      state.allProducts = action.payload;
    },
  },
});

export const { addAllProducts } = productsSlice.actions;

export default productsSlice.reducer;
