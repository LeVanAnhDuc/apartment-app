"use client";

// libs
import { useState, useEffect, useCallback } from "react";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { toast } from "sonner";
import { Lock } from "lucide-react";
// components
import BackButton from "../../components/BackButton";
import EmailBadge from "@/components/EmailBadge";
import AuthFooter from "@/components/AuthFooter";
import OtpInputGroup from "../../components/OtpInputGroup";
import OtpInstruction from "../../components/OtpInstruction";
import OtpResendButton from "../../components/OtpResendButton";
// stores
import { useLoginStore } from "@/stores";

const OTP_LENGTH = 6;
const COUNTDOWN_SECONDS = 60;

const OtpStepMain = () => {
  const t = useTranslations("login.form.otp");
  const email = useLoginStore((state) => state.email);
  const goToAlternativeStep = useLoginStore(
    (state) => state.goToAlternativeStep
  );

  const [otp, setOtp] = useState("");
  const [countdown, setCountdown] = useState(COUNTDOWN_SECONDS);
  const [canResend, setCanResend] = useState(false);
  const [isResending, setIsResending] = useState(false);
  const [isVerifying, setIsVerifying] = useState(false);

  useEffect(() => {
    if (countdown > 0) {
      const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
      return () => clearTimeout(timer);
    }
    setCanResend(true);
  }, [countdown]);

  const handleVerify = useCallback(async () => {
    if (otp.length !== OTP_LENGTH) return;

    setIsVerifying(true);

    // TODO: Implement actual verification API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsVerifying(false);
    // onVerify(otp) will be called here after API integration
  }, [otp]);

  useEffect(() => {
    if (otp.length === OTP_LENGTH) {
      handleVerify();
    }
  }, [otp, handleVerify]);

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
          <BackButton onClick={goToAlternativeStep} disabled={isVerifying} />

          <div className="mb-8 text-center">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 20,
                delay: 0.1
              }}
              className="mb-4 inline-flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-blue-600"
            >
              <Lock className="h-10 w-10 text-white" />
            </motion.div>

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

          <OtpInputGroup
            value={otp}
            onChange={handleOtpChange}
            disabled={isResending}
            isVerifying={isVerifying}
          />

          <OtpInstruction />

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="space-y-3"
          >
            <OtpResendButton
              countdown={countdown}
              canResend={canResend}
              isResending={isResending}
              disabled={isVerifying}
              onResend={handleResend}
            />

            <div className="text-center">
              <button
                type="button"
                onClick={goToAlternativeStep}
                disabled={isVerifying}
                className="text-primary hover:text-primary/80 text-sm transition-colors duration-200 hover:underline disabled:opacity-50"
              >
                {t("button.tryOther")}
              </button>
            </div>
          </motion.div>
        </div>

        <AuthFooter />
      </motion.div>
    </main>
  );
};

export default OtpStepMain;
