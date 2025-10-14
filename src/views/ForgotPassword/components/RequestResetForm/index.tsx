"use client";

// libs
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTranslations } from "next-intl";
// types
import type { RequestResetFormValues } from "@/types/ForgotPassword";
// components
import { Form } from "@/components/ui/form";
import CustomButton from "@/components/CustomButton";
import EmailInputField from "../EmailInputField";
// forms
import {
  requestResetValidation,
  initialRequestResetFormData
} from "@/forms/ForgotPassword";
// services
import { useRequestResetMutation } from "@/services/auths";

const RequestResetForm = ({
  onSuccess
}: {
  onSuccess: (values: RequestResetFormValues) => void;
}) => {
  const t = useTranslations("forgotPassword");
  const requestResetMutation = useRequestResetMutation();

  const form = useForm<RequestResetFormValues>({
    resolver: zodResolver(requestResetValidation),
    defaultValues: initialRequestResetFormData
  });

  const onSubmit = async (values: RequestResetFormValues) => {
    await requestResetMutation.mutateAsync(values);
    onSuccess(values);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <EmailInputField disabled={requestResetMutation.isPending} />

        <CustomButton
          type="submit"
          fullWidth
          loading={requestResetMutation.isPending}
          disabled={requestResetMutation.isPending}
        >
          {t("form.step1.button.sendCode")}
        </CustomButton>
      </form>
    </Form>
  );
};

export default RequestResetForm;
