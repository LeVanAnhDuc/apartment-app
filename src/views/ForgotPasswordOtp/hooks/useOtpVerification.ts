"use client";

// libs
import { useState } from "react";
import { toast } from "sonner";
// services
import { useVerifyOtpMutation, useResendOtpMutation } from "@/services/auths";
// others
import CONSTANTS from "@/constants";
import { useRouter } from "@/i18n/navigation";

const COUNTDOWN_SECONDS = 60;
const OTP_LENGTH = 6;
const { RESET_PASSWORD } = CONSTANTS.ROUTES;

export const useOtpVerification = ({
  email,
  messages
}: {
  email: string;
  messages: {
    resendSuccess: string;
    errorInvalidOtp: string;
    errorGeneric: string;
  };
}) => {
  const router = useRouter();

  const [otpValue, setOtpValue] = useState("");
  const [countdown, setCountdown] = useState(COUNTDOWN_SECONDS);
  const [canResend, setCanResend] = useState(false);

  const { mutate: verifyOtpMutation, isPending: isVerifying } =
    useVerifyOtpMutation();
  const { mutate: resendOtpMutation, isPending: isResending } =
    useResendOtpMutation();

  const verifyOtp = (otp: string) => {
    if (otp.length !== OTP_LENGTH) return;

    verifyOtpMutation(
      { email, otp },
      {
        onSuccess: () => {
          // Navigate to reset password with verified OTP as token
          const encodedEmail = encodeURIComponent(email);
          const encodedToken = encodeURIComponent(otp);
          router.push(
            `${RESET_PASSWORD}?email=${encodedEmail}&token=${encodedToken}`
          );
        },
        onError: () => {
          toast.error(messages.errorInvalidOtp);
          setOtpValue("");
        }
      }
    );
  };

  const handleResend = () => {
    resendOtpMutation(email, {
      onSuccess: () => {
        toast.success(messages.resendSuccess);
        setCountdown(COUNTDOWN_SECONDS);
        setCanResend(false);
        setOtpValue("");
      },
      onError: () => {
        toast.error(messages.errorGeneric);
      }
    });
  };

  const handleOtpChange = (value: string) => {
    setOtpValue(value);
  };

  return {
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
  };
};
