"use client";

// libs
import { FormProvider, useForm } from "react-hook-form";
import { useTranslations } from "next-intl";
// types
import type { ResetPasswordFormValues } from "@/types/ForgotPassword";
// components
import CustomButton from "@/components/CustomButton";
import InputNewPassword from "../InputNewPassword";
import InputConfirmPassword from "../InputConfirmPassword";
// forms
import { resetPasswordFormProps } from "@/forms/ForgotPassword";
// services
import { useResetPasswordMutation } from "@/services/auths";

const ResetPasswordForm = ({
  email,
  onSuccess
}: {
  email: string;
  onSuccess: () => void;
}) => {
  const t = useTranslations("forgotPassword");
  const methods = useForm<ResetPasswordFormValues>({
    ...resetPasswordFormProps
  });

  const { mutate: resetPassword, isPending } = useResetPasswordMutation();

  const onSubmit = (values: ResetPasswordFormValues) => {
    resetPassword(
      { ...values, email },
      {
        onSuccess
      }
    );
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)} className="space-y-4">
        <InputNewPassword />
        <InputConfirmPassword />

        <CustomButton
          type="submit"
          fullWidth
          loading={isPending}
          disabled={isPending}
        >
          {t("form.step3.button.resetPassword")}
        </CustomButton>
      </form>
    </FormProvider>
  );
};

export default ResetPasswordForm;
