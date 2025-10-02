// libs
import * as z from "zod";
// others
import CONSTANTS from "@/constants";

const { FULL_NAME, EMAIL, PHONE, PASSWORD, PASSWORD_CONFIRM } =
  CONSTANTS.FIELD_NAMES.SIGNUP_FIELD_NAMES;

export const signupFormValidation = z
  .object({
    [FULL_NAME]: z.string().min(1, "Full name is required"),
    [EMAIL]: z
      .string()
      .min(1, "Email is required")
      .email("Email is invalid")
      .refine((value) => CONSTANTS.REGEX_EMAIL.test(value), "Email is invalid"),
    [PHONE]: z
      .string()
      .min(1, "Phone is required")
      .refine((value) => CONSTANTS.REGEX_PHONE.test(value), "Phone is invalid"),
    [PASSWORD]: z
      .string()
      .min(1, "Password is required")
      .min(8, "Password must be at least 8 characters")
      .max(100, "Password must not exceed 100 characters"),
    [PASSWORD_CONFIRM]: z.string().min(1, "Password confirm is required")
  })
  .refine((data) => data[PASSWORD] === data[PASSWORD_CONFIRM], {
    message: "Passwords do not match",
    path: [PASSWORD_CONFIRM]
  });
