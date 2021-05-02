import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import moment from "moment";

import { apiCallBegan } from "./api";

import { API_ERROR_MESSAGE, CACHE_PERIOD } from "../config.json";

const solutionUrl = "/solution";
const initialSolutionState = {
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
    type: "",
    option: "",
    codes: [],
    description: "",
    attachments: [],
  },
  solution: {
    title: "",
    description: null,
    attachments: [],
    parts: [],
    tools: [],
  },
  finish: {
    keywords: [],
    packages: {
      standard: {
        price: 0,
        options: [],
      },
    },
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
  name: "solutions",
  initialState: {
    solution: initialSolutionState,
    public: [],
    user: [],
    purchased: [],
    apiResult: {
      status: 0,
      message: "",
    },
    loading: false,
    lastFetch: null,
  },

  reducers: {
    requestStarted: (solutions, action) => {
      solutions.loading = true;
    },

    solutionReceived: (solutions, action) => {
      const { data, status, message } = action.payload;

      if (status === 200) {
        const {solution_id, advertisement} = data;
        
        const solution = data;
        solution.solution.id = solution_id;
        solution.extra.advertisement = advertisement;

        solutions.solution = solution;
        solutions.apiResult = {
          status,
          message,
        };
      } else toast.error(message, { className: "alert-danger" });
      solutions.loading = false;
    },

    publicSolutionsReceived: (solutions, action) => {
      const { data, status, message } = action.payload;
      if (status === 200) {
        solutions.public = data;
        solutions.apiResult = {
          status,
          message,
        };
      } else toast.error(message, { className: "alert-danger" });
      solutions.loading = false;
    },

    userSolutionsReceived: (solutions, action) => {
      const { data, status, message } = action.payload;

      if (status === 200) {
        solutions.user = data.my_solutions;
        solutions.apiResult = {
          status,
          message,
        };
      } else toast.error(message, { className: "alert-danger" });
      solutions.loading = false;
    },

    purchasedSolutionsReceived: (solutions, action) => {
      const { data, status, message } = action.payload;

      if (status === 200) {
        let purchasedSolutions = data.map((solution) => {
          return {
            solution_id: solution.solution_id,
            title: solution.solution_title,
            short_description: "Not provided",
            keywords: ["Not provided"],
            user_name: "Not provided",
            user_id: "Not provided",
            offer: [
              {
                additional_package: [
                  "Full solution",
                  "All solution attachments",
                  "Expert assistance",
                  "Premium support",
                ],
                assistance_minutes: 40,
                offer_type: "Premium",
                price: "Not provided",
              },
              {
                offer_type: "Standard",
                price: "Not provided",
              },
            ],
            views: solution.solution_views,
          };
        });

        solutions.purchased = purchasedSolutions;
        solutions.apiResult = {
          status,
          message,
        };
      } else toast.error(message, { className: "alert-danger" });
      solutions.loading = false;
    },

    solutionCreated: (solutions, action) => {
      const { status, message } = action.payload;

      if (status === 200) {
        solutions.apiResult = {
          status,
          message,
        };
        toast.success(message, { className: "alert-success" });
      } else toast.error(message, { className: "alert-danger" });
      solutions.loading = false;
    },

    requestFailed: (solutions, action) => {
      solutions.loading = false;
      toast.error(API_ERROR_MESSAGE, { className: "alert-danger" });
    },

    newSolutionUpdated: (solutions, action) => {
      for (const firstKey in action.payload) {
        if (firstKey === "step" || firstKey === "status")
          solutions.solution[firstKey] = action.payload[firstKey];
        else {
          for (const secondKey in action.payload[firstKey]) {
            if (
              secondKey === "attachment" &&
              solutions.solution[firstKey]["attachments"].find(
                (attachment) =>
                  attachment.name ===
                  action.payload[firstKey]["attachment"].name
              ) === undefined
            ) {
              solutions.solution[firstKey]["attachments"].push(
                action.payload[firstKey]["attachment"]
              );
            } else
              solutions.solution[firstKey][secondKey] =
                action.payload[firstKey][secondKey];
          }
        }
      }
    },

    newSolutionReset: (solutions, action) => {
      solutions.newSolution = initialSolutionState;
    },
  },
});

export const {
  requestStarted,
  solutionReceived,
  publicSolutionsReceived,
  userSolutionsReceived,
  purchasedSolutionsReceived,
  requestFailed,
  newSolutionUpdated,
  newSolutionReset,
  solutionCreated,
} = slice.actions;

export default slice.reducer;

export const getSolution = (id) => (dispatch, getState) => {
  const { token } = getState().auth;
  return dispatch(
    apiCallBegan({
      url: `${solutionUrl}/${id}`,
      method: "GET",
      headers: { Authorization: token },
      onStart: requestStarted.type,
      onSuccess: solutionReceived.type,
      onError: requestFailed.type,
    })
  );
};

export const getPublicSolutions = () => (dispatch, getState) => {
  const { lastFetch } = getState().entities.solutions;
  const { token: Authorization } = getState().auth;
  const headers = Authorization ? { Authorization } : null;
  
  const diffInMinutes = moment().diff(moment(lastFetch), "minutes");
  if (diffInMinutes < CACHE_PERIOD) return;

  return dispatch(
    apiCallBegan({
      url: `${solutionUrl}/all/public`,
      method: "GET",
      headers,
      onStart: requestStarted.type,
      onSuccess: publicSolutionsReceived.type,
      onError: requestFailed.type,
    })
  );
};

export const getUserSolutions = () => (dispatch, getState) => {
  const { lastFetch } = getState().entities.solutions;
  const { token: Authorization } = getState().auth;
  const headers = Authorization ? { Authorization } : null;

  const diffInMinutes = moment().diff(moment(lastFetch), "minutes");
  if (diffInMinutes < CACHE_PERIOD) return;

  return dispatch(
    apiCallBegan({
      url: `${solutionUrl}/all`,
      method: "GET",
      headers,
      onStart: requestStarted.type,
      onSuccess: userSolutionsReceived.type,
      onError: requestFailed.type,
    })
  );
};

export const getPurchasedSolutions = () => (dispatch, getState) => {
  const { lastFetch } = getState().entities.solutions;
  const { token: Authorization } = getState().auth;
  const headers = Authorization ? { Authorization } : null;

  const diffInMinutes = moment().diff(moment(lastFetch), "minutes");
  if (diffInMinutes < CACHE_PERIOD) return;

  return dispatch(
    apiCallBegan({
      url: `${solutionUrl}/all/purchased`,
      method: "GET",
      headers,
      onStart: requestStarted.type,
      onSuccess: purchasedSolutionsReceived.type,
      onError: requestFailed.type,
    })
  );
};

export const createSolution = () => (dispatch, getState) => {
  const { token } = getState().auth;
  const {
    vehicle,
    issue,
    solution,
    finish,
  } = getState().entities.solutions.solution;

  return dispatch(
    apiCallBegan({
      data: { vehicle, issue, solution, finish },
      url: solutionUrl,
      method: "POST",
      headers: { Authorization: token },
      onStart: requestStarted.type,
      onSuccess: solutionCreated.type,
      onError: requestFailed.type,
    })
  );
};
