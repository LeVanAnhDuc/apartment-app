// libs
import axios from "axios";

const API_TIMEOUT = 30000;

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
  timeout: API_TIMEOUT,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json"
  }
});

// In a real-world scenario, a senior developer would add interceptors here
// to automatically attach the auth token to requests and handle token refreshing.

export default axiosInstance;
