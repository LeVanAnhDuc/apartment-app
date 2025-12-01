"use client";

// libs
import { useCallback } from "react";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
// components
import BackButton from "@/views/Login/components/BackButton";
import EmailBadge from "@/components/EmailBadge";
import AuthFooter from "@/components/AuthFooter";
import ForgotPasswordIcon from "../../components/ForgotPasswordIcon";
import OtpInput from "../../components/OtpInput";
import OtpVerifyingStatus from "../../components/OtpVerifyingStatus";
import OtpInstructionBox from "../../components/OtpInstructionBox";
import ResendOtpButton from "../../components/ResendOtpButton";
// ghosts
import CountdownEffect from "../../ghosts/CountdownEffect";
import AutoVerifyEffect from "../../ghosts/AutoVerifyEffect";
// stores
import { useForgotPasswordStore } from "@/stores";
// hooks
import { useOtpVerification } from "../../hooks/useOtpVerification";

const OtpStepMain = () => {
  const t = useTranslations("forgotPassword.form.otp");
  const email = useForgotPasswordStore((state) => state.email);
  const goToOptionsStep = useForgotPasswordStore(
    (state) => state.goToOptionsStep
  );

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

  return (
    <main className="auth-background flex min-h-screen items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.3 }}
        className="w-full max-w-md"
      >
        <div className="auth-card relative p-8 md:p-10">
          <BackButton onClick={handleBack} disabled={isVerifying} />

          <div className="mb-8 text-center">
            <div className="mb-4 flex justify-center">
              <ForgotPasswordIcon variant="lock" />
            </div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h1 className="text-foreground mb-2 text-2xl font-medium">
                {t("title")}
              </h1>
              <p className="text-muted-foreground mb-4">{t("description")}</p>
            </motion.div>
          </div>

          <EmailBadge email={email} />

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

          <ResendOtpButton
            countdown={countdown}
            canResend={canResend}
            isResending={isResending}
            isVerifying={isVerifying}
            onResend={handleResend}
            onTryOther={handleBack}
          />
        </div>

        <AuthFooter />
      </motion.div>

      {/* Ghost Components - Effect logic only, no UI */}
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
    </main>
  );
};

export default OtpStepMain;
