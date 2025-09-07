import { createSlice } from "@reduxjs/toolkit";

import type { CartVegetableType } from "../../type/types";

interface CartState {
  products: CartVegetableType[];
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
    increaseAmount: (state, action) => {
      const product = action.payload;

      state.products.map((item) => {
        if (item.id === product.id) {
          return { amount: (item.amount += 1) };
        } else {
          return item;
        }
      });
    },
    decreaseAmount: (state, action) => {
      const product = action.payload;

      state.products.map((item) => {
        if (item.id === product.id) {
          return { amount: (item.amount -= 1) };
        } else {
          return item;
        }
      });
    },
    removeProduct: (state, action) => {
      const product = action.payload;

      const newCart = state.products.filter((item) => item.id !== product.id);
      state.products = [...newCart];
    },
  },
});

export const { addToCart, increaseAmount, decreaseAmount, removeProduct } =
  cartSlice.actions;
export default cartSlice.reducer;
