export type LoginStep = "email" | "password";

export interface LoginState {
  step: LoginStep;
  email: string;
}

export interface LoginActions {
  setEmail: (email: string) => void;
  goToPasswordStep: (email: string) => void;
  goToEmailStep: () => void;
  reset: () => void;
}

export type LoginStore = LoginState & LoginActions;
