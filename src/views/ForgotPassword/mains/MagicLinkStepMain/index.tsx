"use client";

// libs
import { useCallback } from "react";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
// components
import BackButton from "@/views/Login/components/BackButton";
import EmailBadge from "@/components/EmailBadge";
import AuthFooter from "@/components/AuthFooter";
import MagicLinkIcon from "../../components/MagicLinkIcon";
import MagicLinkInstructions from "../../components/MagicLinkInstructions";
import ResendMagicLinkButton from "../../components/ResendMagicLinkButton";
// ghosts
import MagicLinkCountdownEffect from "../../ghosts/MagicLinkCountdownEffect";
// stores
import { useForgotPasswordStore } from "@/stores";
// hooks
import { useMagicLink } from "../../hooks/useMagicLink";

const MagicLinkStepMain = () => {
  const t = useTranslations("forgotPassword.form.magicLink");
  const email = useForgotPasswordStore((state) => state.email);
  const goToOptionsStep = useForgotPasswordStore(
    (state) => state.goToOptionsStep
  );

  const {
    countdown,
    canResend,
    isResending,
    handleResend,
    setCountdown,
    setCanResend
  } = useMagicLink();

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
          <BackButton onClick={handleBack} />

          <div className="mb-8 text-center">
            <div className="mb-4 flex justify-center">
              <MagicLinkIcon />
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

          <MagicLinkInstructions />

          <ResendMagicLinkButton
            countdown={countdown}
            canResend={canResend}
            isResending={isResending}
            onResend={handleResend}
            onTryOther={handleBack}
          />
        </div>

        <AuthFooter />
      </motion.div>

      <MagicLinkCountdownEffect
        countdown={countdown}
        setCountdown={setCountdown}
        setCanResend={setCanResend}
      />
    </main>
  );
};

export default MagicLinkStepMain;
