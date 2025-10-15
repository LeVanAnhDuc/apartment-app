"use client";

// libs
import { FormProvider, useForm } from "react-hook-form";
// types
import type { SignupFormValues } from "@/types/Signup";
// components
import ButtonLogin from "../ButtonLogin";
import ButtonLSignupWithGoogle from "../ButtonLSignupWithGoogle";
import ButtonSignUp from "../ButtonSignUp";
import InputEmail from "../InputEmail";
import InputFullName from "../InputFullName";
import InputPassword from "../InputPassword";
import InputPasswordConfirm from "../InputPasswordConfirm";
// forms
import { signupFormProps } from "@/forms/Signup";

const FormSignup = () => {
  const methods = useForm<SignupFormValues>({ ...signupFormProps });

  // TODO: Implement signup mutation when backend is ready
  // Example: const { mutate: signup } = useSignupMutation();
  // const onSubmit = (data: SignupFormValues) => signup(data);

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(() => {})}>
        <div className="flex flex-col gap-6">
          <InputFullName />
          <InputEmail />
          <InputPassword />
          <InputPasswordConfirm />
          <div className="space-y-3">
            <ButtonSignUp />
            <ButtonLSignupWithGoogle />
          </div>
          <ButtonLogin />
        </div>
      </form>
    </FormProvider>
  );
};

export default FormSignup;
