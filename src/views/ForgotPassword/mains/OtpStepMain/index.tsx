"use client";

// libs
import { useTranslations } from "next-intl";
import { Lock } from "lucide-react";
// components
import AuthStepLayout from "@/components/AuthStepLayout";
import ResendButton from "@/components/ResendButton";
import AuthIcon from "@/components/AuthIcon";
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
// others
import CONSTANTS from "@/constants";

const { LOGIN } = CONSTANTS.ROUTES;

const OtpStepMain = () => {
  const t = useTranslations("forgotPassword.form.otp");
  const email = useForgotPasswordStore((state) => state.email);
  const goToOptionsStep = useForgotPasswordStore(
    (state) => state.goToOptionsStep
  );

  const { hasEmail } = useEmailGuard({ email, redirectTo: LOGIN });

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

  const handleBack = () => {
    goToOptionsStep(email);
  };

  if (!hasEmail) return null;

  return (
    <AuthStepLayout
      icon={<AuthIcon Icon={Lock} variant="orange" animated />}
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
