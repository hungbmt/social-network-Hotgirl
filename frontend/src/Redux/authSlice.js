import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    auth: {
      item: null,
      isFiching: false,
      err: false,
    },
  },
  reducers: {
    // register
    registerStart: (state) => {
      state.auth.isFiching = true;
    },
    registerSuccess: (state, action) => {
      state.auth.isFiching = false;
      state.auth.err = false;
      state.auth.item = action.payload;
    },
    registerFault: (state) => {
      state.auth.isFiching = false;
      state.auth.err = true;
      state.auth.item = null;
    },
    // login
    loginStart: (state) => {
      state.auth.isFiching = true;
    },
    loginSuccess: (state, action) => {
      state.auth.isFiching = false;
      state.auth.err = false;
      state.auth.item = action.payload;
    },
    loginFailt: (state) => {
      state.auth.isFiching = false;
      state.auth.err = true;
      state.auth.item = null;
    },
  },
});

export const {
  // register
  registerStart,
  registerSuccess,
  registerFault,
  // login
  loginStart,
  loginSuccess,
  loginFailt,
} = authSlice.actions;

export default authSlice.reducer;
