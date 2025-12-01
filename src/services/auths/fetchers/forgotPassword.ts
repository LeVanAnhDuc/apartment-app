// libs
import axiosInstance from "@/libs/axios";
// types
import type {
  RequestOtpPayload,
  VerifyOtpPayload,
  ResetPasswordPayload,
  ForgotPasswordSuccessResponse
} from "@/types/ForgotPassword";
// constants
import CONSTANTS from "@/constants";

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
