import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import moment from "moment";

import { apiCallBegan } from "./api";

import { API_ERROR_MESSAGE, CACHE_PERIOD } from "../config.json";

const ISSUE_URL = "/issue";

const initialIssueState = {
  vehicle: {
    vehicles: [
      {
        brand: null,
        model: null,
        variant: null,
        years: [],
      },
    ],
    fuelType: "",
    transmission: "",
  },
  issue: {
    title: "",
    type: "",
    option: "",
    code: "",
    description: "",
    attachments: [],
  },
  finish: {
    keywords: [],
    visibility: "Public",
    advertisements: {
      position: null,
      notifications: null,
    },
  },
  step: 0,
  status: "process",
};

const slice = createSlice({
  name: "issues",
  initialState: {
    issue: initialIssueState,
    public: [],
    private: [],
    apiResult: {
      status: 0,
      message: "",
    },
    loading: false,
    lastFetch: null,
  },

  reducers: {
    requestStarted: (issues, action) => {
      issues.loading = true;
    },

    issuesReceived: (issues, action) => {
      const { data, status, message } = action.payload;

      if (status === 200) {
        issues.public = data.public_issues;
        issues.private = data.user_issues;
        issues.apiResult = {
          status,
          message,
        };
        toast.success(message, { className: "alert-success" });
      } else toast.error(message, { className: "alert-danger" });
      issues.loading = false;
    },

    issueCreated: (issues, action) => {
      const { status, message } = action.payload;

      if (status === 200) {
        issues.apiResult = {
          status,
          message,
        };
        toast.success(message, { className: "alert-success" });
      } else toast.error(message, { className: "alert-danger" });
      issues.loading = false;
    },

    requestFailed: (issues, action) => {
      issues.loading = false;
      toast.error(API_ERROR_MESSAGE, { className: "alert-danger" });
    },

    newIssueUpdated: (issues, action) => {
      for (const firstKey in action.payload) {
        if (firstKey === "step" || firstKey === "status")
          issues.issue[firstKey] = action.payload[firstKey];
        else {
          for (const secondKey in action.payload[firstKey]) {
            if (
              secondKey === "attachment" &&
              issues.issue[firstKey]["attachments"].find(
                (attachment) =>
                  attachment.name ===
                  action.payload[firstKey]["attachment"].name
              ) === undefined
            ) {
              issues.issue[firstKey]["attachments"].push(
                action.payload[firstKey]["attachment"]
              );
            } else
              issues.issue[firstKey][secondKey] =
                action.payload[firstKey][secondKey];
          }
        }
      }
    },

    newIssueReset: (issues, action) => {
      issues.issue = initialIssueState;
    },
  },
});

export const {
  requestStarted,
  issuesReceived,
  requestFailed,
  newIssueUpdated,
  newIssueReset,
  issueCreated,
} = slice.actions;

export default slice.reducer;

export const loadIssues = () => (dispatch, getState) => {
  const { lastFetch } = getState().entities.issues;
  const { token } = getState().auth;

  const diffInMinutes = moment().diff(moment(lastFetch), "minutes");
  if (diffInMinutes < CACHE_PERIOD) return;

  return dispatch(
    apiCallBegan({
      url: `${ISSUE_URL}/all`,
      method: "GET",
      headers: { Authorization: token },
      onStart: requestStarted.type,
      onSuccess: issuesReceived.type,
      onError: requestFailed.type,
    })
  );
};

export const createIssue = () => (dispatch, getState) => {
  const { token } = getState().auth;
  const { vehicle, issue, finish } = getState().entities.issues.issue;

  return dispatch(
    apiCallBegan({
      data: { vehicle, issue, finish },
      url: ISSUE_URL,
      method: "POST",
      headers: { Authorization: token },
      onStart: requestStarted.type,
      onSuccess: issueCreated.type,
      onError: requestFailed.type,
    })
  );
};
