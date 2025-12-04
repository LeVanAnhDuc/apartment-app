"use client";

// libs
import { useCallback } from "react";
import { useRouter } from "next/navigation";
import { useTranslations } from "next-intl";
import { FormProvider, useForm } from "react-hook-form";
import { toast } from "sonner";
import { KeyRound } from "lucide-react";
// types
import type { NewPasswordFormValues } from "@/types/ForgotPassword";
// components
import AuthStepLayout from "@/components/AuthStepLayout";
import CustomButton from "@/components/CustomButton";
import AuthIcon from "@/components/AuthIcon";
import PasswordInput from "@/components/PasswordInput";
import PasswordRequirements from "../../components/PasswordRequirements";
// forms
import { newPasswordFormProps } from "@/forms/ForgotPassword";
// stores
import { useForgotPasswordStore } from "@/stores";
// services
import { useResetPasswordMutation } from "@/services/auths";
// hooks
import { useEmailGuard } from "@/hooks";
// others
import CONSTANTS from "@/constants";

const { NEW_PASSWORD, CONFIRM_PASSWORD } =
  CONSTANTS.FIELD_NAMES.FORGOT_PASSWORD_FIELD_NAMES;

const NewPasswordStepMain = () => {
  const router = useRouter();
  const t = useTranslations("forgotPassword.form.newPassword");
  const tMessage = useTranslations("forgotPassword.message");
  const email = useForgotPasswordStore((state) => state.email);
  const otp = useForgotPasswordStore((state) => state.otp);
  const goToOtpStep = useForgotPasswordStore((state) => state.goToOtpStep);
  const resetStore = useForgotPasswordStore((state) => state.reset);

  const { hasEmail } = useEmailGuard({ email });

  const methods = useForm<NewPasswordFormValues>({ ...newPasswordFormProps });

  const { mutate: resetPassword, isPending } = useResetPasswordMutation();

  const onSubmit = useCallback(
    (data: NewPasswordFormValues) => {
      resetPassword(
        {
          email,
          otp,
          newPassword: data.newPassword,
          confirmPassword: data.confirmPassword
        },
        {
          onSuccess: () => {
            toast.success(tMessage("success.passwordReset"));
            resetStore();
            router.push(CONSTANTS.ROUTES.LOGIN);
          },
          onError: () => {
            toast.error(tMessage("error.generic"));
          }
        }
      );
    },
    [email, otp, resetPassword, resetStore, router, tMessage]
  );

  const handleBack = useCallback(() => {
    goToOtpStep();
  }, [goToOtpStep]);

  if (!hasEmail) return null;

  return (
    <AuthStepLayout
      icon={<AuthIcon Icon={KeyRound} variant="orange" animated />}
      title={t("title")}
      description={t("description")}
      onBack={handleBack}
      backDisabled={isPending}
    >
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)} className="space-y-5">
          <PasswordInput
            name={NEW_PASSWORD}
            label={t("input.labelNewPassword")}
            placeholder={t("input.placeholderNewPassword")}
            disabled={isPending}
          />
          <PasswordInput
            name={CONFIRM_PASSWORD}
            label={t("input.labelConfirmPassword")}
            placeholder={t("input.placeholderConfirmPassword")}
            disabled={isPending}
          />
          <PasswordRequirements />

          <CustomButton
            type="submit"
            fullWidth
            loading={isPending}
            className="bg-primary text-primary-foreground hover:bg-primary/90 h-12 rounded-lg transition-all duration-200 hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-50"
          >
            {t("button.reset")}
          </CustomButton>
        </form>
      </FormProvider>
    </AuthStepLayout>
  );
};

export default NewPasswordStepMain;
