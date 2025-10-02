// libs
import { zodResolver } from "@hookform/resolvers/zod";
// types
import type { UseFormProps } from "react-hook-form";
import type { SignupFormValues } from "@/types/Signup";
// forms
import { initialSignupFormData } from "./data";
import { signupFormValidation } from "./validations";

export const signupFormProps: UseFormProps<SignupFormValues> = {
  defaultValues: initialSignupFormData,
  resolver: zodResolver(signupFormValidation)
};
