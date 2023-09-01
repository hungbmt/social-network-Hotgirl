import { createSlice } from "@reduxjs/toolkit";

export const create = createSlice({
  name: "create",
  initialState: {
    createPosts: {
      item: null,
      isFetching: false,
      error: false,
    },
  },
  reducers: {
    createStart: (state) => {
      state.createPosts.isFetching = true;
    },
    createSuccess: (state, action) => {
      state.createPosts.isFetching = false;
      state.createPosts.error = false;
      state.createPosts.item = action.payload;
    },
    createFault: (state) => {
      state.createPosts.isFetching = false;
      state.createPosts.error = true;
      state.createPosts.item = null;
    },
  },
});

export const { createStart, createSuccess, createFault } = create.actions;

export default create.reducer;
