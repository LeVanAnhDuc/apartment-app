"use client";

import { useEffect } from "react";

interface AutoVerifyEffectProps {
  otpValue: string;
  otpLength: number;
  onVerify: (otp: string) => void;
}

const AutoVerifyEffect = ({
  otpValue,
  otpLength,
  onVerify
}: AutoVerifyEffectProps) => {
  useEffect(() => {
    if (otpValue.length === otpLength) {
      onVerify(otpValue);
    }
  }, [otpValue, otpLength, onVerify]);

  return null;
};

export default AutoVerifyEffect;
