import axios from "axios";
import {
  loginStart,
  loginSuccess,
  registerFault,
  registerStart,
  registerSuccess,
} from "./authSlice";

// post register
export const apiRegister = async (dispatch, newItem) => {
  dispatch(registerStart());
  try {
    const res = await axios.post("/api/register", newItem);
    dispatch(registerSuccess(res.data));
  } catch (error) {
    console.log(error);
    dispatch(registerFault());
  }
};

// post login
export const apiLogin = async (dispatch, item) => {
  dispatch(loginStart());
  try {
    const res = await axios.post("/api/login", item);
    dispatch(loginSuccess(res.data));
  } catch (error) {
    console.log(error);
  }
};
