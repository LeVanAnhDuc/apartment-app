export type ResetPasswordState = {
  email: string;
  token: string;
};

export type ResetPasswordActions = {
  setCredentials: (email: string, token: string) => void;
  reset: () => void;
};

export type ResetPasswordStore = ResetPasswordState & ResetPasswordActions;
