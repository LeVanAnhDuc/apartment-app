"use client";

// libs
import { useState, useCallback } from "react";
import { useTranslations } from "next-intl";
import { toast } from "sonner";
import { Mail } from "lucide-react";
// components
import AuthStepLayout from "@/components/AuthStepLayout";
import ResendButton from "@/components/ResendButton";
import AuthIcon from "@/components/AuthIcon";
import MagicLinkInstructions from "../../components/MagicLinkInstructions";
// ghosts
import CountdownEffect from "@/ghosts/CountdownEffect";
// stores
import { useLoginStore } from "@/stores";
// hooks
import { useEmailGuard } from "@/hooks";
// others
import CONSTANTS from "@/constants";

const COUNTDOWN_SECONDS = 60;
const { LOGIN } = CONSTANTS.ROUTES;

const MagicLinkStepMain = () => {
  const t = useTranslations("login.form.magicLink");
  const email = useLoginStore((state) => state.email);
  const goToAlternativeStep = useLoginStore(
    (state) => state.goToAlternativeStep
  );

  const { hasEmail } = useEmailGuard({ email, redirectTo: LOGIN });

  const [countdown, setCountdown] = useState(COUNTDOWN_SECONDS);
  const [canResend, setCanResend] = useState(false);
  const [isResending, setIsResending] = useState(false);

  const handleResend = useCallback(async () => {
    setIsResending(true);

    // TODO: Implement actual resend API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    toast.success(t("resendSuccess"));
    setCountdown(COUNTDOWN_SECONDS);
    setCanResend(false);
    setIsResending(false);
  }, [t]);

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
      onBack={goToAlternativeStep}
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

export default MagicLinkStepMain;
