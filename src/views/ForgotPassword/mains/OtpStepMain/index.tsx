"use client";

// libs
import { useCallback } from "react";
import { useTranslations } from "next-intl";
// components
import AuthStepLayout from "@/components/AuthStepLayout";
import ResendButton from "@/components/ResendButton";
import ForgotPasswordIcon from "../../components/ForgotPasswordIcon";
import OtpInput from "../../components/OtpInput";
import OtpVerifyingStatus from "../../components/OtpVerifyingStatus";
import OtpInstructionBox from "../../components/OtpInstructionBox";
// ghosts
import CountdownEffect from "@/ghosts/CountdownEffect";
import AutoVerifyEffect from "../../ghosts/AutoVerifyEffect";
// stores
import { useForgotPasswordStore } from "@/stores";
// hooks
import { useEmailGuard } from "@/hooks";
import { useOtpVerification } from "../../hooks/useOtpVerification";

const OtpStepMain = () => {
  const t = useTranslations("forgotPassword.form.otp");
  const email = useForgotPasswordStore((state) => state.email);
  const goToOptionsStep = useForgotPasswordStore(
    (state) => state.goToOptionsStep
  );

  const { hasEmail } = useEmailGuard({ email });

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
  } = useOtpVerification();

  const handleBack = useCallback(() => {
    goToOptionsStep(email);
  }, [email, goToOptionsStep]);

  if (!hasEmail) return null;

  return (
    <AuthStepLayout
      icon={<ForgotPasswordIcon variant="lock" />}
      title={t("title")}
      description={t("description")}
      email={email}
      onBack={handleBack}
      backDisabled={isVerifying}
      ghostComponents={
        <>
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
      }
    >
      <div className="mb-6">
        <div className="mb-2">
          <OtpInput
            value={otpValue}
            onChange={handleOtpChange}
            disabled={isVerifying}
            length={OTP_LENGTH}
          />
        </div>

        {isVerifying && <OtpVerifyingStatus />}
      </div>

      <OtpInstructionBox />

      <ResendButton
        countdown={countdown}
        canResend={canResend}
        isResending={isResending}
        isProcessing={isVerifying}
        onResend={handleResend}
        onTryOther={handleBack}
        labels={{
          resend: t("button.resend"),
          resendIn: t("button.resendIn", { seconds: "{seconds}" }),
          sending: t("button.sending"),
          tryOther: t("button.tryOther")
        }}
      />
    </AuthStepLayout>
  );
};

export default OtpStepMain;
