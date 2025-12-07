"use client";

// libs
import { useState } from "react";
import { toast } from "sonner";
import { useRouter } from "@/i18n/navigation";
// components
import ResendButton from "@/components/ResendButton";
import OtpInputGroup from "../../components/OtpInputGroup";
import OtpInstruction from "../../components/OtpInstruction";
// ghosts
import CountdownEffect from "@/ghosts/CountdownEffect";
import AutoVerifyEffect from "../../ghosts/AutoVerifyEffect";
// others
import CONSTANTS from "@/constants";

const OTP_LENGTH = 6;
const COUNTDOWN_SECONDS = 60;
const { SIGNUP_INFO } = CONSTANTS.ROUTES;

const OtpStepForm = ({
  email,
  changeEmailHref,
  labels
}: {
  email: string;
  changeEmailHref: string;
  labels: {
    verifying: string;
    instruction: string;
    resendSuccess: string;
    resend: string;
    resendIn: string;
    sending: string;
    changeEmail: string;
  };
}) => {
  const router = useRouter();

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
    // After OTP verified, go to info step
    const encodedEmail = encodeURIComponent(email);
    router.push(`${SIGNUP_INFO}?email=${encodedEmail}`);
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
        labels={{ verifying: labels.verifying }}
      />

      <OtpInstruction label={labels.instruction} />

      <ResendButton
        countdown={countdown}
        canResend={canResend}
        isResending={isResending}
        isProcessing={isVerifying}
        onResend={handleResend}
        tryOtherHref={changeEmailHref}
        labels={{
          resend: labels.resend,
          resendIn: labels.resendIn,
          sending: labels.sending,
          tryOther: labels.changeEmail
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
