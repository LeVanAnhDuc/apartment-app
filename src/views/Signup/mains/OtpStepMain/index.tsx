"use client";

// libs
import { useState } from "react";
import { useTranslations } from "next-intl";
import { toast } from "sonner";
import { ShieldCheck } from "lucide-react";
// components
import AuthStepLayout from "@/components/AuthStepLayout";
import ResendButton from "@/components/ResendButton";
import AuthIcon from "@/components/AuthIcon";
import OtpInputGroup from "../../components/OtpInputGroup";
import OtpInstruction from "../../components/OtpInstruction";
// ghosts
import CountdownEffect from "@/ghosts/CountdownEffect";
import AutoVerifyEffect from "../../ghosts/AutoVerifyEffect";
// stores
import { useSignupStore } from "@/stores";
// hooks
import { useEmailGuard } from "@/hooks";
// others
import CONSTANTS from "@/constants";

const OTP_LENGTH = 6;
const COUNTDOWN_SECONDS = 60;
const { SIGNUP } = CONSTANTS.ROUTES;

const OtpStepMain = () => {
  const t = useTranslations("signup.otpStep");
  const email = useSignupStore((state) => state.email);
  const goToEmailStep = useSignupStore((state) => state.goToEmailStep);
  const goToInfoStep = useSignupStore((state) => state.goToInfoStep);

  const { hasEmail } = useEmailGuard({ email, redirectTo: SIGNUP });

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
    goToInfoStep();
  };

  const handleResend = async () => {
    setIsResending(true);

    // TODO: Implement actual resend API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    toast.success(t("resendSuccess"));
    setCountdown(COUNTDOWN_SECONDS);
    setCanResend(false);
    setIsResending(false);
    setOtp("");
  };

  const handleOtpChange = (value: string) => {
    setOtp(value);
  };

  const handleChangeEmail = () => {
    goToEmailStep();
  };

  if (!hasEmail) return null;

  return (
    <AuthStepLayout
      icon={
        <AuthIcon
          Icon={ShieldCheck}
          variant="green"
          shape="circle"
          size="lg"
          animated
        />
      }
      title={t("title")}
      description={t("description")}
      email={email}
      onBack={handleChangeEmail}
      backDisabled={isVerifying}
      ghostComponents={
        <>
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
      }
    >
      <OtpInputGroup
        value={otp}
        onChange={handleOtpChange}
        disabled={isResending}
        isVerifying={isVerifying}
      />

      <OtpInstruction />

      <ResendButton
        countdown={countdown}
        canResend={canResend}
        isResending={isResending}
        isProcessing={isVerifying}
        onResend={handleResend}
        onTryOther={handleChangeEmail}
        labels={{
          resend: t("button.resend"),
          resendIn: t("button.resendIn", { seconds: "{seconds}" }),
          sending: t("button.sending"),
          tryOther: t("button.changeEmail")
        }}
      />
    </AuthStepLayout>
  );
};

export default OtpStepMain;
