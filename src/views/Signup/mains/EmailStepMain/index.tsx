"use client";

// libs
import { FormProvider, useForm } from "react-hook-form";
import { useTranslations } from "next-intl";
import { UserPlus } from "lucide-react";
// types
import type { SignupEmailFormValues } from "@/types/Signup";
// components
import NextButton from "../../components/NextButton";
import LoginLink from "../../components/LoginLink";
import AuthIcon from "@/components/AuthIcon";
import SocialSignupButtons from "../../components/SocialSignupButtons";
import AuthFooter from "@/components/AuthFooter";
import AuthDivider from "@/components/AuthDivider";
import EmailInput from "../../components/InputEmail";
// forms
import { signupEmailFormProps } from "@/forms/Signup";
// stores
import { useSignupStore } from "@/stores";
// others
import CONSTANTS from "@/constants";

const { EMAIL } = CONSTANTS.FIELD_NAMES.SIGNUP_FIELD_NAMES;

const EmailStepMain = () => {
  const t = useTranslations("signup.emailStep");
  const goToOtpStep = useSignupStore((state) => state.goToOtpStep);

  const methods = useForm<SignupEmailFormValues>({ ...signupEmailFormProps });

  const onSubmit = (data: SignupEmailFormValues) => {
    // TODO: Call API to send OTP to email
    goToOtpStep(data[EMAIL]);
  };

  const handleGoogleSignup = () => {
    // TODO: Implement Google OAuth signup
  };

  const handleFacebookSignup = () => {
    // TODO: Implement Facebook OAuth signup
  };

  return (
    <main className="auth-background flex min-h-screen items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="auth-card p-8 md:p-10">
          <div className="mb-8 text-center">
            <div className="mb-4 flex justify-center">
              <AuthIcon Icon={UserPlus} variant="green" />
            </div>
            <h1 className="text-foreground mb-2 text-2xl font-medium">
              {t("title")}
            </h1>
            <p className="text-muted-foreground">{t("description")}</p>
          </div>

          <FormProvider {...methods}>
            <SocialSignupButtons
              onGoogleSignup={handleGoogleSignup}
              onFacebookSignup={handleFacebookSignup}
            />
            <AuthDivider />
            <form
              onSubmit={methods.handleSubmit(onSubmit)}
              className="space-y-6"
            >
              <EmailInput />
              <NextButton />
            </form>
            <LoginLink />
          </FormProvider>
        </div>

        <AuthFooter />
      </div>
    </main>
  );
};

export default EmailStepMain;
