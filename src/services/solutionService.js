import http from "./httpService";
import { API } from "../config.json";
import { trackPromise } from "react-promise-tracker";
import { getCurrentUser } from "./userService";

export function getSolutions() {
  const api = API + "/get-solutions";
  const user = getCurrentUser();
  return trackPromise(
    http.get(api, {
      timeout: 5000,
      headers: {
        "Auth-Token": user ? user.auth_token : null,
      },
    })
  );
}

export function getSolution(id) {
  const api = `${API}/get-solution/${id}`;
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

export default {
  getSolutions,
  getSolution,
};
