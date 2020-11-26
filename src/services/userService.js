import http from "./httpService";
import { API } from "../config.json";
import { trackPromise } from "react-promise-tracker";

export function login(user) {
  const api = API + "login";
  return trackPromise(
    http.post(api, {
      email: user.email,
      password: user.password,
    })
  );
}

export function logout() {
  localStorage.removeItem("user");
}

export function getUserDetails() {
  const api = API + "user-details";
  const user = JSON.parse(localStorage.getItem("user"));
  return trackPromise(
    http.get(api, {
      headers: {
        "Auth-Token": user.auth_token,
      },
    })
  );
}

export function getCurrentUser() {
  try {
    const user = localStorage.getItem("user");
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
