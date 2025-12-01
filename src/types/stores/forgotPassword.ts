export type ForgotPasswordStep = "options" | "otp" | "newPassword";

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
  goToNewPasswordStep: () => void;
  reset: () => void;
}

export type ForgotPasswordStore = ForgotPasswordState & ForgotPasswordActions;
