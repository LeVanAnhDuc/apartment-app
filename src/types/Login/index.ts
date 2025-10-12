// types
import type { z } from "zod";
import type { loginFormValidation } from "@/forms/Login/validations";

export type LoginFormValues = z.infer<typeof loginFormValidation>;

export interface LoginDataResponse {
  accessToken: string;
  idToken: string;
}

export type LoginSuccessResponse = ResponsePattern<LoginDataResponse>;

export type LogoutSuccessResponse = ResponsePattern<never>;
