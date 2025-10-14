// types
import type { z } from "zod";
import type {
  requestResetValidation,
  verifyCodeValidation,
  resetPasswordValidation
} from "@/forms/ForgotPassword/validations";

export type RequestResetFormValues = z.infer<typeof requestResetValidation>;
export type VerifyCodeFormValues = z.infer<typeof verifyCodeValidation>;
export type ResetPasswordFormValues = z.infer<typeof resetPasswordValidation>;

export interface RequestResetDataResponse {
  message: string;
  email: string;
}

export interface VerifyCodeDataResponse {
  message: string;
  email: string;
}

export interface ResetPasswordDataResponse {
  message: string;
}

export type RequestResetSuccessResponse =
  ResponsePattern<RequestResetDataResponse>;
export type VerifyCodeSuccessResponse = ResponsePattern<VerifyCodeDataResponse>;
export type ResetPasswordSuccessResponse =
  ResponsePattern<ResetPasswordDataResponse>;
