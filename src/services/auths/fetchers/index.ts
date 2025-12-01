// libs
import axiosInstance from "@/libs/axios";
// types
import type { LoginFormValues, LoginSuccessResponse } from "@/types/Login";
import type { LogoutSuccessResponse } from "@/types/Login";
import type {
  RequestOtpPayload,
  VerifyOtpPayload,
  ResetPasswordPayload,
  ForgotPasswordSuccessResponse
} from "@/types/ForgotPassword";
// constants
import CONSTANTS from "@/constants";

export const login = async (
  credentials: LoginFormValues
): Promise<LoginSuccessResponse> => {
  const { data } = await axiosInstance.post<LoginSuccessResponse>(
    CONSTANTS.END_POINTS.AUTH.LOGIN,
    credentials
  );

  return data;
};

export const logout = async (): Promise<LogoutSuccessResponse> => {
  const { data } = await axiosInstance.post<LogoutSuccessResponse>(
    CONSTANTS.END_POINTS.AUTH.LOGOUT
  );

  return data;
};

// Forgot Password API functions
export const requestOtp = async (
  values: RequestOtpPayload
): Promise<ForgotPasswordSuccessResponse> => {
  const { data } = await axiosInstance.post<ForgotPasswordSuccessResponse>(
    CONSTANTS.END_POINTS.AUTH.FORGOT_PASSWORD.REQUEST_RESET,
    values
  );

  return data;
};

export const verifyOtp = async (
  values: VerifyOtpPayload
): Promise<ForgotPasswordSuccessResponse> => {
  const { data } = await axiosInstance.post<ForgotPasswordSuccessResponse>(
    CONSTANTS.END_POINTS.AUTH.FORGOT_PASSWORD.VERIFY_CODE,
    values
  );

  return data;
};

export const resetPassword = async (
  values: ResetPasswordPayload
): Promise<ForgotPasswordSuccessResponse> => {
  const { data } = await axiosInstance.post<ForgotPasswordSuccessResponse>(
    CONSTANTS.END_POINTS.AUTH.FORGOT_PASSWORD.RESET_PASSWORD,
    values
  );

  return data;
};

export const resendOtp = async (
  email: string
): Promise<ForgotPasswordSuccessResponse> => {
  const { data } = await axiosInstance.post<ForgotPasswordSuccessResponse>(
    CONSTANTS.END_POINTS.AUTH.FORGOT_PASSWORD.RESEND_CODE,
    { email }
  );

  return data;
};
