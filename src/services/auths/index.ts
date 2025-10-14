// libs
import { useMutation } from "@tanstack/react-query";
// types
import type {
  LoginFormValues,
  LoginSuccessResponse,
  LogoutSuccessResponse
} from "@/types/Login";
import type {
  RequestResetFormValues,
  VerifyCodeFormValues,
  ResetPasswordFormValues,
  RequestResetSuccessResponse,
  VerifyCodeSuccessResponse,
  ResetPasswordSuccessResponse
} from "@/types/ForgotPassword";
// apis
import {
  login,
  logout,
  requestReset,
  verifyCode,
  resetPassword,
  resendCode
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
    // The global onError handler in QueryClient will catch errors,
    // but you can add component-specific error handling here if needed.
  });

export const useLogoutMutation = () =>
  useMutation<LogoutSuccessResponse, Error, void>({
    mutationFn: logout,
    onSuccess: () => {
      const { clearStorages } = authStoreState();
      clearStorages();
    }
    // The global onError handler in QueryClient will catch errors,
    // but you can add component-specific error handling here if needed.
  });

// Forgot Password Mutations
export const useRequestResetMutation = () =>
  useMutation<RequestResetSuccessResponse, Error, RequestResetFormValues>({
    mutationFn: requestReset
  });

export const useVerifyCodeMutation = () =>
  useMutation<
    VerifyCodeSuccessResponse,
    Error,
    VerifyCodeFormValues & { email: string }
  >({
    mutationFn: verifyCode
  });

export const useResetPasswordMutation = () =>
  useMutation<
    ResetPasswordSuccessResponse,
    Error,
    ResetPasswordFormValues & { email: string }
  >({
    mutationFn: resetPassword
  });

export const useResendCodeMutation = () =>
  useMutation<RequestResetSuccessResponse, Error, string>({
    mutationFn: resendCode
  });
