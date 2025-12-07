"use client";

// components
import ResendButton from "@/components/ResendButton";
import OtpInputGroup from "../../components/OtpInputGroup";
import OtpVerifyingStatus from "../../components/OtpVerifyingStatus";
import OtpInstructionBox from "../../components/OtpInstructionBox";
// ghosts
import CountdownEffect from "@/ghosts/CountdownEffect";
import AutoVerifyEffect from "../../ghosts/AutoVerifyEffect";
// hooks
import { useOtpVerification } from "../../hooks/useOtpVerification";

const OtpStepForm = ({
  email,
  tryOtherHref,
  labels
}: {
  email: string;
  tryOtherHref: string;
  labels: {
    instruction: string;
    verifying: string;
    resend: string;
    resendIn: string;
    sending: string;
    tryOther: string;
    resendSuccess: string;
    errorInvalidOtp: string;
    errorGeneric: string;
  };
}) => {
  const {
    otpValue,
    countdown,
    canResend,
    isVerifying,
    isResending,
    handleOtpChange,
    handleResend,
    verifyOtp,
    setCountdown,
    setCanResend,
    OTP_LENGTH
  } = useOtpVerification({
    email,
    messages: {
      resendSuccess: labels.resendSuccess,
      errorInvalidOtp: labels.errorInvalidOtp,
      errorGeneric: labels.errorGeneric
    }
  });

  return (
    <>
      <div className="mb-6">
        <div className="mb-2">
          <OtpInputGroup
            value={otpValue}
            onChange={handleOtpChange}
            disabled={isVerifying}
            length={OTP_LENGTH}
          />
        </div>

        {isVerifying && <OtpVerifyingStatus label={labels.verifying} />}
      </div>

      <OtpInstructionBox instruction={labels.instruction} />

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

      <CountdownEffect
        countdown={countdown}
        setCountdown={setCountdown}
        setCanResend={setCanResend}
      />
      <AutoVerifyEffect
        otpValue={otpValue}
        otpLength={OTP_LENGTH}
        onVerify={verifyOtp}
      />
    </>
  );
};

export default OtpStepForm;
