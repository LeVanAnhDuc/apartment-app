"use client";

// libs
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTranslations } from "next-intl";
// types
import type { VerifyCodeFormValues } from "@/types/ForgotPassword";
// components
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import CustomButton from "@/components/CustomButton";
import OtpInputField from "../OtpInputField";
import ResendCodeSection from "../ResendCodeSection";
// forms
import {
  verifyCodeValidation,
  initialVerifyCodeFormData
} from "@/forms/ForgotPassword";
// services
import { useVerifyCodeMutation } from "@/services/auths";

const VerifyCodeForm = ({
  email,
  onSuccess,
  onBack
}: {
  email: string;
  onSuccess: () => void;
  onBack: () => void;
}) => {
  const t = useTranslations("forgotPassword");
  const verifyCodeMutation = useVerifyCodeMutation();

  const form = useForm<VerifyCodeFormValues>({
    resolver: zodResolver(verifyCodeValidation),
    defaultValues: initialVerifyCodeFormData
  });

  const onSubmit = async (values: VerifyCodeFormValues) => {
    await verifyCodeMutation.mutateAsync({ ...values, email });
    onSuccess();
  };

  const handleAutoSubmit = () => form.handleSubmit(onSubmit)();

  const isLoading = verifyCodeMutation.isPending;

  return (
    <div className="space-y-4">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <OtpInputField disabled={isLoading} onAutoSubmit={handleAutoSubmit} />

          <CustomButton
            type="submit"
            fullWidth
            loading={verifyCodeMutation.isPending}
            disabled={isLoading}
          >
            {t("form.step2.button.verify")}
          </CustomButton>
        </form>
      </Form>

      <ResendCodeSection email={email} disabled={isLoading} />

      <div className="text-center">
        <Button
          variant="link"
          onClick={onBack}
          className="text-sm"
          disabled={isLoading}
        >
          {t("form.step2.button.backToEmail")}
        </Button>
      </div>
    </div>
  );
};

export default VerifyCodeForm;
