"use client";

// libs
import { useEffect } from "react";

const AutoVerifyEffect = ({
  otpValue,
  otpLength,
  onVerify
}: {
  otpValue: string;
  otpLength: number;
  onVerify: () => void;
}) => {
  useEffect(() => {
    if (otpValue.length === otpLength) {
      onVerify();
    }
  }, [otpValue, otpLength, onVerify]);

  return null;
};

export default AutoVerifyEffect;
