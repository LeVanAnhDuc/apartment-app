// libs
import axios from "axios";
// types
import type {
  AxiosError,
  AxiosInstance,
  InternalAxiosRequestConfig
} from "axios";
// stores
import { authStoreState } from "@/stores";
// others
import { confirmErrorToast, getAuthorizationHeader } from "@/utils";

const API_TIMEOUT = 30000;

const handleLogout = () => {
  const { clearStorages } = authStoreState();

  clearStorages();
  // TODO: Redirect to login
};

let isRefreshing = false;
let failedQueue: Array<{
  resolve: (value?: unknown) => void;
  reject: (reason?: unknown) => void;
}> = [];

const processQueue = (
  error: AxiosError | null,
  token: string | null = null
) => {
  failedQueue.forEach((prom) => {
    if (error) {
      prom.reject(error);
    } else {
      prom.resolve(token);
    }
  });
  failedQueue = [];
};

// ============================================
// AXIOS INSTANCE
// ============================================

const axiosInstance: AxiosInstance = axios.create({
  baseURL: "http://localhost:3000/api/v1",
  // baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
  timeout: API_TIMEOUT,
  headers: {
    "Content-Type": "application/json"
  }
});

axiosInstance.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    const idToken = getAuthorizationHeader();

    if (idToken) {
      config.headers.set("Authorization", `Bearer ${idToken}`);
    }

    return config;
  },
  (error) => Promise.reject(error)
);

axiosInstance.interceptors.response.use(
  (response) => response,
  async (error: AxiosError) => {
    const originalRequest = error.config as InternalAxiosRequestConfig & {
      _retry?: boolean;
    };

    // ============================================
    // HANDLE 401 - AUTO REFRESH TOKEN (SILENT)
    // ============================================
    if (
      error.response?.status === 401 &&
      originalRequest &&
      !originalRequest._retry
    ) {
      // Queue subsequent requests while refreshing
      if (isRefreshing) {
        return new Promise((resolve, reject) => {
          failedQueue.push({ resolve, reject });
        })
          .then((token) => {
            if (originalRequest.headers) {
              originalRequest.headers.Authorization = `Bearer ${token}`;
            }
            return axiosInstance(originalRequest);
          })
          .catch((err) => Promise.reject(err));
      }

      originalRequest._retry = true;
      isRefreshing = true;

      // TODO: Get refresh token from store
      const refreshToken = "";

      if (!refreshToken) {
        processQueue(error, null);
        isRefreshing = false;
        confirmErrorToast("Session expired. Please login again.");
        handleLogout();
        return Promise.reject(error);
      }

      try {
        // Call refresh API
        //
        const newAccessToken = "";

        // Save new token
        //

        // Update original request header
        if (originalRequest.headers) {
          originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
        }

        // Process queued requests
        processQueue(null, newAccessToken);
        isRefreshing = false;

        // Retry original request
        return axiosInstance(originalRequest);
      } catch (refreshError) {
        processQueue(refreshError as AxiosError, null);
        isRefreshing = false;
        confirmErrorToast("Unable to refresh session. Please login again.");
        handleLogout();
        return Promise.reject(refreshError);
      }
    }

    // ============================================
    // INFRASTRUCTURE ERRORS (TOAST HERE)
    // ============================================

    // Network Error (no response from server)
    if (!error.response) {
      confirmErrorToast(
        "Unable to connect to server. Please check your internet connection."
      );
      return Promise.reject(error);
    }

    // Timeout Error
    if (error.code === "ECONNABORTED") {
      confirmErrorToast("Request timeout. Please try again.");
      return Promise.reject(error);
    }

    // 5XX SERVER ERRORS
    if (error.response.status >= 500) {
      confirmErrorToast("Server error. Please try again later.");
      return Promise.reject(error);
    }

    return Promise.reject(error);
  }
);

export default axiosInstance;
