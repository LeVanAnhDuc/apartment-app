// libs
import * as z from "zod";
// others
import CONSTANTS from "@/constants";

const { EMAIL, PASSWORD } = CONSTANTS.FIELD_NAMES.LOGIN_FIELD_NAMES;

export const loginFormValidation = z.object({
  [EMAIL]: z
    .string()
    .min(1, "Email is required")
    .email("Email is invalid")
    .refine((value) => CONSTANTS.REGEX_EMAIL.test(value), "Email is invalid"),

  [PASSWORD]: z
    .string()
    .min(1, "Password is required")
    .min(8, "Password must be at least 8 characters")
    .max(100, "Password must not exceed 100 characters")
});
