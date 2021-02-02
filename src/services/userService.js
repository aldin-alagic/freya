import http from "./httpService";
import { API } from "../config.json";
import { trackPromise } from "react-promise-tracker";

export function login(user) {
  const api = API + "/login";

  return trackPromise(
    http.post(api, {
      timeout: 5000,
      email: user.email,
      password: user.password,
    })
  );
}

export function logout() {
  if (localStorage.getItem("user") !== null) {
    localStorage.removeItem("user");
  }
  setTimeout(() => (window.location = "/home"), 5000);
}

export function getUserDetails() {
  const api = API + "/user-details";
  const user = getCurrentUser();

  return trackPromise(
    http.get(api, {
      timeout: 5000,
      headers: {
        "Auth-Token": user.auth_token,
      },
    })
  );
}

export function getCurrentUser() {
  try {
    const user = JSON.parse(localStorage.getItem("user"));
    return user;
  } catch (ex) {
    return null;
  }
}

export default {
  login,
  logout,
  getCurrentUser,
  getUserDetails,
};
