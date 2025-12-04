"use client";

// libs
import { FormProvider, useForm } from "react-hook-form";
import { useTranslations } from "next-intl";
import { KeyRound } from "lucide-react";
// types
import type { PasswordStepFormValues } from "@/types/Login";
// components
import AuthStepLayout from "@/components/AuthStepLayout";
import CustomButton from "@/components/CustomButton";
import PasswordInput from "@/components/PasswordInput";
import ForgotPasswordLink from "../../components/ForgotPasswordLink";
import TryAnotherButton from "../../components/TryAnotherButton";
import AuthIcon from "@/components/AuthIcon";
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
const { LOGIN } = CONSTANTS.ROUTES;

const PasswordStepMain = () => {
  const t = useTranslations("login.form");
  const email = useLoginStore((state) => state.email);

  const { hasEmail } = useEmailGuard({ email, redirectTo: LOGIN });
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
    <AuthStepLayout
      icon={<AuthIcon Icon={KeyRound} />}
      title={t("titleWelcome")}
      email={email}
      onBack={goToEmailStep}
      backDisabled={isPending}
    >
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)} className="space-y-6">
          <PasswordInput
            name={PASSWORD}
            label={t("input.labelEnterPassword")}
            placeholder={t("input.placeholderPassword")}
            disabled={isPending}
          />
          <ForgotPasswordLink />
          <div className="flex gap-3">
            <TryAnotherButton onClick={handleTryAnother} disabled={isPending} />
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
    </AuthStepLayout>
  );
};

export default PasswordStepMain;
