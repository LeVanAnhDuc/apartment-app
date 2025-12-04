export type ForgotPasswordStep = "options" | "otp" | "magicLink";

export interface ForgotPasswordState {
  step: ForgotPasswordStep;
  email: string;
  otp: string;
}

export interface ForgotPasswordActions {
  setEmail: (email: string) => void;
  setOtp: (otp: string) => void;
  goToOptionsStep: (email: string) => void;
  goToOtpStep: () => void;
  goToMagicLinkStep: () => void;
  reset: () => void;
}

export type ForgotPasswordStore = ForgotPasswordState & ForgotPasswordActions;
