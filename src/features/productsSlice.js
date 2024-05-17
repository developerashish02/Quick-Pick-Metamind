import { createSlice } from "@reduxjs/toolkit";

const productsSlice = createSlice({
  name: "products",
  initialState: {
    allProducts: [],
    electronics: [],
    Jewelry: [],
    means: [],
    womens: [],
  },

  reducers: {
    addAllProducts: (state, action) => {
      state.allProducts = action.payload;
    },

    addAllElectronics: (state, action) => {
      state.electronics = action.payload;
    },
    addAllJewelry: (state, action) => {
      state.Jewelry = action.payload;
    },
    addAllMeans: (state, action) => {
      state.means = action.payload;
    },
    addAllWomen: (state, action) => {
      state.womens = action.payload;
    },
  },
});

export const {
  addAllProducts,
  addAllElectronics,
  addAllJewelry,
  addAllMeans,
  addAllWomen,
} = productsSlice.actions;

export default productsSlice.reducer;
