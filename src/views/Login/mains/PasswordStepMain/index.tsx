"use client";

// libs
import { FormProvider, useForm } from "react-hook-form";
import { useTranslations } from "next-intl";
import { KeyRound } from "lucide-react";
// types
import type { PasswordStepFormValues } from "@/types/Login";
// components
import CustomButton from "@/components/CustomButton";
import BackButton from "../../components/BackButton";
import EmailBadge from "@/components/EmailBadge";
import PasswordInput from "../../components/PasswordInput";
import ForgotPasswordLink from "../../components/ForgotPasswordLink";
import TryAnotherButton from "../../components/TryAnotherButton";
import AuthIcon from "@/components/AuthIcon";
import AuthFooter from "@/components/AuthFooter";
// forms
import { passwordStepFormProps } from "@/forms/Login";
// services
import { useLoginMutation } from "@/services/auths";
// stores
import { useLoginStore } from "@/stores";
// hooks
import { useEmailGuard } from "@/hooks";
// others
import CONSTANTS from "@/constants";

const { EMAIL, PASSWORD } = CONSTANTS.FIELD_NAMES.LOGIN_FIELD_NAMES;

const PasswordStepMain = () => {
  const t = useTranslations("login.form");
  const email = useLoginStore((state) => state.email);

  const { hasEmail } = useEmailGuard({ email });
  const goToEmailStep = useLoginStore((state) => state.goToEmailStep);
  const goToAlternativeStep = useLoginStore(
    (state) => state.goToAlternativeStep
  );

  const { mutate: login, isPending } = useLoginMutation();

  const methods = useForm<PasswordStepFormValues>({ ...passwordStepFormProps });

  const onSubmit = (data: PasswordStepFormValues) => {
    login({ [EMAIL]: email, [PASSWORD]: data[PASSWORD] });
  };

  const handleTryAnother = () => {
    goToAlternativeStep();
  };

  if (!hasEmail) return null;

  return (
    <main className="auth-background flex min-h-screen items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="auth-card relative p-8 md:p-10">
          <BackButton onClick={goToEmailStep} disabled={isPending} />

          <div className="mb-8 text-center">
            <div className="mb-4 flex justify-center">
              <AuthIcon Icon={KeyRound} />
            </div>
            <h1 className="text-foreground mb-2 text-2xl font-medium">
              {t("titleWelcome")}
            </h1>
          </div>

          <FormProvider {...methods}>
            <EmailBadge email={email} />
            <form
              onSubmit={methods.handleSubmit(onSubmit)}
              className="space-y-6"
            >
              <PasswordInput disabled={isPending} />
              <ForgotPasswordLink />
              <div className="flex gap-3">
                <TryAnotherButton
                  onClick={handleTryAnother}
                  disabled={isPending}
                />
                <CustomButton
                  type="submit"
                  loading={isPending}
                  className="bg-primary text-primary-foreground hover:bg-primary/90 h-12 flex-1 rounded-lg transition-all duration-200 hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-50"
                >
                  {t("button.next")}
                </CustomButton>
              </div>
            </form>
          </FormProvider>
        </div>

        <AuthFooter />
      </div>
    </main>
  );
};

export default PasswordStepMain;
