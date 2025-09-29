// others
import CONSTANTS from "@/constants";

const { EMAIL, PASSWORD } = CONSTANTS.FIELD_NAMES.LOGIN_FIELD_NAMES;

export interface LoginFormValues {
  [EMAIL]: string;
  [PASSWORD]: string;
}
