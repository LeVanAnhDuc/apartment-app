"use client";

// libs
import { useState } from "react";
import { toast } from "sonner";
// components
import ResendButton from "@/components/ResendButton";
import OtpInputGroup from "../../components/OtpInputGroup";
// ghosts
import CountdownEffect from "@/ghosts/CountdownEffect";
import AutoVerifyEffect from "../../ghosts/AutoVerifyEffect";

const OTP_LENGTH = 6;
const COUNTDOWN_SECONDS = 60;

const OtpStepForm = ({
  email,
  labels
}: {
  email: string;
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
  const [otp, setOtp] = useState("");
  const [countdown, setCountdown] = useState(COUNTDOWN_SECONDS);
  const [canResend, setCanResend] = useState(false);
  const [isResending, setIsResending] = useState(false);
  const [isVerifying, setIsVerifying] = useState(false);

  const handleVerify = async () => {
    if (otp.length !== OTP_LENGTH) return;

    setIsVerifying(true);

    // TODO: Implement actual verification API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsVerifying(false);
  };

  const handleResend = async () => {
    setIsResending(true);

    // TODO: Implement actual resend API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    toast.success(labels.resendSuccess);
    setCountdown(COUNTDOWN_SECONDS);
    setCanResend(false);
    setIsResending(false);
    setOtp("");
  };

  const handleOtpChange = (value: string) => {
    setOtp(value);
  };

  return (
    <>
      <OtpInputGroup
        value={otp}
        onChange={handleOtpChange}
        disabled={isResending}
        isVerifying={isVerifying}
        verifyingLabel={labels.verifying}
      />

      <ResendButton
        countdown={countdown}
        canResend={canResend}
        isResending={isResending}
        isProcessing={isVerifying}
        onResend={handleResend}
        onTryOther={() => {
          const encodedEmail = encodeURIComponent(email);
          window.location.href = `/login/alternative?email=${encodedEmail}`;
        }}
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
      <AutoVerifyEffect
        otpValue={otp}
        otpLength={OTP_LENGTH}
        onVerify={handleVerify}
      />
    </>
  );
};

export default OtpStepForm;
