// libs
import * as z from "zod";
// others
import CONSTANTS from "@/constants";

const { EMAIL, PASSWORD } = CONSTANTS.FIELD_NAMES.LOGIN_FIELD_NAMES;

export const emailStepValidation = z.object({
  [EMAIL]: z
    .string()
    .min(1, "required")
    .email("invalid")
    .refine((value) => CONSTANTS.REGEX_EMAIL.test(value), "invalid")
});

export const passwordStepValidation = z.object({
  [PASSWORD]: z
    .string()
    .min(1, "required")
    .min(8, "minLength")
    .max(100, "maxLength")
});
