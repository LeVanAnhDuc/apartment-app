"use client";

// libs
import { useState } from "react";
import { toast } from "sonner";
import { useRouter } from "@/i18n/navigation";
// components
import ResendButton from "@/components/ResendButton";
import OtpInputGroup from "@/components/OtpInputGroup";
import OtpInstruction from "../../components/OtpInstruction";
// hooks
import { useCountdown } from "@/hooks";
// ghosts
import AutoVerifyOTPEffect from "@/ghosts/AutoVerifyOTPEffect";
// others
import CONSTANTS from "@/constants";

const { OTP_LENGTH, RESEND_COUNTDOWN } = CONSTANTS.FORGOT_PASSWORD;
const { HOME } = CONSTANTS.ROUTES;

const OtpStepForm = ({
  tryOtherHref,
  labels
}: {
  tryOtherHref: string;
  labels: {
    instruction: string;
    verifying: string;
    resendSuccess: string;
    resend: string;
    resendIn: string;
    sending: string;
    tryOther: string;
  };
}) => {
  const router = useRouter();
  const {
    seconds: countdown,
    isFinished: canResend,
    reset: resetCountdown
  } = useCountdown(RESEND_COUNTDOWN);

  const [otp, setOtp] = useState("");
  const [isResending, setIsResending] = useState(false);
  const [isVerifying, setIsVerifying] = useState(false);

  const handleVerify = async () => {
    if (otp.length !== OTP_LENGTH) return;

    setIsVerifying(true);

    // TODO: Implement actual verification API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsVerifying(false);

    // After OTP verified, go to home/dashboard
    router.push(HOME);
  };

  const handleResend = async () => {
    setIsResending(true);

    // TODO: Implement actual resend API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    toast.success(labels.resendSuccess);
    resetCountdown();
    setIsResending(false);
    setOtp("");
  };

  const handleOtpChange = (value: string) => {
    setOtp(value);
  };

  console.log("check");

  return (
    <>
      <OtpInputGroup
        value={otp}
        onChange={handleOtpChange}
        disabled={isResending}
        isVerifying={isVerifying}
        verifyingLabel={labels.verifying}
      />

      <OtpInstruction label={labels.instruction} />

      <ResendButton
        countdown={countdown}
        canResend={canResend}
        isResending={isResending}
        isProcessing={isVerifying}
        onResend={handleResend}
        tryOtherHref={tryOtherHref}
        labels={{
          resend: labels.resend,
          resendIn: labels.resendIn,
          sending: labels.sending,
          tryOther: labels.tryOther
        }}
      />

      <AutoVerifyOTPEffect
        otpValue={otp}
        otpLength={OTP_LENGTH}
        onVerify={handleVerify}
      />
    </>
  );
};

export default OtpStepForm;
