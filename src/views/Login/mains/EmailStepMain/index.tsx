"use client";

// libs
import { FormProvider, useForm } from "react-hook-form";
import { useTranslations } from "next-intl";
import { KeyRound } from "lucide-react";
// types
import type { EmailStepFormValues } from "@/types/Login";
// components
import EmailInput from "../../components/EmailInput";
import NextButton from "../../components/NextButton";
import SignUpLink from "../../components/SignUpLink";
import AuthIcon from "@/components/AuthIcon";
import SocialLoginButtons from "../../components/SocialLoginButtons";
import AuthFooter from "@/components/AuthFooter";
import AuthDivider from "@/components/AuthDivider";
// forms
import { emailStepFormProps } from "@/forms/Login";
// stores
import { useLoginStore } from "@/stores";
// others
import CONSTANTS from "@/constants";

const { EMAIL } = CONSTANTS.FIELD_NAMES.LOGIN_FIELD_NAMES;

const EmailStepMain = () => {
  const t = useTranslations("login.form");
  const goToPasswordStep = useLoginStore((state) => state.goToPasswordStep);

  const methods = useForm<EmailStepFormValues>({ ...emailStepFormProps });

  const onSubmit = (data: EmailStepFormValues) => {
    goToPasswordStep(data[EMAIL]);
  };

  const handleGoogleLogin = () => {
    // TODO: Implement Google OAuth login
  };

  const handleFacebookLogin = () => {
    // TODO: Implement Facebook OAuth login
  };

  return (
    <main className="auth-background flex min-h-screen items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="auth-card p-8 md:p-10">
          <div className="mb-8 text-center">
            <div className="mb-4 flex justify-center">
              <AuthIcon Icon={KeyRound} />
            </div>
            <h1 className="text-foreground mb-2 text-2xl font-medium">
              {t("title")}
            </h1>
            <p className="text-muted-foreground">{t("description")}</p>
          </div>

          <FormProvider {...methods}>
            <SocialLoginButtons
              onGoogleLogin={handleGoogleLogin}
              onFacebookLogin={handleFacebookLogin}
            />
            <AuthDivider />
            <form
              onSubmit={methods.handleSubmit(onSubmit)}
              className="space-y-6"
            >
              <EmailInput />
              <NextButton />
            </form>
            <SignUpLink />
          </FormProvider>
        </div>

        <AuthFooter />
      </div>
    </main>
  );
};

export default EmailStepMain;
