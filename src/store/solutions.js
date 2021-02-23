import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import moment from "moment";

import { apiCallBegan } from "./api";

import { API_ERROR_MESSAGE, CACHE_PERIOD } from "../config.json";

const slice = createSlice({
  name: "solutions",
  initialState: {
    list: [],
    apiResult: {
      status: 0,
      message: "",
    },
    loading: false,
    lastFetch: null,
  },
  reducers: {
    solutionsRequested: (solutions, action) => {
      solutions.loading = true;
    },

    solutionsReceived: (solutions, action) => {
      const { data, status, message } = action.payload;

      if (status === 200) {
        solutions.list = data;
        solutions.apiResult = {
          status,
          message,
        };
        toast.success(message, { className: "alert-success" });
      } else toast.error(message, { className: "alert-danger" });
      solutions.loading = false;
    },

    solutionsRequestFailed: (solutions, action) => {
      solutions.loading = false;
      toast.error(API_ERROR_MESSAGE, { className: "alert-danger" });
    },
  },
});

export const {
  solutionsRequested,
  solutionsReceived,
  solutionsRequestFailed,
} = slice.actions;

export default slice.reducer;

export const loadSolutions = () => (dispatch, getState) => {
  const { lastFetch } = getState().entities.solutions;
  const { token } = getState().auth;

  const diffInMinutes = moment().diff(moment(lastFetch), "minutes");
  if (diffInMinutes < CACHE_PERIOD) return;

  return dispatch(
    apiCallBegan({
      url: "/get-solutions",
      method: "GET",
      headers: { Auth_Token: token },
      onStart: solutionsRequested.type,
      onSuccess: solutionsReceived.type,
      onError: solutionsRequestFailed.type,
    })
  );
};
