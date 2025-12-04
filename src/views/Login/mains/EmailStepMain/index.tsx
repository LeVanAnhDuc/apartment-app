"use client";

// libs
import { FormProvider, useForm } from "react-hook-form";
import { useTranslations } from "next-intl";
import { KeyRound } from "lucide-react";
// types
import type { EmailStepFormValues } from "@/types/Login";
// components
import AuthStepLayout from "@/components/AuthStepLayout";
import AuthIcon from "@/components/AuthIcon";
import AuthDivider from "@/components/AuthDivider";
import EmailInput from "../../components/EmailInput";
import NextButton from "../../components/NextButton";
import SignUpLink from "../../components/SignUpLink";
import SocialLoginButtons from "../../components/SocialLoginButtons";
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
    <AuthStepLayout
      icon={<AuthIcon Icon={KeyRound} />}
      title={t("title")}
      description={t("description")}
    >
      <FormProvider {...methods}>
        <SocialLoginButtons
          onGoogleLogin={handleGoogleLogin}
          onFacebookLogin={handleFacebookLogin}
        />
        <AuthDivider />
        <form onSubmit={methods.handleSubmit(onSubmit)} className="space-y-6">
          <EmailInput />
          <NextButton />
        </form>
        <SignUpLink />
      </FormProvider>
    </AuthStepLayout>
  );
};

export default EmailStepMain;
