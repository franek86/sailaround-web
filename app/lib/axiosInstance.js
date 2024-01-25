const API_URL = process.env.NEXT_PUBLIC_BASE_API_URL;
import axios from "axios";

export const axiosClient = axios.create({
  baseURL: API_URL,
  withCredentials: true,
  "Access-Control-Allow-Credentials": true,
  "Content-Type": "application/json",
});
