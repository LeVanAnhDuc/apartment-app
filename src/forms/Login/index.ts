// libs
import { zodResolver } from "@hookform/resolvers/zod";
// types
import type { UseFormProps } from "react-hook-form";
import type { LoginFormValues } from "@/types/Login";
// forms
import { initialLoginFormData } from "./data";
import { loginFormValidation } from "./validations";

export const loginFormProps: UseFormProps<LoginFormValues> = {
  defaultValues: initialLoginFormData,
  resolver: zodResolver(loginFormValidation)
};
