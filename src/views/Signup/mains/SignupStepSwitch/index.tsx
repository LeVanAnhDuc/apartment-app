"use client";

// components
import EmailStepMain from "../EmailStepMain";
import OtpStepMain from "../OtpStepMain";
import InfoStepMain from "../InfoStepMain";
// stores
import { useSignupStore } from "@/stores";

const SignupStepSwitch = () => {
  const step = useSignupStore((state) => state.step);

  if (step === "otp") return <OtpStepMain />;

  if (step === "info") return <InfoStepMain />;

  return <EmailStepMain />;
};

export default SignupStepSwitch;
