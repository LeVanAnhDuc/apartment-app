"use client";

import { useEffect } from "react";

interface CountdownEffectProps {
  countdown: number;
  setCountdown: (value: number | ((prev: number) => number)) => void;
  setCanResend: (value: boolean) => void;
}

const CountdownEffect = ({
  countdown,
  setCountdown,
  setCanResend
}: CountdownEffectProps) => {
  useEffect(() => {
    if (countdown > 0) {
      const timer = setTimeout(() => setCountdown((prev) => prev - 1), 1000);
      return () => clearTimeout(timer);
    }
    setCanResend(true);
  }, [countdown, setCountdown, setCanResend]);

  return null;
};

export default CountdownEffect;
