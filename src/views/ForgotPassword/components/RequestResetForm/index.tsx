"use client";

// libs
import { FormProvider, useForm } from "react-hook-form";
import { useTranslations } from "next-intl";
// types
import type { RequestResetFormValues } from "@/types/ForgotPassword";
// components
import CustomButton from "@/components/CustomButton";
import InputEmail from "../InputEmail";
// forms
import { requestResetFormProps } from "@/forms/ForgotPassword";
// services
import { useRequestResetMutation } from "@/services/auths";

const RequestResetForm = ({
  onSuccess
}: {
  onSuccess: (values: RequestResetFormValues) => void;
}) => {
  const t = useTranslations("forgotPassword");
  const methods = useForm<RequestResetFormValues>({ ...requestResetFormProps });

  const { mutate: requestReset, isPending } = useRequestResetMutation();

  const onSubmit = (values: RequestResetFormValues) => {
    requestReset(values, {
      onSuccess: () => onSuccess(values)
    });
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)} className="space-y-4">
        <InputEmail />

        <CustomButton
          type="submit"
          fullWidth
          loading={isPending}
          disabled={isPending}
        >
          {t("form.step1.button.sendCode")}
        </CustomButton>
      </form>
    </FormProvider>
  );
};

export default RequestResetForm;
