import axios from "axios";

export const baseURL = "http://localhost:3000";

const axiosSource = axios.create({
  baseURL: "http://localhost:3000",
  withCredentials: true,
});

export default axiosSource;
