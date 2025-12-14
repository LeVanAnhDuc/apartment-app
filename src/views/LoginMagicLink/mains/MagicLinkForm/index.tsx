"use client";

// libs
import { useState } from "react";
import { toast } from "sonner";
// components
import ResendButton from "@/components/ResendButton";
// hooks
import { useCountdown } from "@/hooks";

const COUNTDOWN_SECONDS = 60;

const MagicLinkForm = ({
  tryOtherHref,
  labels
}: {
  tryOtherHref: string;
  labels: {
    resendSuccess: string;
    resend: string;
    resendIn: string;
    sending: string;
    tryOther: string;
  };
}) => {
  const {
    seconds: countdown,
    isFinished: canResend,
    reset: resetCountdown
  } = useCountdown(COUNTDOWN_SECONDS);
  const [isResending, setIsResending] = useState(false);

  const handleResend = async () => {
    setIsResending(true);

    // TODO: Implement actual resend API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    toast.success(labels.resendSuccess);
    resetCountdown();
    setIsResending(false);
  };

  return (
    <ResendButton
      countdown={countdown}
      canResend={canResend}
      isResending={isResending}
      onResend={handleResend}
      tryOtherHref={tryOtherHref}
      labels={{
        resend: labels.resend,
        resendIn: labels.resendIn,
        sending: labels.sending,
        tryOther: labels.tryOther
      }}
    />
  );
};

export default MagicLinkForm;
