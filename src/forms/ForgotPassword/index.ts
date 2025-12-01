// libs
import { zodResolver } from "@hookform/resolvers/zod";
// types
import type { UseFormProps } from "react-hook-form";
import type { NewPasswordFormValues } from "@/types/ForgotPassword";
// forms
import { initialNewPasswordFormData } from "./data";
import { newPasswordValidation } from "./validations";

export const newPasswordFormProps: UseFormProps<NewPasswordFormValues> = {
  defaultValues: initialNewPasswordFormData,
  resolver: zodResolver(newPasswordValidation)
};
