import type { SignupInfoFormValues } from "@/types/Signup";

export type SignupStep = "email" | "otp" | "info";

export type SignupState = {
  step: SignupStep;
  email: string;
  formData: SignupInfoFormValues | null;
};

export type SignupActions = {
  setEmail: (email: string) => void;
  goToOtpStep: (email: string) => void;
  goToInfoStep: () => void;
  goToEmailStep: () => void;
  reset: () => void;
};

export type SignupStore = SignupState & SignupActions;
