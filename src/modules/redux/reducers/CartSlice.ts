import { createSlice } from "@reduxjs/toolkit";

import type { VegetableType } from "../../type/types";

interface CartState {
  products: VegetableType[];
}

const initialState: CartState = {
  products: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const { product, amount } = action.payload;

      const existingProduct = state.products.find(
        (item) => item.id === product.id
      );

      if (existingProduct) {
        existingProduct.amount += amount;
      } else {
        state.products.push({ ...product, amount });
      }
    },
  },
});

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;
