"use client";

// components
import OptionsStepMain from "../OptionsStepMain";
import OtpStepMain from "../OtpStepMain";
import MagicLinkStepMain from "../MagicLinkStepMain";
// stores
import { useForgotPasswordStore } from "@/stores";
// hooks
import { useEmailGuard } from "@/hooks";
// others
import CONSTANTS from "@/constants";

const { LOGIN } = CONSTANTS.ROUTES;

const ForgotPasswordStepSwitch = () => {
  const step = useForgotPasswordStore((state) => state.step);
  const email = useForgotPasswordStore((state) => state.email);

  const { hasEmail } = useEmailGuard({ email, redirectTo: LOGIN });

  if (!hasEmail) return null;

  if (step === "magicLink") return <MagicLinkStepMain />;

  if (step === "otp") return <OtpStepMain />;

  return <OptionsStepMain />;
};

export default ForgotPasswordStepSwitch;
