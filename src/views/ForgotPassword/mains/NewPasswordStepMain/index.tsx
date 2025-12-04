"use client";

// libs
import { useCallback } from "react";
import { useRouter } from "next/navigation";
import { useTranslations } from "next-intl";
import { FormProvider, useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { toast } from "sonner";
// types
import type { NewPasswordFormValues } from "@/types/ForgotPassword";
import { KeyRound } from "lucide-react";
// components
import BackButton from "@/views/Login/components/BackButton";
import AuthFooter from "@/components/AuthFooter";
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
    <main className="auth-background flex min-h-screen items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.3 }}
        className="w-full max-w-md"
      >
        <div className="auth-card relative p-8 md:p-10">
          <BackButton onClick={handleBack} disabled={isPending} />

          <div className="mb-8 text-center">
            <div className="mb-4 flex justify-center">
              <AuthIcon Icon={KeyRound} variant="orange" animated />
            </div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h1 className="text-foreground mb-2 text-2xl font-medium">
                {t("title")}
              </h1>
              <p className="text-muted-foreground">{t("description")}</p>
            </motion.div>
          </div>

          <FormProvider {...methods}>
            <form
              onSubmit={methods.handleSubmit(onSubmit)}
              className="space-y-5"
            >
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
        </div>

        <AuthFooter />
      </motion.div>
    </main>
  );
};

export default NewPasswordStepMain;
