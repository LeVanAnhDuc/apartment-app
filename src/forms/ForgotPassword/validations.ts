// libs
import * as z from "zod";
// constants
import CONSTANTS from "@/constants";

const { EMAIL, OTP, NEW_PASSWORD, CONFIRM_PASSWORD } =
  CONSTANTS.FIELD_NAMES.FORGOT_PASSWORD_FIELD_NAMES;

// Step 1: Request Reset validation
export const requestResetValidation = z.object({
  [EMAIL]: z
    .string()
    .min(1, "Email is required")
    .email("Email is invalid")
    .refine((value) => CONSTANTS.REGEX_EMAIL.test(value), "Email is invalid")
});

// Step 2: Verify Code validation
export const verifyCodeValidation = z.object({
  [OTP]: z
    .string()
    .min(1, "OTP is required")
    .length(6, "OTP must be 6 digits")
    .regex(/^\d{6}$/, "OTP must contain only numbers")
});

// Step 3: Reset Password validation
export const resetPasswordValidation = z
  .object({
    [NEW_PASSWORD]: z
      .string()
      .min(1, "New password is required")
      .min(8, "Password must be at least 8 characters")
      .max(100, "Password must not exceed 100 characters"),
    [CONFIRM_PASSWORD]: z.string().min(1, "Confirm password is required")
  })
  .refine((data) => data[NEW_PASSWORD] === data[CONFIRM_PASSWORD], {
    message: "Passwords do not match",
    path: [CONFIRM_PASSWORD]
  });
