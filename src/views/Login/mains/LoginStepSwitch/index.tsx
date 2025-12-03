"use client";

// components
import EmailStepMain from "../EmailStepMain";
import PasswordStepMain from "../PasswordStepMain";
import AlternativeLoginMain from "../AlternativeLoginMain";
import OtpStepMain from "../OtpStepMain";
import MagicLinkStepMain from "../MagicLinkStepMain";
// stores
import { useLoginStore } from "@/stores";

const LoginStepSwitch = () => {
  const step = useLoginStore((state) => state.step);

  if (step === "magicLink") return <MagicLinkStepMain />;

  if (step === "otp") return <OtpStepMain />;

  if (step === "alternative") return <AlternativeLoginMain />;

  if (step === "password") return <PasswordStepMain />;

  return <EmailStepMain />;
};

export default LoginStepSwitch;
