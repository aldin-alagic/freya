import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

import { apiCallBegan } from "./api";

import { AUTH_TOKEN, AUTH_URL, API_ERROR_MESSAGE } from "../config.json";

const slice = createSlice({
  name: "auth",
  initialState: {
    token: localStorage.getItem(AUTH_TOKEN),
    user: {},
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

      if (status === 200) {
        auth.token = data.auth_token;
        auth.user = {
          email: data.email,
          username: data.username,
          firstname: data.firstname,
          lastname: data.lastname,
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
