"use client";

// components
import OptionsStepMain from "../OptionsStepMain";
import OtpStepMain from "../OtpStepMain";
import NewPasswordStepMain from "../NewPasswordStepMain";
// stores
import { useForgotPasswordStore } from "@/stores";

const ForgotPasswordStepSwitch = () => {
  const step = useForgotPasswordStore((state) => state.step);

  if (step === "newPassword") {
    return <NewPasswordStepMain />;
  }

  if (step === "otp") {
    return <OtpStepMain />;
  }

  return <OptionsStepMain />;
};

export default ForgotPasswordStepSwitch;
