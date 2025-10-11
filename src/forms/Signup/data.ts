// types
import type { SignupFormValues } from "@/types/Signup";
// others
import CONSTANTS from "@/constants";

const { FULL_NAME, EMAIL, PASSWORD, PASSWORD_CONFIRM } =
  CONSTANTS.FIELD_NAMES.SIGNUP_FIELD_NAMES;

export const initialSignupFormData: SignupFormValues = {
  [FULL_NAME]: "",
  [EMAIL]: "",
  [PASSWORD]: "",
  [PASSWORD_CONFIRM]: ""
};
