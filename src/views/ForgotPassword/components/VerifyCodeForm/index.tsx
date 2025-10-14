"use client";

// libs
import { FormProvider, useForm } from "react-hook-form";
import { useTranslations } from "next-intl";
// types
import type { VerifyCodeFormValues } from "@/types/ForgotPassword";
// components
import { Button } from "@/components/ui/button";
import CustomButton from "@/components/CustomButton";
import InputOtp from "../InputOtp";
import ResendCodeSection from "../ResendCodeSection";
// forms
import { verifyCodeFormProps } from "@/forms/ForgotPassword";
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
  const methods = useForm<VerifyCodeFormValues>({ ...verifyCodeFormProps });

  const { mutate: verifyCode, isPending } = useVerifyCodeMutation();

  const onSubmit = (values: VerifyCodeFormValues) => {
    verifyCode(
      { ...values, email },
      {
        onSuccess
      }
    );
  };

  const handleAutoSubmit = () => methods.handleSubmit(onSubmit)();

  return (
    <div className="space-y-4">
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)} className="space-y-4">
          <InputOtp onAutoSubmit={handleAutoSubmit} />

          <CustomButton
            type="submit"
            fullWidth
            loading={isPending}
            disabled={isPending}
          >
            {t("form.step2.button.verify")}
          </CustomButton>
        </form>
      </FormProvider>

      <ResendCodeSection email={email} disabled={isPending} />

      <div className="text-center">
        <Button
          variant="link"
          onClick={onBack}
          className="text-sm"
          disabled={isPending}
        >
          {t("form.step2.button.backToEmail")}
        </Button>
      </div>
    </div>
  );
};

export default VerifyCodeForm;
