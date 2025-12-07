"use client";

// libs
import { useState } from "react";
import { toast } from "sonner";
// components
import ResendButton from "@/components/ResendButton";
// ghosts
import CountdownEffect from "@/ghosts/CountdownEffect";
// others
import CONSTANTS from "@/constants";

const COUNTDOWN_SECONDS = 60;
const { LOGIN_ALTERNATIVE } = CONSTANTS.ROUTES;

const MagicLinkForm = ({
  email,
  labels
}: {
  email: string;
  labels: {
    resendSuccess: string;
    resend: string;
    resendIn: string;
    sending: string;
    tryOther: string;
  };
}) => {
  const [countdown, setCountdown] = useState(COUNTDOWN_SECONDS);
  const [canResend, setCanResend] = useState(false);
  const [isResending, setIsResending] = useState(false);

  const handleResend = async () => {
    setIsResending(true);

    // TODO: Implement actual resend API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    toast.success(labels.resendSuccess);
    setCountdown(COUNTDOWN_SECONDS);
    setCanResend(false);
    setIsResending(false);
  };

  const handleTryOther = () => {
    const encodedEmail = encodeURIComponent(email);
    window.location.href = `${LOGIN_ALTERNATIVE}?email=${encodedEmail}`;
  };

  return (
    <>
      <ResendButton
        countdown={countdown}
        canResend={canResend}
        isResending={isResending}
        onResend={handleResend}
        onTryOther={handleTryOther}
        labels={{
          resend: labels.resend,
          resendIn: labels.resendIn,
          sending: labels.sending,
          tryOther: labels.tryOther
        }}
      />

      <CountdownEffect
        countdown={countdown}
        setCountdown={setCountdown}
        setCanResend={setCanResend}
      />
    </>
  );
};

export default MagicLinkForm;
