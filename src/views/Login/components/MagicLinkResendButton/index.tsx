"use client";

// libs
import { useTranslations } from "next-intl";
// components
import CustomButton from "@/components/CustomButton";
// others
import { cn } from "@/libs/utils";

interface MagicLinkResendButtonProps {
  countdown: number;
  canResend: boolean;
  isResending: boolean;
  onResend: () => void;
}

const MagicLinkResendButton = ({
  countdown,
  canResend,
  isResending,
  onResend
}: MagicLinkResendButtonProps) => {
  const t = useTranslations("login.form.magicLink.button");

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
      disabled={!canResend || isResending}
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

export default MagicLinkResendButton;
