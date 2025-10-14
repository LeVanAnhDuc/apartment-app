"use client";

// libs
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTranslations } from "next-intl";
// types
import type { ResetPasswordFormValues } from "@/types/ForgotPassword";
// components
import { Form } from "@/components/ui/form";
import CustomButton from "@/components/CustomButton";
import PasswordInputFields from "../PasswordInputFields";
// forms
import {
  resetPasswordValidation,
  initialResetPasswordFormData
} from "@/forms/ForgotPassword";
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
  const resetPasswordMutation = useResetPasswordMutation();

  const form = useForm<ResetPasswordFormValues>({
    resolver: zodResolver(resetPasswordValidation),
    defaultValues: initialResetPasswordFormData
  });

  const onSubmit = async (values: ResetPasswordFormValues) => {
    await resetPasswordMutation.mutateAsync({ ...values, email });
    onSuccess();
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <PasswordInputFields disabled={resetPasswordMutation.isPending} />

        <CustomButton
          type="submit"
          fullWidth
          loading={resetPasswordMutation.isPending}
          disabled={resetPasswordMutation.isPending}
        >
          {t("form.step3.button.resetPassword")}
        </CustomButton>
      </form>
    </Form>
  );
};

export default ResetPasswordForm;
