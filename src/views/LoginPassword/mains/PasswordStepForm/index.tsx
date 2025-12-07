"use client";

// libs
import { FormProvider, useForm } from "react-hook-form";
// types
import type { PasswordStepFormValues } from "@/types/Login";
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
  labels
}: {
  email: string;
  labels: {
    password: string;
    placeholder: string;
    forgotPassword: string;
    tryAnother: string;
    next: string;
  };
}) => {
  const { mutate: login, isPending } = useLoginMutation();
  const methods = useForm<PasswordStepFormValues>({ ...passwordStepFormProps });

  const onSubmit = (data: PasswordStepFormValues) => {
    login({ [EMAIL]: email, [PASSWORD]: data[PASSWORD] });
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)} className="space-y-6">
        <PasswordInput
          name={PASSWORD}
          label={labels.password}
          placeholder={labels.placeholder}
          disabled={isPending}
        />
        <ForgotPasswordLink email={email} label={labels.forgotPassword} />
        <div className="flex gap-3">
          <TryAnotherButton
            email={email}
            disabled={isPending}
            label={labels.tryAnother}
          />
          <CustomButton
            type="submit"
            loading={isPending}
            className="bg-primary text-primary-foreground hover:bg-primary/90 h-12 flex-1 rounded-lg transition-all duration-200 hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-50"
          >
            {labels.next}
          </CustomButton>
        </div>
      </form>
    </FormProvider>
  );
};

export default PasswordStepForm;
