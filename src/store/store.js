import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./apiSlice";
import { slice } from "./reducer";

export const store = configureStore({
  reducer: {
    counter: slice,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});
