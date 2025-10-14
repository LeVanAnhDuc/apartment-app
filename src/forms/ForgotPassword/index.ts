// libs
import { zodResolver } from "@hookform/resolvers/zod";
// types
import type { UseFormProps } from "react-hook-form";
import type {
  RequestResetFormValues,
  VerifyCodeFormValues,
  ResetPasswordFormValues
} from "@/types/ForgotPassword";
// forms
import {
  initialRequestResetFormData,
  initialVerifyCodeFormData,
  initialResetPasswordFormData
} from "./data";
import {
  requestResetValidation,
  verifyCodeValidation,
  resetPasswordValidation
} from "./validations";

export const requestResetFormProps: UseFormProps<RequestResetFormValues> = {
  defaultValues: initialRequestResetFormData,
  resolver: zodResolver(requestResetValidation)
};

export const verifyCodeFormProps: UseFormProps<VerifyCodeFormValues> = {
  defaultValues: initialVerifyCodeFormData,
  resolver: zodResolver(verifyCodeValidation)
};

export const resetPasswordFormProps: UseFormProps<ResetPasswordFormValues> = {
  defaultValues: initialResetPasswordFormData,
  resolver: zodResolver(resetPasswordValidation)
};
