// types
import type {
  RequestResetFormValues,
  VerifyCodeFormValues,
  ResetPasswordFormValues
} from "@/types/ForgotPassword";
// constants
import CONSTANTS from "@/constants";

const { EMAIL, OTP, NEW_PASSWORD, CONFIRM_PASSWORD } =
  CONSTANTS.FIELD_NAMES.FORGOT_PASSWORD_FIELD_NAMES;

export const initialRequestResetFormData: RequestResetFormValues = {
  [EMAIL]: ""
};

export const initialVerifyCodeFormData: VerifyCodeFormValues = {
  [OTP]: ""
};

export const initialResetPasswordFormData: ResetPasswordFormValues = {
  [NEW_PASSWORD]: "",
  [CONFIRM_PASSWORD]: ""
};
