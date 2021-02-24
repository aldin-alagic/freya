import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import moment from "moment";

import { apiCallBegan } from "./api";

import { API_ERROR_MESSAGE, CACHE_PERIOD } from "../config.json";

const solutionUrl = "/solution";

const initialNewSolutionState = {
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
    parts: [],
    tools: [],
    keywords: [],
  },
  attachments: [],
  offers: {
    standard: {
      price: null,
      options: ["Full solution", "All solution attachments"],
    },
    premium: {
      price: null,
      options: [
        "Full solution",
        "All solution attachments",
        "Expert assistance",
      ],
      assistanceMinutes: null,
    },
  },
  visibility: false,
  note: "",
  advertisements: {
    position: { value: 0, label: "No top position advertisements" },
    notifications: { value: 0, label: "No notification advertisements" },
  },
  step: 0,
  status: "process",
};

const slice = createSlice({
  name: "solutions",
  initialState: {
    newSolution: initialNewSolutionState,
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
    solutionsRequested: (solutions, action) => {
      solutions.loading = true;
    },

    solutionsReceived: (solutions, action) => {
      const { data, status, message } = action.payload;

      if (status === 200) {
        solutions.public = data.public_solutions;
        solutions.private = data.user_solutions;
        solutions.apiResult = {
          status,
          message,
        };
        toast.success(message, { className: "alert-success" });
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

    solutionsRequestFailed: (solutions, action) => {
      solutions.loading = false;
      toast.error(API_ERROR_MESSAGE, { className: "alert-danger" });
    },

    newSolutionUpdated: (solutions, action) => {
      for (const field in action.payload)
        solutions.newSolution[field] = action.payload[field];
    },

    newSolutionReset: (solutions, action) => {
      solutions.newSolution = initialNewSolutionState;
    },
  },
});

export const {
  solutionsRequested,
  solutionsReceived,
  solutionsRequestFailed,
  newSolutionUpdated,
  newSolutionReset,
  solutionCreated,
} = slice.actions;

export default slice.reducer;

export const loadSolutions = () => (dispatch, getState) => {
  const { lastFetch } = getState().entities.solutions;
  const { token } = getState().auth;

  const diffInMinutes = moment().diff(moment(lastFetch), "minutes");
  if (diffInMinutes < CACHE_PERIOD) return;

  return dispatch(
    apiCallBegan({
      url: `${solutionUrl}/all`,
      method: "GET",
      headers: { Authorization: token },
      onStart: solutionsRequested.type,
      onSuccess: solutionsReceived.type,
      onError: solutionsRequestFailed.type,
    })
  );
};

export const createSolution = () => (dispatch, getState) => {
  const { token } = getState().auth;
  const {
    vehicles: vehiclesDiff,
    fuelType: fuel_type,
    offers,
    transmission,
    issueTypeOption: issue_type_option,
    note,
    visibility,
    attachments,
    advertisements,
  } = getState().entities.solutions.newSolution;

  const {
    title,
    shortDescription: short_description,
    detailedDescription: long_description,
    keywords,
    parts,
    tools,
  } = getState().entities.solutions.newSolution.description;

  const vehicles = vehiclesDiff.map((vehicle) => {
    return {
      brand: vehicle.brand,
      model: vehicle.model,
      model_variant: vehicle.variant,
      year_from: vehicle.years[0],
    };
  });

  let offer = [
    {
      offer_type: "Premium",
      price: offers.premium.price,
      additional_package: offers.premium.options,
      assistance_minutes: offers.premium.assistanceMinutes,
    },
    {
      offer_type: "Standard",
      price: offers.standard.price,
    },
  ];

  const data = {
    vehicles,
    fuel_type,
    transmission,
    issue_type_option,
    title,
    short_description,
    long_description,
    offer,
    note,
    keywords,
    parts,
    tools,
    visibility,
    attachments,
    advertisements,
  };

  return dispatch(
    apiCallBegan({
      data,
      url: solutionUrl,
      method: "POST",
      headers: { Authorization: token },
      onStart: solutionsRequested.type,
      onSuccess: solutionCreated.type,
      onError: solutionsRequestFailed.type,
    })
  );
};
