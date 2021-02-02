import axios from "axios";
import { toast } from "react-toastify";

axios.interceptors.response.use(null, (error) => {
  toast.error(
    "There was a problem with your request. Please try again later.",
    {
      className: "alert-danger",
    }
  );
  return Promise.reject(error);
});

export default {
  source: axios.CancelToken.source(),
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
};
