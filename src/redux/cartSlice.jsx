import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
  },
});

export const { setProducts } = cartSlice.actions;
export default cartSlice.reducer;
