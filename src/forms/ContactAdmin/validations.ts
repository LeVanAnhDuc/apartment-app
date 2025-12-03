// libs
import * as z from "zod";
// others
import CONSTANTS from "@/constants";

const { EMAIL, SUBJECT, CATEGORY, PRIORITY, MESSAGE } =
  CONSTANTS.FIELD_NAMES.CONTACT_ADMIN_FIELD_NAMES;

export const contactAdminValidation = z.object({
  [EMAIL]: z
    .string()
    .min(1, "required")
    .email("invalid")
    .refine((value) => CONSTANTS.REGEX_EMAIL.test(value), "invalid"),
  [SUBJECT]: z.string().min(1, "required").min(5, "minLength"),
  [CATEGORY]: z.string().min(1, "required"),
  [PRIORITY]: z.string(),
  [MESSAGE]: z.string().min(1, "required").min(20, "minLength")
});
