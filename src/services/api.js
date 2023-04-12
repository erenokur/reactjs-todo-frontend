import axios from "axios";
import { getToken } from "../utils/tokenStorage";
const baseURL = process.env.REACT_APP_BASE_URL;

const api = axios.create({
  baseURL,
});

// Add interceptor to add JWT token to requests
api.interceptors.request.use(
  (config) => {
    const token = getToken();
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
export default api;
