import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import moment from "moment";

import { apiCallBegan } from "./api";

import { API_ERROR_MESSAGE, CACHE_PERIOD } from "../config.json";

const solutionUrl = "/solution";

const initialSolutionState = {
  id: 0,
  expert: {},
  vehicles: [],
  fuelType: "",
  transmission: "",
  issueTypeOption: "",
  title: "",
  shortDescription: "",
  longDescription: "",
  keywords: [],
  parts: [],
  tools: [],
  attachments: [],
  offers: [],
  advertisements: [],
  visibility: false,
  note: "",
  views: 0,
  created: "",
};

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
  views: 0,
  step: 0,
  status: "process",
};

const prepareSolutionData = (isOwner, data) => {
  let solution = {};
  if (isOwner) {
    const { user, expert, solution: solutionData, attachments } = data;
    const {
      solution_id: id,
      vehicles: vehiclesDiff,
      fuel_type: fuelType,
      transmission,
      issue_type_option: issueTypeOption,
      title,
      short_description: shortDescription,
      long_description: longDescription,
      parts: partsDiff,
      tools: toolsDiff,
      keywords: keywordsDiff,
      offer: offers,
      advertisements,
      visibility,
      note,
      views,
      created_at: created,
    } = solutionData;

    const parts = partsDiff ? partsDiff : [];
    const tools = toolsDiff ? toolsDiff : [];
    const keywords = keywordsDiff ? keywordsDiff : [];

    const vehicles = vehiclesDiff.map((vehicle) => {
      return {
        brand: vehicle.brand,
        model: vehicle.model,
        variant: vehicle.model_variant,
        years: [vehicle.year_from],
      };
    });

    solution = {
      id,
      owner: true,
      user,
      expert,
      vehicles,
      fuelType,
      transmission,
      issueTypeOption,
      title,
      shortDescription,
      longDescription,
      keywords,
      parts,
      tools,
      attachments,
      offers,
      advertisements,
      visibility,
      note,
      views,
      limited: false,
      created,
    };
  } else {
    const {
      solution_id: id,
      vehicles: vehiclesDiff,
      fuel_type: fuelType,
      transmission,
      issue_type_option: issueTypeOption,
      title,
      short_description: shortDescription,
      long_description: longDescription,
      parts: partsDiff,
      tools: toolsDiff,
      keywords: keywordsDiff,
      attachments,
      user_id,
      user_name,
      views,
      offer: offers,
      purchased,
      created_at: created,
    } = data;

    const parts = partsDiff ? partsDiff : [];
    const tools = toolsDiff ? toolsDiff : [];
    const keywords = keywordsDiff ? keywordsDiff : [];

    const vehicles = vehiclesDiff.map((vehicle) => {
      return {
        brand: vehicle.brand,
        model: vehicle.model,
        variant: vehicle.model_variant,
        years: [vehicle.year_from],
      };
    });

    const expert = {
      user_id,
      company_name: user_name,
    };

    solution = {
      id,
      owner: purchased,
      expert,
      vehicles,
      fuelType,
      transmission,
      issueTypeOption,
      title,
      shortDescription,
      longDescription,
      keywords,
      parts,
      tools,
      attachments,
      offers,
      views,
      created,
      limited: !("purchased" in data),
    };
  }

  return solution;
};

const slice = createSlice({
  name: "solutions",
  initialState: {
    newSolution: initialNewSolutionState,
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
    solutionsRequested: (solutions, action) => {
      solutions.loading = true;
    },

    solutionReceived: (solutions, action) => {
      const { data, status, message } = action.payload;

      if (status === 200) {
        const offers = {
          standard: {
            price: data.offer[1].price,
            options: ["Full solution", "All solution attachments"],
          },
          premium: {
            price: data.offer[0].price,
            options: data.offer[0].additional_package,
            assistanceMinutes: data.offer[0].assistance_minutes,
          },
        };

        const vehicles = data.vehicles.map((vehicle) => {
          return {
            brand: vehicle.brand,
            model: vehicle.model,
            variant: vehicle.model_variant,
            years: [vehicle.year_from],
          };
        });

        let solution = {
          id: data.solution_id,
          owner: !("guest" in data) && data.owner,
          expert: data.expert,
          vehicles: vehicles,
          fuelType: data.fuel_type,
          transmission: data.transmission,
          issueTypeOption: data.issue_type_option,
          title: data.title,
          shortDescription: data.short_description,
          longDescription: data.long_description,
          keywords: data.keywords ? data.keywords : [],
          parts: data.parts ? data.parts : [],
          tools: data.tools ? data.tools : [],
          attachments: data.attachments,
          offers: offers,
          views: data.views,
          created: data.created_at,
          limited: !("guest" in data),
        };
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
  solutionReceived,
  publicSolutionsReceived,
  userSolutionsReceived,
  purchasedSolutionsReceived,
  solutionsRequestFailed,
  newSolutionUpdated,
  newSolutionReset,
  solutionCreated,
} = slice.actions;

export default slice.reducer;

export const loadSolution = (id) => (dispatch, getState) => {
  const { token } = getState().auth;
  let headers = {};
  if (token) headers = { Authorization: token };
  return dispatch(
    apiCallBegan({
      url: `${solutionUrl}/${id}`,
      method: "GET",
      headers: { Authorization: token },
      onStart: solutionsRequested.type,
      onSuccess: solutionReceived.type,
      onError: solutionsRequestFailed.type,
    })
  );
};

export const loadPublicSolutions = () => (dispatch, getState) => {
  const { lastFetch } = getState().entities.solutions;

  const { token } = getState().auth;
  let headers = {};
  if (token) headers = { Authorization: token };

  const diffInMinutes = moment().diff(moment(lastFetch), "minutes");
  if (diffInMinutes < CACHE_PERIOD) return;

  return dispatch(
    apiCallBegan({
      url: `${solutionUrl}/all/public`,
      method: "GET",
      headers,
      onStart: solutionsRequested.type,
      onSuccess: publicSolutionsReceived.type,
      onError: solutionsRequestFailed.type,
    })
  );
};

export const loadUserSolutions = () => (dispatch, getState) => {
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
      onSuccess: userSolutionsReceived.type,
      onError: solutionsRequestFailed.type,
    })
  );
};

export const loadPurchasedSolutions = () => (dispatch, getState) => {
  const { lastFetch } = getState().entities.solutions;
  const { token } = getState().auth;

  const diffInMinutes = moment().diff(moment(lastFetch), "minutes");
  if (diffInMinutes < CACHE_PERIOD) return;

  return dispatch(
    apiCallBegan({
      url: `${solutionUrl}/all/purchased`,
      method: "GET",
      headers: { Authorization: token },
      onStart: solutionsRequested.type,
      onSuccess: purchasedSolutionsReceived.type,
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
