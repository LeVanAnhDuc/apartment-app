// types
import type { z } from "zod";
import type { loginFormValidation } from "@/forms/Login/validations";
import type { ResponsePattern } from "../common";

export type LoginFormValues = z.infer<typeof loginFormValidation>;

export interface LoginDataResponse {
  accessToken: string;
  refreshToken: string;
}

export type LoginSuccessResponse = ResponsePattern<LoginDataResponse>;
