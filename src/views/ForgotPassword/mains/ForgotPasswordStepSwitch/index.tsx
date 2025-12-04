"use client";

// components
import OptionsStepMain from "../OptionsStepMain";
import OtpStepMain from "../OtpStepMain";
import MagicLinkStepMain from "../MagicLinkStepMain";
// stores
import { useForgotPasswordStore } from "@/stores";

const ForgotPasswordStepSwitch = () => {
  const step = useForgotPasswordStore((state) => state.step);

  if (step === "magicLink") return <MagicLinkStepMain />;

  if (step === "otp") return <OtpStepMain />;

  return <OptionsStepMain />;
};

export default ForgotPasswordStepSwitch;
