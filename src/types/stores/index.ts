// types
import type { IToken } from "../token";

export interface UserAttributes {
  _id: string;
  email: string;
  fullName: string;
  phone: string;
  userName: string;
  dateOfBirth: string;
  gender: string;
  avatar: string;
  address: string;
  createdAt: string;
  updatedAt: string;
}

export interface AuthState extends Partial<IToken> {
  userAttributes?: UserAttributes;
}

export interface AuthActions {
  setTokens: (tokens: IToken) => void;
  clearTokens: () => void;
}

export type AuthStore = AuthState & AuthActions;
