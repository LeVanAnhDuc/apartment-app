// types
import type { z } from "zod";
import type { newPasswordValidation } from "@/forms/ForgotPassword/validations";

export type NewPasswordFormValues = z.infer<typeof newPasswordValidation>;

// API Request types
export interface RequestOtpPayload {
  email: string;
}

export interface VerifyOtpPayload {
  email: string;
  otp: string;
}

export interface ResetPasswordPayload {
  email: string;
  otp: string;
  newPassword: string;
  confirmPassword: string;
}

// API Response types
export interface ForgotPasswordDataResponse {
  message: string;
}

export type ForgotPasswordSuccessResponse =
  ResponsePattern<ForgotPasswordDataResponse>;
