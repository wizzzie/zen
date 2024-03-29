import axios from "axios";

const BASE_URL = "https://zen-back-xr96.onrender.com/";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});
