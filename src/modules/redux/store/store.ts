import { combineReducers, configureStore } from "@reduxjs/toolkit";

import vegetableReducer from "../reducers/VegetablesSlice";

const rootReducer = combineReducers({ vegetableReducer });

export const setupStore = configureStore({ reducer: rootReducer });

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore.getState>;
export type AppDispatch = typeof setupStore.dispatch;
