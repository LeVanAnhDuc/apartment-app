"use client";

// libs
import { FormProvider, useForm } from "react-hook-form";
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import { UserPlus, ChevronLeft } from "lucide-react";
// types
import type { SignupEmailFormValues } from "@/types/Signup";
// components
import CustomButton from "@/components/CustomButton";
import NextButton from "../../components/NextButton";
import AuthIcon from "@/components/AuthIcon";
import SocialSignupButtons from "../../components/SocialSignupButtons";
import AuthFooter from "@/components/AuthFooter";
import AuthDivider from "@/components/AuthDivider";
import TermsNotice from "../../components/TermsNotice";
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
  const router = useRouter();
  const goToOtpStep = useSignupStore((state) => state.goToOtpStep);

  const methods = useForm<SignupEmailFormValues>({ ...signupEmailFormProps });

  const onSubmit = (data: SignupEmailFormValues) => {
    // TODO: Call API to send OTP to email
    goToOtpStep(data[EMAIL]);
  };

  const handleBackToLogin = () => {
    router.push(CONSTANTS.ROUTES.LOGIN);
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
        <div className="auth-card relative p-8 md:p-10">
          <CustomButton
            onClick={handleBackToLogin}
            variant="ghost"
            type="button"
            className="hover:bg-accent absolute top-6 left-6 h-10 w-10 rounded-full p-0 transition-all duration-200 md:top-8 md:left-8"
          >
            <ChevronLeft className="text-muted-foreground h-5 w-5" />
          </CustomButton>

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
            <TermsNotice />
          </FormProvider>
        </div>

        <AuthFooter />
      </div>
    </main>
  );
};

export default EmailStepMain;
