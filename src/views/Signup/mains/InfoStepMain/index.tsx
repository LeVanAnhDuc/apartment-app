"use client";

// libs
import { FormProvider, useForm } from "react-hook-form";
import { useTranslations } from "next-intl";
import { UserCircle } from "lucide-react";
// types
import type { SignupInfoFormValues } from "@/types/Signup";
// components
import BackButton from "../../components/BackButton";
import AuthIcon from "@/components/AuthIcon";
import AuthFooter from "@/components/AuthFooter";
import EmailBadge from "../../components/EmailBadge";
import FullNameInput from "../../components/FullNameInput";
import GenderSelect from "../../components/GenderSelect";
import BirthdayInput from "../../components/BirthdayInput";
import PasswordInput from "@/components/PasswordInput";
import SubmitButton from "../../components/SubmitButton";
// forms
import { signupInfoFormProps } from "@/forms/Signup";
// stores
import { useSignupStore } from "@/stores";
// hooks
import { useEmailGuard } from "@/hooks";
// others
import CONSTANTS from "@/constants";

const { PASSWORD, PASSWORD_CONFIRM } = CONSTANTS.FIELD_NAMES.SIGNUP_FIELD_NAMES;
const { SIGNUP } = CONSTANTS.ROUTES;

const InfoStepMain = () => {
  const t = useTranslations("signup.infoStep");
  const email = useSignupStore((state) => state.email);
  const goToOtpStep = useSignupStore((state) => state.goToOtpStep);

  const { hasEmail } = useEmailGuard({ email, redirectTo: SIGNUP });

  const methods = useForm<SignupInfoFormValues>({ ...signupInfoFormProps });

  const handleBack = () => {
    // Go back to OTP step (user already verified OTP)
    goToOtpStep(email);
  };

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const onSubmit = (data: SignupInfoFormValues) => {
    // TODO: Call API to register user with email and form data
  };

  if (!hasEmail) return null;

  return (
    <main className="auth-background flex min-h-screen items-center justify-center p-4">
      <div className="my-8 w-full max-w-md">
        <div className="auth-card relative p-8 md:p-10">
          <BackButton onClick={handleBack} />

          <div className="mb-8 text-center">
            <div className="mb-4 flex justify-center">
              <AuthIcon Icon={UserCircle} variant="green" />
            </div>
            <h1 className="text-foreground mb-2 text-2xl font-medium">
              {t("title")}
            </h1>
            <EmailBadge email={email} />
          </div>

          <FormProvider {...methods}>
            <form
              onSubmit={methods.handleSubmit(onSubmit)}
              className="space-y-5"
            >
              <FullNameInput />
              <GenderSelect />
              <BirthdayInput />
              <PasswordInput
                name={PASSWORD}
                label={t("input.labelPassword")}
                placeholder={t("input.placeholderPassword")}
                required
              />
              <PasswordInput
                name={PASSWORD_CONFIRM}
                label={t("input.labelPasswordConfirm")}
                placeholder={t("input.placeholderPasswordConfirm")}
                required
              />
              <SubmitButton />
            </form>
          </FormProvider>
        </div>

        <AuthFooter />
      </div>
    </main>
  );
};

export default InfoStepMain;
