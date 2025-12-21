"use client";

// libs
import { FormProvider, useForm } from "react-hook-form";
// types
import type { PasswordStepFormValues } from "@/types/Login";
import type { LoginMessages } from "@/types/libs";
// components
import CustomButton from "@/components/CustomButton";
import PasswordInput from "@/components/PasswordInput";
import ForgotPasswordLink from "../../components/ForgotPasswordLink";
import TryAnotherButton from "../../components/TryAnotherButton";
// forms
import { passwordStepFormProps } from "@/forms/Login";
// services
import { useLoginMutation } from "@/services/auths";
// others
import CONSTANTS from "@/constants";

const { EMAIL, PASSWORD } = CONSTANTS.FIELD_NAMES.LOGIN_FIELD_NAMES;

const PasswordStepForm = ({
  email,
  translations
}: {
  email: string;
  translations: LoginMessages;
}) => {
  const { mutate: login, isPending } = useLoginMutation();
  const methods = useForm<PasswordStepFormValues>({ ...passwordStepFormProps });

  const {
    input: { labelEnterPassword, placeholderPassword },
    button: { tryAnother, next }
  } = translations.form;
  const { forgotPassword } = translations.link;

  const onSubmit = (data: PasswordStepFormValues) => {
    login({ [EMAIL]: email, [PASSWORD]: data[PASSWORD] });
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)} className="space-y-6">
        <PasswordInput
          name={PASSWORD}
          label={labelEnterPassword}
          placeholder={placeholderPassword}
          disabled={isPending}
        />
        <ForgotPasswordLink email={email} label={forgotPassword} />
        <div className="flex gap-3">
          <TryAnotherButton
            email={email}
            disabled={isPending}
            label={tryAnother}
          />
          <CustomButton
            type="submit"
            loading={isPending}
            className="bg-primary text-primary-foreground hover:bg-primary/90 h-12 flex-1 rounded-lg transition-all duration-200 hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-50"
          >
            {next}
          </CustomButton>
        </div>
      </form>
    </FormProvider>
  );
};

export default PasswordStepForm;
