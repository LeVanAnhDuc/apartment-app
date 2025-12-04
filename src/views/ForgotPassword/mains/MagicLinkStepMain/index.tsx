"use client";

// libs
import { useTranslations } from "next-intl";
import { Mail } from "lucide-react";
// components
import AuthStepLayout from "@/components/AuthStepLayout";
import ResendButton from "@/components/ResendButton";
import AuthIcon from "@/components/AuthIcon";
import MagicLinkInstructions from "../../components/MagicLinkInstructions";
// ghosts
import CountdownEffect from "@/ghosts/CountdownEffect";
// stores
import { useForgotPasswordStore } from "@/stores";
// hooks
import { useEmailGuard } from "@/hooks";
import { useMagicLink } from "../../hooks/useMagicLink";
// others
import CONSTANTS from "@/constants";

const { LOGIN } = CONSTANTS.ROUTES;

const MagicLinkStepMain = () => {
  const t = useTranslations("forgotPassword.form.magicLink");
  const email = useForgotPasswordStore((state) => state.email);
  const goToOptionsStep = useForgotPasswordStore(
    (state) => state.goToOptionsStep
  );

  const { hasEmail } = useEmailGuard({ email, redirectTo: LOGIN });

  const {
    countdown,
    canResend,
    isResending,
    handleResend,
    setCountdown,
    setCanResend
  } = useMagicLink();

  const handleBack = () => {
    goToOptionsStep(email);
  };

  if (!hasEmail) return null;

  return (
    <AuthStepLayout
      icon={
        <AuthIcon
          Icon={Mail}
          variant="orange"
          shape="circle"
          size="lg"
          animated
        />
      }
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
