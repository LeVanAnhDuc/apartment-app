"use client";

// libs
import { toast } from "sonner";
// hooks
import { useCountdown } from "@/hooks";
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
  const {
    seconds: countdown,
    isFinished: canResend,
    reset: resetCountdown
  } = useCountdown(COUNTDOWN_SECONDS);

  // TODO: Replace with actual magic link mutation when API is ready
  const { mutate: sendMagicLinkMutation, isPending: isResending } =
    useRequestOtpMutation();

  const handleResend = () => {
    sendMagicLinkMutation(
      { email },
      {
        onSuccess: () => {
          toast.success(messages.resendSuccess);
          resetCountdown();
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
    handleResend
  };
};
