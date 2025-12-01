"use client";

// libs
import { useState, useCallback } from "react";
import { toast } from "sonner";
import { useTranslations } from "next-intl";
// stores
import { useForgotPasswordStore } from "@/stores";
// services
import { useVerifyOtpMutation, useResendOtpMutation } from "@/services/auths";

const COUNTDOWN_SECONDS = 60;
const OTP_LENGTH = 6;

export const useOtpVerification = () => {
  const t = useTranslations("forgotPassword.form.otp");
  const tMessage = useTranslations("forgotPassword.message");
  const email = useForgotPasswordStore((state) => state.email);
  const setOtp = useForgotPasswordStore((state) => state.setOtp);
  const goToNewPasswordStep = useForgotPasswordStore(
    (state) => state.goToNewPasswordStep
  );

  const [otpValue, setOtpValue] = useState("");
  const [countdown, setCountdown] = useState(COUNTDOWN_SECONDS);
  const [canResend, setCanResend] = useState(false);

  const { mutate: verifyOtpMutation, isPending: isVerifying } =
    useVerifyOtpMutation();
  const { mutate: resendOtpMutation, isPending: isResending } =
    useResendOtpMutation();

  const verifyOtp = useCallback(
    (otp: string) => {
      if (otp.length !== OTP_LENGTH) return;

      verifyOtpMutation(
        { email, otp },
        {
          onSuccess: () => {
            setOtp(otp);
            goToNewPasswordStep();
          },
          onError: () => {
            toast.error(tMessage("error.invalidOtp"));
            setOtpValue("");
          }
        }
      );
    },
    [email, verifyOtpMutation, setOtp, goToNewPasswordStep, tMessage]
  );

  const handleResend = useCallback(() => {
    resendOtpMutation(email, {
      onSuccess: () => {
        toast.success(t("resendSuccess"));
        setCountdown(COUNTDOWN_SECONDS);
        setCanResend(false);
        setOtpValue("");
      },
      onError: () => {
        toast.error(tMessage("error.generic"));
      }
    });
  }, [email, resendOtpMutation, t, tMessage]);

  const handleOtpChange = useCallback((value: string) => {
    setOtpValue(value);
  }, []);

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
