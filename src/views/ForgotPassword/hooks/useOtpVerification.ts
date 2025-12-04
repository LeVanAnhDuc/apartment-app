"use client";

// libs
import { useState, useCallback } from "react";
import { toast } from "sonner";
import { useTranslations } from "next-intl";
// stores
import { useForgotPasswordStore, useResetPasswordStore } from "@/stores";
// services
import { useVerifyOtpMutation, useResendOtpMutation } from "@/services/auths";
// others
import CONSTANTS from "@/constants";
import { useRouter } from "@/i18n/navigation";

const COUNTDOWN_SECONDS = 60;
const OTP_LENGTH = 6;
const { RESET_PASSWORD } = CONSTANTS.ROUTES;

export const useOtpVerification = () => {
  const router = useRouter();
  const t = useTranslations("forgotPassword.form.otp");
  const tMessage = useTranslations("forgotPassword.message");
  const email = useForgotPasswordStore((state) => state.email);
  const setResetPasswordCredentials = useResetPasswordStore(
    (state) => state.setCredentials
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
            setResetPasswordCredentials(email, otp);
            router.push(RESET_PASSWORD);
          },
          onError: () => {
            toast.error(tMessage("error.invalidOtp"));
            setOtpValue("");
          }
        }
      );
    },
    [email, verifyOtpMutation, setResetPasswordCredentials, router, tMessage]
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
