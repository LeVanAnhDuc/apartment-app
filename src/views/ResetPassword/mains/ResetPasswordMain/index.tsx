"use client";

// libs
import { useTranslations } from "next-intl";
import { FormProvider, useForm } from "react-hook-form";
import { toast } from "sonner";
import { KeyRound } from "lucide-react";
// types
import type { ResetPasswordFormValues } from "@/types/ResetPassword";
// components
import AuthStepLayout from "@/components/AuthStepLayout";
import CustomButton from "@/components/CustomButton";
import AuthIcon from "@/components/AuthIcon";
import PasswordInput from "@/components/PasswordInput";
import PasswordRequirements from "../../components/PasswordRequirements";
// forms
import { resetPasswordFormProps } from "@/forms/ResetPassword";
// stores
import { useForgotPasswordStore, useResetPasswordStore } from "@/stores";
// hooks
import { useEmailGuard } from "@/hooks";
// others
import { useRouter } from "@/i18n/navigation";
import CONSTANTS from "@/constants";

const { NEW_PASSWORD, CONFIRM_PASSWORD } =
  CONSTANTS.FIELD_NAMES.FORGOT_PASSWORD_FIELD_NAMES;
const { LOGIN } = CONSTANTS.ROUTES;

const ResetPasswordMain = () => {
  const router = useRouter();
  const t = useTranslations("resetPassword.form");
  const tMessage = useTranslations("resetPassword.message");

  const email = useResetPasswordStore((state) => state.email);
  const token = useResetPasswordStore((state) => state.token);
  const resetStore = useResetPasswordStore((state) => state.reset);
  const resetStoreForgot = useForgotPasswordStore((state) => state.reset);

  const { hasEmail } = useEmailGuard({ email, redirectTo: LOGIN });

  const methods = useForm<ResetPasswordFormValues>({
    ...resetPasswordFormProps
  });
  const { formState } = methods;
  const { isSubmitting } = formState;

  const onSubmit = async (data: ResetPasswordFormValues) => {
    // TODO: Call API to reset password with email, token, and newPassword
    console.log("Reset password:", {
      email,
      token,
      newPassword: data.newPassword
    });
    await new Promise((resolve) => setTimeout(resolve, 1500));

    toast.success(tMessage("success"));
    resetStore();
    resetStoreForgot();
    router.push(LOGIN);
  };

  if (!hasEmail) return null;

  return (
    <AuthStepLayout
      icon={<AuthIcon Icon={KeyRound} variant="orange" animated />}
      title={t("title")}
      description={t("description")}
      email={email}
    >
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)} className="space-y-5">
          <PasswordInput
            name={NEW_PASSWORD}
            label={t("input.labelNewPassword")}
            placeholder={t("input.placeholderNewPassword")}
            disabled={isSubmitting}
          />
          <PasswordInput
            name={CONFIRM_PASSWORD}
            label={t("input.labelConfirmPassword")}
            placeholder={t("input.placeholderConfirmPassword")}
            disabled={isSubmitting}
          />
          <PasswordRequirements />

          <CustomButton
            type="submit"
            fullWidth
            loading={isSubmitting}
            className="bg-primary text-primary-foreground hover:bg-primary/90 h-12 rounded-lg transition-all duration-200 hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-50"
          >
            {t("button.reset")}
          </CustomButton>
        </form>
      </FormProvider>
    </AuthStepLayout>
  );
};

export default ResetPasswordMain;
