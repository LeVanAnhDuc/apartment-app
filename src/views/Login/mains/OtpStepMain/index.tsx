"use client";

// libs
import { useState, useCallback } from "react";
import { useTranslations } from "next-intl";
import { toast } from "sonner";
import { Lock } from "lucide-react";
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
import { useLoginStore } from "@/stores";
// hooks
import { useEmailGuard } from "@/hooks";
// others
import CONSTANTS from "@/constants";

const OTP_LENGTH = 6;
const COUNTDOWN_SECONDS = 60;
const { LOGIN } = CONSTANTS.ROUTES;

const OtpStepMain = () => {
  const t = useTranslations("login.form.otp");
  const email = useLoginStore((state) => state.email);
  const goToAlternativeStep = useLoginStore(
    (state) => state.goToAlternativeStep
  );

  const { hasEmail } = useEmailGuard({ email, redirectTo: LOGIN });

  const [otp, setOtp] = useState("");
  const [countdown, setCountdown] = useState(COUNTDOWN_SECONDS);
  const [canResend, setCanResend] = useState(false);
  const [isResending, setIsResending] = useState(false);
  const [isVerifying, setIsVerifying] = useState(false);

  const handleVerify = useCallback(async () => {
    if (otp.length !== OTP_LENGTH) return;

    setIsVerifying(true);

    // TODO: Implement actual verification API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsVerifying(false);
    // onVerify(otp) will be called here after API integration
  }, [otp]);

  const handleResend = useCallback(async () => {
    setIsResending(true);

    // TODO: Implement actual resend API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    toast.success(t("resendSuccess"));
    setCountdown(COUNTDOWN_SECONDS);
    setCanResend(false);
    setIsResending(false);
    setOtp("");
  }, [t]);

  const handleOtpChange = useCallback((value: string) => {
    setOtp(value);
  }, []);

  if (!hasEmail) return null;

  return (
    <AuthStepLayout
      icon={
        <AuthIcon
          Icon={Lock}
          variant="blue"
          shape="circle"
          size="lg"
          animated
        />
      }
      title={t("title")}
      description={t("description")}
      email={email}
      onBack={goToAlternativeStep}
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
        onTryOther={goToAlternativeStep}
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
