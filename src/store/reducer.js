import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  transactions: []
};
export const slice = createSlice({
  name: "savings",
  initialState,
  reducers: {
    getTransactions: (state) => {},
  }
});

export const { getTransactions } = slice.actions;
export default slice.reducer;
