// types
import type { Token } from "../token";

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

export interface AuthState extends Partial<Token> {
  userAttributes?: UserAttributes;
}

export interface AuthActions {
  setTokens: (tokens: Token) => void;
  clearStorages: () => void;
}

export type AuthStore = AuthState & AuthActions;
