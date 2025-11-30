"use client";

// components
import EmailStepMain from "../EmailStepMain";
import PasswordStepMain from "../PasswordStepMain";
import AlternativeLoginMain from "../AlternativeLoginMain";
// stores
import { useLoginStore } from "@/stores";

const LoginStepSwitch = () => {
  const step = useLoginStore((state) => state.step);

  if (step === "alternative") {
    return <AlternativeLoginMain />;
  }

  if (step === "password") {
    return <PasswordStepMain />;
  }

  return <EmailStepMain />;
};

export default LoginStepSwitch;
