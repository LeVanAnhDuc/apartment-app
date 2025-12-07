"use client";

import { useEffect } from "react";

const AutoVerifyEffect = ({
  otpValue,
  otpLength,
  onVerify
}: {
  otpValue: string;
  otpLength: number;
  onVerify: (otp: string) => void;
}) => {
  useEffect(() => {
    if (otpValue.length === otpLength) {
      onVerify(otpValue);
    }
  }, [otpValue, otpLength, onVerify]);

  return null;
};

export default AutoVerifyEffect;
