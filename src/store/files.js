import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import moment from "moment";

import { apiCallBegan } from "./api";

import { API_ERROR_MESSAGE } from "../config.json";

const url = "/attachments";

const slice = createSlice({
  name: "files",
  initialState: {
    originals: [],
    thumbnails: [],
    apiResult: {
      status: 0,
      message: "",
    },
    loading: false,
    lastFetch: null,
  },

  reducers: {
    filesRequested: (files, action) => {
      files.loading = true;
    },

    originalFilesReceived: (files, action) => {
      const { data, status, message } = action.payload;

      if (status === 200) {
        files.originals = data;
        files.apiResult = {
          status,
          message,
        };
        toast.success(message, { className: "alert-success" });
      } else toast.error(message, { className: "alert-danger" });
      files.loading = false;
    },

    thumbnailFilesReceived: (files, action) => {
      const { data, status, message } = action.payload;

      if (status === 200) {
        files.thumbnails = data;
        files.apiResult = {
          status,
          message,
        };
        toast.success(message, { className: "alert-success" });
      } else toast.error(message, { className: "alert-danger" });
      files.loading = false;
    },

    filesRequestFailed: (files, action) => {
      files.loading = false;
      toast.error(API_ERROR_MESSAGE, { className: "alert-danger" });
    },
  },
});

export const {
  filesRequested,
  originalFilesReceived,
  thumbnailFilesReceived,
  filesRequestFailed,
} = slice.actions;

export default slice.reducer;

export const getOriginals = (files) => (dispatch, getState) => {
  return dispatch(
    apiCallBegan({
      url,
      data: JSON.stringify(files),
      method: "GET",
      onStart: filesRequested.type,
      onSuccess: originalFilesReceived.type,
      onError: filesRequestFailed.type,
    })
  );
};

export const getThumbnails = (files) => (dispatch, getState) => {
  return dispatch(
    apiCallBegan({
      url,
      data: JSON.stringify(files),
      method: "GET",
      onStart: filesRequested.type,
      onSuccess: thumbnailFilesReceived.type,
      onError: filesRequestFailed.type,
    })
  );
};
