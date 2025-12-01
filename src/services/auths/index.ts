// libs
import { useMutation } from "@tanstack/react-query";
// types
import type {
  LoginFormValues,
  LoginSuccessResponse,
  LogoutSuccessResponse
} from "@/types/Login";
import type {
  RequestOtpPayload,
  VerifyOtpPayload,
  ResetPasswordPayload,
  ForgotPasswordSuccessResponse
} from "@/types/ForgotPassword";
// apis
import {
  login,
  logout,
  requestOtp,
  verifyOtp,
  resetPassword,
  resendOtp
} from "./fetchers";
// stores
import { authStoreState } from "@/stores";

export const useLoginMutation = () =>
  useMutation<LoginSuccessResponse, Error, LoginFormValues>({
    mutationFn: login,
    onSuccess: (data) => {
      const { setTokens } = authStoreState();
      setTokens({
        accessToken: data.data.accessToken,
        idToken: data.data.idToken
      });
    }
  });

export const useLogoutMutation = () =>
  useMutation<LogoutSuccessResponse, Error, void>({
    mutationFn: logout,
    onSuccess: () => {
      const { clearStorages } = authStoreState();
      clearStorages();
    }
  });

// Forgot Password Mutations
export const useRequestOtpMutation = () =>
  useMutation<ForgotPasswordSuccessResponse, Error, RequestOtpPayload>({
    mutationFn: requestOtp
  });

export const useVerifyOtpMutation = () =>
  useMutation<ForgotPasswordSuccessResponse, Error, VerifyOtpPayload>({
    mutationFn: verifyOtp
  });

export const useResetPasswordMutation = () =>
  useMutation<ForgotPasswordSuccessResponse, Error, ResetPasswordPayload>({
    mutationFn: resetPassword
  });

export const useResendOtpMutation = () =>
  useMutation<ForgotPasswordSuccessResponse, Error, string>({
    mutationFn: resendOtp
  });
