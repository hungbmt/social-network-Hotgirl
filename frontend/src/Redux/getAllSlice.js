import { createSlice } from "@reduxjs/toolkit";

export const getAllSlice = createSlice({
  name: "getAll",
  initialState: {
    getAll: {
      item: null,
      isFetching: false,
      error: false,
    },
  },
  reducers: {
    getAllStart: (state) => {
      state.getAll.isFetching = true;
    },
    getAllSuccess: (state, action) => {
      state.getAll.isFetching = false;
      state.getAll.error = false;
      state.getAll.item = action.payload;
    },
    getAllFault: (state) => {
      state.getAll.isFetching = false;
      state.getAll.error = true;
      state.getAll.item = null;
    },
  },
});

export const { getAllStart, getAllSuccess, getAllFault } = getAllSlice.actions;

export default getAllSlice.reducer;
