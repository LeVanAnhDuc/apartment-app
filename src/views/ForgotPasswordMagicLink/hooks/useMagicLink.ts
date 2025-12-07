"use client";

// libs
import { useState } from "react";
import { toast } from "sonner";
// services
import { useRequestOtpMutation } from "@/services/auths";

const COUNTDOWN_SECONDS = 60;

export const useMagicLink = ({
  email,
  messages
}: {
  email: string;
  messages: {
    resendSuccess: string;
    errorGeneric: string;
  };
}) => {
  const [countdown, setCountdown] = useState(COUNTDOWN_SECONDS);
  const [canResend, setCanResend] = useState(false);

  // TODO: Replace with actual magic link mutation when API is ready
  const { mutate: sendMagicLinkMutation, isPending: isResending } =
    useRequestOtpMutation();

  const handleResend = () => {
    sendMagicLinkMutation(
      { email },
      {
        onSuccess: () => {
          toast.success(messages.resendSuccess);
          setCountdown(COUNTDOWN_SECONDS);
          setCanResend(false);
        },
        onError: () => {
          toast.error(messages.errorGeneric);
        }
      }
    );
  };

  return {
    countdown,
    canResend,
    isResending,
    handleResend,
    setCountdown,
    setCanResend
  };
};
