"use client";

// components
import ResendButton from "@/components/ResendButton";
import MagicLinkInstructions from "../../components/MagicLinkInstructions";
// hooks
import { useMagicLink } from "../../hooks/useMagicLink";

const MagicLinkForm = ({
  email,
  tryOtherHref,
  labels
}: {
  email: string;
  tryOtherHref: string;
  labels: {
    checkEmail: string;
    clickLink: string;
    checkSpam: string;
    resend: string;
    resendIn: string;
    sending: string;
    tryOther: string;
    resendSuccess: string;
    errorGeneric: string;
  };
}) => {
  const { countdown, canResend, isResending, handleResend } = useMagicLink({
    email,
    messages: {
      resendSuccess: labels.resendSuccess,
      errorGeneric: labels.errorGeneric
    }
  });

  return (
    <>
      <MagicLinkInstructions
        labels={{
          checkEmail: labels.checkEmail,
          clickLink: labels.clickLink,
          checkSpam: labels.checkSpam
        }}
      />

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
    </>
  );
};

export default MagicLinkForm;
