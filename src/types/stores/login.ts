export type LoginStep = "email" | "password" | "alternative";

export interface LoginState {
  step: LoginStep;
  email: string;
}

export interface LoginActions {
  setEmail: (email: string) => void;
  goToPasswordStep: (email: string) => void;
  goToAlternativeStep: () => void;
  goToEmailStep: () => void;
  reset: () => void;
}

export type LoginStore = LoginState & LoginActions;
