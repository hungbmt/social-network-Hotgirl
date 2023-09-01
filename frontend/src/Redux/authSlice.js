import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    login: {
      item: null,
      isFiching: false,
      err: false,
    },
    register: {
      item: null,
      isFiching: false,
      err: false,
    },
  },
  reducers: {
    // register
    registerStart: (state) => {
      state.register.isFiching = true;
    },
    registerSuccess: (state, action) => {
      state.register.isFiching = false;
      state.register.err = false;
      state.register.item = action.payload;
    },
    registerFault: (state) => {
      state.register.isFiching = false;
      state.register.err = true;
      state.register.item = null;
    },
    // login
    loginStart: (state) => {
      state.login.isFiching = true;
    },
    loginSuccess: (state, action) => {
      state.login.isFiching = false;
      state.login.err = false;
      state.login.item = action.payload;
    },
    loginFailt: (state) => {
      state.login.isFiching = false;
      state.login.err = true;
      state.login.item = null;
    },
    // logout
    logoutstart: (state) => {
      state.login.isFiching = true;
    },
    logoutSuccess: (state) => {
      state.login.isFiching = false;
      state.login.err = false;
      state.login.item = null;
    },
    logoutfailt: (state) => {
      state.login.err = true;
      state.login.isFiching = false;
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
  // logout
  logoutstart,
  logoutSuccess,
  logoutfailt,
} = authSlice.actions;

export default authSlice.reducer;
