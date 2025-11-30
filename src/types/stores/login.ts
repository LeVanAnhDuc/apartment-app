export type LoginStep =
  | "email"
  | "password"
  | "alternative"
  | "otp"
  | "magicLink";

export interface LoginState {
  step: LoginStep;
  email: string;
}

export interface LoginActions {
  setEmail: (email: string) => void;
  goToPasswordStep: (email: string) => void;
  goToAlternativeStep: () => void;
  goToOtpStep: () => void;
  goToMagicLinkStep: () => void;
  goToEmailStep: () => void;
  reset: () => void;
}

export type LoginStore = LoginState & LoginActions;
