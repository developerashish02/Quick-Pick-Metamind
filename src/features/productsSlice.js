import { createSlice } from "@reduxjs/toolkit";

const productsSlice = createSlice({
  name: "products",
  initialState: {
    allProducts: [],
    electronics: [],
  },

  reducers: {
    addAllProducts: (state, action) => {
      state.allProducts = action.payload;
    },

    addAllElectronics: (state, action) => {
      state.electronics = action.payload;
    },
  },
});

export const { addAllProducts, addAllElectronics } = productsSlice.actions;

export default productsSlice.reducer;
