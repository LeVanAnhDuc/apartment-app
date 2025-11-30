"use client";

// libs
import { useState, useEffect, useCallback } from "react";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { toast } from "sonner";
// components
import BackButton from "../../components/BackButton";
import EmailBadge from "@/components/EmailBadge";
import AuthFooter from "@/components/AuthFooter";
import MagicLinkIcon from "../../components/MagicLinkIcon";
import MagicLinkInstructions from "../../components/MagicLinkInstructions";
import MagicLinkResendButton from "../../components/MagicLinkResendButton";
// stores
import { useLoginStore } from "@/stores";

const COUNTDOWN_SECONDS = 60;

const MagicLinkStepMain = () => {
  const t = useTranslations("login.form.magicLink");
  const email = useLoginStore((state) => state.email);
  const goToAlternativeStep = useLoginStore(
    (state) => state.goToAlternativeStep
  );

  const [countdown, setCountdown] = useState(COUNTDOWN_SECONDS);
  const [canResend, setCanResend] = useState(false);
  const [isResending, setIsResending] = useState(false);

  useEffect(() => {
    if (countdown > 0) {
      const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
      return () => clearTimeout(timer);
    }
    setCanResend(true);
  }, [countdown]);

  const handleResend = useCallback(async () => {
    setIsResending(true);

    // TODO: Implement actual resend API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    toast.success(t("resendSuccess"));
    setCountdown(COUNTDOWN_SECONDS);
    setCanResend(false);
    setIsResending(false);
  }, [t]);

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
          <BackButton onClick={goToAlternativeStep} />

          <div className="mb-8 text-center">
            <MagicLinkIcon />

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

          <MagicLinkInstructions />

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="space-y-3"
          >
            <MagicLinkResendButton
              countdown={countdown}
              canResend={canResend}
              isResending={isResending}
              onResend={handleResend}
            />

            <div className="text-center">
              <button
                type="button"
                onClick={goToAlternativeStep}
                className="text-primary hover:text-primary/80 text-sm transition-colors duration-200 hover:underline"
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

export default MagicLinkStepMain;
