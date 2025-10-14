"use client";

// libs
import { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
// components
import CustomButton from "@/components/CustomButton";
// services
import { useResendCodeMutation } from "@/services/auths";
// others
import CONSTANTS from "@/constants";

const { RESEND_COUNTDOWN } = CONSTANTS.FORGOT_PASSWORD;

const ResendCodeSection = ({
  email,
  disabled
}: {
  email: string;
  disabled?: boolean;
}) => {
  const t = useTranslations("forgotPassword");
  const [countdown, setCountdown] = useState(0);
  const resendCodeMutation = useResendCodeMutation();

  useEffect(() => {
    if (countdown > 0) {
      const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [countdown]);

  const handleResendCode = async () => {
    if (countdown > 0 || resendCodeMutation.isPending) return;

    await resendCodeMutation.mutateAsync(email);
    setCountdown(RESEND_COUNTDOWN);
  };

  const canResend =
    countdown === 0 && !resendCodeMutation.isPending && !disabled;

  return (
    <div className="text-center">
      <CustomButton
        variant="link"
        onClick={handleResendCode}
        disabled={!canResend}
        loading={resendCodeMutation.isPending}
        className="text-sm"
      >
        {countdown > 0
          ? t("form.step2.message.resendCooldown", { seconds: countdown })
          : t("form.step2.button.resendCode")}
      </CustomButton>
    </div>
  );
};

export default ResendCodeSection;
