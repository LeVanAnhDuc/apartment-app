"use client";

// libs
import { FormProvider, useForm } from "react-hook-form";
import { useTranslations } from "next-intl";
import { UserCircle } from "lucide-react";
// types
import type { SignupInfoFormValues } from "@/types/Signup";
// components
import AuthStepLayout from "@/components/AuthStepLayout";
import AuthIcon from "@/components/AuthIcon";
import PasswordInput from "@/components/PasswordInput";
import FullNameInput from "../../components/FullNameInput";
import GenderSelect from "../../components/GenderSelect";
import BirthdayInput from "../../components/BirthdayInput";
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
  const goToEmailStep = useSignupStore((state) => state.goToEmailStep);

  const { hasEmail } = useEmailGuard({ email, redirectTo: SIGNUP });

  const methods = useForm<SignupInfoFormValues>({ ...signupInfoFormProps });

  const handleBack = () => {
    goToEmailStep();
  };

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const onSubmit = (data: SignupInfoFormValues) => {
    // TODO: Call API to register user with email and form data
  };

  if (!hasEmail) return null;

  return (
    <AuthStepLayout
      icon={<AuthIcon Icon={UserCircle} variant="green" />}
      title={t("title")}
      email={email}
      onBack={handleBack}
    >
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)} className="space-y-5">
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
    </AuthStepLayout>
  );
};

export default InfoStepMain;
