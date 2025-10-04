"use client";

// libs
import { FormProvider, useForm } from "react-hook-form";
// types
import type { LoginFormValues } from "@/types/Login";
// api
import { useLoginMutation } from "@/apis/auth/queries";
// components
import ButtonForgotPassword from "../ButtonForgotPassword";
import ButtonLogin from "../ButtonLogin";
import ButtonLoginWithGoogle from "../ButtonLoginWithGoogle";
import ButtonSignUp from "../ButtonSignUp";
import InputEmail from "../InputEmail";
import InputPassword from "../InputPassword";
// forms
import { loginFormProps } from "@/forms/Login";

const FormLogin = () => {
  const methods = useForm<LoginFormValues>({
    ...loginFormProps,
    mode: "onChange"
  });

  const { mutate: login, isPending } = useLoginMutation();

  const onSubmit = (data: LoginFormValues) => login(data);

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-6">
          <InputEmail />
          <InputPassword />
          <ButtonForgotPassword />
          <div className="space-y-3">
            <ButtonLogin loading={isPending} />
            <ButtonLoginWithGoogle />
          </div>
        </div>
        <ButtonSignUp />
      </form>
    </FormProvider>
  );
};

export default FormLogin;
