// libs
import * as z from "zod";
// others
import CONSTANTS from "@/constants";

const { EMAIL, SUBJECT, CATEGORY, PRIORITY, MESSAGE } =
  CONSTANTS.FIELD_NAMES.CONTACT_ADMIN_FIELD_NAMES;

export const contactAdminValidation = z.object({
  [EMAIL]: z
    .string()
    .min(1, { message: "required" })
    .email({ message: "invalid" })
    .refine((value) => CONSTANTS.REGEX_EMAIL.test(value), {
      message: "invalid"
    }),
  [SUBJECT]: z
    .string()
    .min(1, { message: "required" })
    .min(5, { message: "minLength" }),
  [CATEGORY]: z.string().min(1, { message: "required" }),
  [PRIORITY]: z.string(),
  [MESSAGE]: z
    .string()
    .min(1, { message: "required" })
    .min(20, { message: "minLength" })
});
