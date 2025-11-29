"use client";

// components
import EmailStepMain from "../EmailStepMain";
import PasswordStepMain from "../PasswordStepMain";
// stores
import { useLoginStore } from "@/stores";

const LoginStepSwitch = () => {
  const step = useLoginStore((state) => state.step);

  if (step === "password") {
    return <PasswordStepMain />;
  }

  return <EmailStepMain />;
};

export default LoginStepSwitch;
