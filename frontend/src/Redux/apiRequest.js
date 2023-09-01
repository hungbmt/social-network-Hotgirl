import axios from "axios";
import {
  loginStart,
  loginSuccess,
  logoutSuccess,
  logoutfailt,
  logoutstart,
  registerFault,
  registerStart,
  registerSuccess,
} from "./authSlice";
import { createFault, createStart, createSuccess } from "./createSlice";
import { getAllFault, getAllStart, getAllSuccess } from "./getAllSlice";

// post register
export const apiRegister = async (dispatch, newItem) => {
  dispatch(registerStart());
  try {
    const res = await axios.post("/api/register", newItem, {
      headers: { "Content-Type": "multipart/form-data" },
    });
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

// create Post
export const apiCreate = async (dispatch, newitem, RefeshToken) => {
  dispatch(createStart());
  try {
    const req = await axios.post("/api/create", newitem, {
      headers: {
        "Content-Type": "multipart/form-data",
        token: `Bearer ${RefeshToken}`,
      },
    });
    dispatch(createSuccess(req.data));
  } catch (error) {
    dispatch(createFault());
  }
};

// get All Item
export const getAllItem = async (dispatch) => {
  dispatch(getAllStart());
  try {
    const req = await axios.get("/apiv1/getall");
    dispatch(getAllSuccess(req.data));
  } catch (error) {
    dispatch(getAllFault());
  }
};

export const apiLogout = async (dispatch, RefeshToken, navigate) => {
  dispatch(logoutstart());
  try {
    await axios.get("/api/logout", {
      headers: {
        token: `Bearer ${RefeshToken}`,
      },
    });
    dispatch(logoutSuccess());
    navigate("/");
  } catch (error) {
    dispatch(logoutfailt());
  }
};
