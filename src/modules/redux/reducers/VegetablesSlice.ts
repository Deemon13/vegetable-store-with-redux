import { createSlice } from "@reduxjs/toolkit";

import { fetchVegetables } from "./VegetablesThunks";

import type { VegetableType } from "../../type/types";

interface VegetablesState {
  vegetables: VegetableType[];
  isLoading: boolean;
}

const initialState: VegetablesState = {
  vegetables: [],
  isLoading: false,
};

export const vegetablesSlice = createSlice({
  name: "vegetables",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchVegetables.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchVegetables.fulfilled, (state, action) => {
        state.isLoading = false;
        state.vegetables = action.payload;
      })
      .addCase(fetchVegetables.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export default vegetablesSlice.reducer;
