// libs
import axiosInstance from "@/libs/axios";
// types
import type {
  RequestResetFormValues,
  VerifyCodeFormValues,
  ResetPasswordFormValues,
  RequestResetSuccessResponse,
  VerifyCodeSuccessResponse,
  ResetPasswordSuccessResponse
} from "@/types/ForgotPassword";
// constants
import CONSTANTS from "@/constants";

export const requestReset = async (
  values: RequestResetFormValues
): Promise<RequestResetSuccessResponse> => {
  const { data } = await axiosInstance.post<RequestResetSuccessResponse>(
    CONSTANTS.END_POINTS.AUTH.FORGOT_PASSWORD.REQUEST_RESET,
    values
  );

  return data;
};

export const verifyCode = async (
  values: VerifyCodeFormValues & { email: string }
): Promise<VerifyCodeSuccessResponse> => {
  const { data } = await axiosInstance.post<VerifyCodeSuccessResponse>(
    CONSTANTS.END_POINTS.AUTH.FORGOT_PASSWORD.VERIFY_CODE,
    values
  );

  return data;
};

export const resetPassword = async (
  values: ResetPasswordFormValues & { email: string }
): Promise<ResetPasswordSuccessResponse> => {
  const { data } = await axiosInstance.post<ResetPasswordSuccessResponse>(
    CONSTANTS.END_POINTS.AUTH.FORGOT_PASSWORD.RESET_PASSWORD,
    values
  );

  return data;
};

export const resendCode = async (
  email: string
): Promise<RequestResetSuccessResponse> => {
  const { data } = await axiosInstance.post<RequestResetSuccessResponse>(
    CONSTANTS.END_POINTS.AUTH.FORGOT_PASSWORD.RESEND_CODE,
    { email }
  );

  return data;
};
