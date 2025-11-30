"use client";

// libs
import { useTranslations } from "next-intl";
// components
import CustomButton from "@/components/CustomButton";
// others
import { cn } from "@/libs/utils";

interface OtpResendButtonProps {
  countdown: number;
  canResend: boolean;
  isResending: boolean;
  disabled?: boolean;
  onResend: () => void;
}

const OtpResendButton = ({
  countdown,
  canResend,
  isResending,
  disabled = false,
  onResend
}: OtpResendButtonProps) => {
  const t = useTranslations("login.form.otp.button");

  const getButtonText = () => {
    if (isResending) {
      return t("sending");
    }
    if (canResend) {
      return t("resend");
    }
    return t("resendIn", { seconds: countdown });
  };

  return (
    <CustomButton
      type="button"
      variant="outline"
      onClick={onResend}
      disabled={!canResend || isResending || disabled}
      loading={isResending}
      className={cn(
        "border-input hover:border-muted-foreground h-12 w-full",
        "transition-all duration-200",
        "disabled:cursor-not-allowed disabled:opacity-50"
      )}
    >
      {getButtonText()}
    </CustomButton>
  );
};

export default OtpResendButton;
