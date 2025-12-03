"use client";

// libs
import { useCallback } from "react";
import { useTranslations } from "next-intl";
// components
import AuthStepLayout from "@/components/AuthStepLayout";
import ResendButton from "@/components/ResendButton";
import MagicLinkIcon from "@/components/MagicLinkIcon";
import MagicLinkInstructions from "../../components/MagicLinkInstructions";
// ghosts
import CountdownEffect from "@/ghosts/CountdownEffect";
// stores
import { useForgotPasswordStore } from "@/stores";
// hooks
import { useEmailGuard } from "@/hooks";
import { useMagicLink } from "../../hooks/useMagicLink";

const MagicLinkStepMain = () => {
  const t = useTranslations("forgotPassword.form.magicLink");
  const email = useForgotPasswordStore((state) => state.email);
  const goToOptionsStep = useForgotPasswordStore(
    (state) => state.goToOptionsStep
  );

  const { hasEmail } = useEmailGuard({ email });

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

  if (!hasEmail) return null;

  return (
    <AuthStepLayout
      icon={<MagicLinkIcon />}
      title={t("title")}
      description={t("description")}
      email={email}
      onBack={handleBack}
      ghostComponents={
        <CountdownEffect
          countdown={countdown}
          setCountdown={setCountdown}
          setCanResend={setCanResend}
        />
      }
    >
      <MagicLinkInstructions />

      <ResendButton
        countdown={countdown}
        canResend={canResend}
        isResending={isResending}
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

export default MagicLinkStepMain;
