// types
import type { LoginFormValues } from "@/types/Login";
// others
import CONSTANTS from "@/constants";

const { EMAIL, PASSWORD } = CONSTANTS.FIELD_NAMES.LOGIN_FIELD_NAMES;

export const initialLoginFormData: LoginFormValues = {
  [EMAIL]: "",
  [PASSWORD]: ""
};
