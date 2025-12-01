"use client";

import { useEffect } from "react";

interface MagicLinkCountdownEffectProps {
  countdown: number;
  setCountdown: (value: number | ((prev: number) => number)) => void;
  setCanResend: (value: boolean) => void;
}

const MagicLinkCountdownEffect = ({
  countdown,
  setCountdown,
  setCanResend
}: MagicLinkCountdownEffectProps) => {
  useEffect(() => {
    if (countdown > 0) {
      const timer = setTimeout(() => setCountdown((prev) => prev - 1), 1000);
      return () => clearTimeout(timer);
    }
    setCanResend(true);
  }, [countdown, setCountdown, setCanResend]);

  return null;
};

export default MagicLinkCountdownEffect;
