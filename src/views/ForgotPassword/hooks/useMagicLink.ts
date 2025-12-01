"use client";

// libs
import { useState, useCallback } from "react";
import { toast } from "sonner";
import { useTranslations } from "next-intl";
// stores
import { useForgotPasswordStore } from "@/stores";
// services
import { useRequestOtpMutation } from "@/services/auths";

const COUNTDOWN_SECONDS = 60;

export const useMagicLink = () => {
  const t = useTranslations("forgotPassword.form.magicLink");
  const tMessage = useTranslations("forgotPassword.message");
  const email = useForgotPasswordStore((state) => state.email);

  const [countdown, setCountdown] = useState(COUNTDOWN_SECONDS);
  const [canResend, setCanResend] = useState(false);

  // TODO: Replace with actual magic link mutation when API is ready
  const { mutate: sendMagicLinkMutation, isPending: isResending } =
    useRequestOtpMutation();

  const handleResend = useCallback(() => {
    sendMagicLinkMutation(
      { email },
      {
        onSuccess: () => {
          toast.success(t("resendSuccess"));
          setCountdown(COUNTDOWN_SECONDS);
          setCanResend(false);
        },
        onError: () => {
          toast.error(tMessage("error.generic"));
        }
      }
    );
  }, [email, sendMagicLinkMutation, t, tMessage]);

  return {
    countdown,
    canResend,
    isResending,
    handleResend,
    setCountdown,
    setCanResend
  };
};
