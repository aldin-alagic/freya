import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import moment from "moment";

import { apiCallBegan } from "./api";

import { API_ERROR_MESSAGE, CACHE_PERIOD } from "../config.json";

const ISSUE_URL = "/issue";

const initialNewIssueState = {
  vehicles: [
    {
      brand: null,
      model: null,
      yearFrom: null,
      years: [],
      variant: null,
    },
  ],
  fuelType: null,
  transmission: null,
  issueTypeOption: null,
  description: {
    title: "",
    shortDescription: "",
    detailedDescription: "",
    keywords: [],
  },
  attachments: [],
  visibility: false,
  note: "",
  advertisements: {
    position: { value: 0, label: "No top position advertisements" },
    notifications: { value: 0, label: "No notification advertisements" },
  },
  views: 0,
  step: 0,
  status: "process",
};

const slice = createSlice({
  name: "issues",
  initialState: {
    newIssue: initialNewIssueState,
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
    issuesRequested: (issues, action) => {
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

    issuesRequestFailed: (issues, action) => {
      issues.loading = false;
      toast.error(API_ERROR_MESSAGE, { className: "alert-danger" });
    },

    newIssueUpdated: (issues, action) => {
      for (const field in action.payload)
        issues.newIssue[field] = action.payload[field];
    },

    newIssueReset: (issues, action) => {
      issues.newIssue = initialNewIssueState;
    },
  },
});

export const {
  issuesRequested,
  issuesReceived,
  issuesRequestFailed,
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
      onStart: issuesRequested.type,
      onSuccess: issuesReceived.type,
      onError: issuesRequestFailed.type,
    })
  );
};

export const createIssue = () => (dispatch, getState) => {
  const { token } = getState().auth;
  const {
    vehicles: vehiclesDiff,
    fuelType: fuel_type,
    transmission,
    issueTypeOption: issue_type_option,
    note,
    visibility,
    attachments,
    advertisements,
  } = getState().entities.issues.newIssue;

  const {
    title,
    shortDescription: short_description,
    detailedDescription: long_description,
    keywords,
  } = getState().entities.issues.newIssue.description;

  const vehicles = vehiclesDiff.map((vehicle) => {
    return {
      brand: vehicle.brand,
      model: vehicle.model,
      model_variant: vehicle.variant,
      year_from: vehicle.years[0],
    };
  });

  const data = {
    vehicles,
    fuel_type,
    transmission,
    issue_type_option,
    title,
    short_description,
    long_description,
    note,
    keywords,
    visibility,
    attachments,
    advertisements,
  };

  return dispatch(
    apiCallBegan({
      data,
      url: ISSUE_URL,
      method: "POST",
      headers: { Authorization: token },
      onStart: issuesRequested.type,
      onSuccess: issueCreated.type,
      onError: issuesRequestFailed.type,
    })
  );
};
