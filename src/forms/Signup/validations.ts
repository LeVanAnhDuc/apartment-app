// libs
import * as z from "zod";
// others
import CONSTANTS from "@/constants";

const { EMAIL, FULL_NAME, GENDER, BIRTHDAY, PASSWORD, PASSWORD_CONFIRM } =
  CONSTANTS.FIELD_NAMES.SIGNUP_FIELD_NAMES;

export const signupEmailFormValidation = z.object({
  [EMAIL]: z
    .string()
    .min(1, "Email is required")
    .email("Email is invalid")
    .refine((value) => CONSTANTS.REGEX_EMAIL.test(value), "Email is invalid")
});

export const signupInfoFormValidation = z
  .object({
    [FULL_NAME]: z
      .string()
      .min(1, "Full name is required")
      .min(2, "Full name must be at least 2 characters"),
    [GENDER]: z.string().min(1, "Gender is required"),
    [BIRTHDAY]: z.string().min(1, "Birthday is required"),
    [PASSWORD]: z
      .string()
      .min(1, "Password is required")
      .min(8, "Password must be at least 8 characters")
      .max(100, "Password must not exceed 100 characters")
      .regex(
        /(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/,
        "Password must contain uppercase, lowercase and number"
      ),
    [PASSWORD_CONFIRM]: z.string().min(1, "Password confirm is required")
  })
  .refine((data) => data[PASSWORD] === data[PASSWORD_CONFIRM], {
    message: "Passwords do not match",
    path: [PASSWORD_CONFIRM]
  });
