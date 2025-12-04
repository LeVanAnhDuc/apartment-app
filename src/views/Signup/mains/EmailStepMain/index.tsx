"use client";

// libs
import { FormProvider, useForm } from "react-hook-form";
import { useTranslations } from "next-intl";
import { UserPlus } from "lucide-react";
// types
import type { SignupEmailFormValues } from "@/types/Signup";
// components
import AuthStepLayout from "@/components/AuthStepLayout";
import AuthIcon from "@/components/AuthIcon";
import AuthDivider from "@/components/AuthDivider";
import NextButton from "../../components/NextButton";
import LoginLink from "../../components/LoginLink";
import SocialSignupButtons from "../../components/SocialSignupButtons";
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
    <AuthStepLayout
      icon={<AuthIcon Icon={UserPlus} variant="green" />}
      title={t("title")}
      description={t("description")}
    >
      <FormProvider {...methods}>
        <SocialSignupButtons
          onGoogleSignup={handleGoogleSignup}
          onFacebookSignup={handleFacebookSignup}
        />
        <AuthDivider />
        <form onSubmit={methods.handleSubmit(onSubmit)} className="space-y-6">
          <EmailInput />
          <NextButton />
        </form>
        <LoginLink />
      </FormProvider>
    </AuthStepLayout>
  );
};

export default EmailStepMain;
