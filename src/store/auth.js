import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import jwt_decode from "jwt-decode";

import { apiCallBegan } from "./api";

import { AUTH_TOKEN, AUTH_URL, API_ERROR_MESSAGE } from "../config.json";

const token = localStorage.getItem(AUTH_TOKEN);

const getUser = () => {
  if (token) {
    let data = jwt_decode(token);
    return {
      id: data.user_id,
      email: data.email,
      username: data.username,
      firstname: data.firstname,
      lastname: data.lastname,
      role: data.account_type,
      wallet: 10,
    };
  } else return {};
};

const slice = createSlice({
  name: "auth",
  initialState: {
    token: token,
    user: getUser(),
    loading: false,
    apiResult: {
      status: 0,
      message: "",
    },
  },

  reducers: {
    authenticationStarted: (auth, action) => {
      auth.loading = true;
    },

    authenticated: (auth, action) => {
      const { data, status, message } = action.payload;
      const tokenDecoded = jwt_decode(data.auth_token);
      if (status === 200) {
        auth.token = data.auth_token;
        auth.user = {
          id: tokenDecoded.user_id,
          email: tokenDecoded.email,
          username: tokenDecoded.username,
          firstname: tokenDecoded.firstname,
          lastname: tokenDecoded.lastname,
          role: tokenDecoded.account_type,
          wallet: data.wallet,
        };
        auth.apiResult = {
          status,
          message,
        };
        toast.success(message, { className: "alert-success" });
      } else toast.error(message, { className: "alert-danger" });
      auth.loading = false;
    },

    deAuthenticated: (auth, action) => {
      auth.token = "";
      auth.user = {};
      toast.success("You have been succesfuly logged out", {
        className: "alert-success",
      });
    },

    authenticationFailed: (auth, action) => {
      auth.loading = false;
      toast.error(API_ERROR_MESSAGE, { className: "alert-danger" });
    },
  },
});

export const {
  authenticationStarted,
  authenticated,
  deAuthenticated,
  authenticationFailed,
} = slice.actions;
export default slice.reducer;

export const authenticateUser = (email, password) =>
  apiCallBegan({
    url: AUTH_URL,
    method: "POST",
    data: { email, password },
    onStart: authenticationStarted.type,
    onSuccess: authenticated.type,
    onError: authenticationFailed.type,
  });
