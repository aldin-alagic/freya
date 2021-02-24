import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import moment from "moment";

import { apiCallBegan } from "./api";

import { API_ERROR_MESSAGE, CACHE_PERIOD } from "../config.json";

const slice = createSlice({
  name: "vehicles",
  initialState: {
    brands: [],
    models: [],
    variants: [],
    years: [],
    apiResult: {
      status: 0,
      message: "",
    },
    loading: false,
    lastFetch: null,
  },

  reducers: {
    vehiclesRequested: (vehicles, action) => {
      vehicles.loading = true;
    },

    vehiclesReceived: (vehicles, action) => {
      const { data, status, message } = action.payload;

      if (status === 200) {
        const vehiclesData = JSON.parse(data.vehicles);
        vehicles.brands = Object.keys(vehiclesData).map((brand) => {
          return { value: brand, label: brand };
        });

        let brands = [];
        let models = {};
        let variants = {};
        let years = [];
        for (const [brand, brandModels] of Object.entries(vehiclesData)) {
          brands.push({ value: brand, label: brand });
          models[brand] = [];
          for (const [model, modelVarinats] of Object.entries(brandModels)) {
            models[brand].push({ value: model, label: model });
            variants[model] = [];
            for (const variant of modelVarinats) {
              variants[model].push({ value: variant, label: variant });
            }
          }
        }

        let currentYear = new Date().getFullYear();
        const year = 1950;

        while (year <= currentYear) {
          years.push({ value: currentYear, label: currentYear });
          currentYear--;
        }

        vehicles.brands = brands;
        vehicles.models = models;
        vehicles.variants = variants;
        vehicles.years = years;
        vehicles.apiResult = {
          status,
          message,
        };
        toast.success(message, { className: "alert-success" });
      } else toast.error(message, { className: "alert-danger" });
      vehicles.loading = false;
    },

    vehiclesRequestFailed: (vehicles, action) => {
      vehicles.loading = false;
      toast.error(API_ERROR_MESSAGE, { className: "alert-danger" });
    },
  },
});

export const {
  vehiclesRequested,
  vehiclesReceived,
  vehiclesRequestFailed,
} = slice.actions;

export default slice.reducer;

export const loadVehicles = () => (dispatch, getState) => {
  const { lastFetch } = getState().vehicles;
  const { token } = getState().auth;

  const diffInMinutes = moment().diff(moment(lastFetch), "minutes");
  if (diffInMinutes < CACHE_PERIOD) return;

  return dispatch(
    apiCallBegan({
      url: "/get-product-data",
      method: "GET",
      headers: { Authorization: token },
      onStart: vehiclesRequested.type,
      onSuccess: vehiclesReceived.type,
      onError: vehiclesRequestFailed.type,
    })
  );
};
