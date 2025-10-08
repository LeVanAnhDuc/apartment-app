// types
import type { AuthState, AuthStore, UserAttributes } from "@/types/stores";
import type { IToken } from "@/types/token";
import type { StateCreator } from "zustand";
// services
import { tokenService } from "@/services/token.service";

const initialState: AuthState = {
  accessToken: undefined,
  idToken: undefined,
  userAttributes: undefined
};

const createAuthSlice: StateCreator<AuthStore> = (set) => ({
  ...initialState,

  setTokens: (tokens: IToken) => {
    const { idToken, accessToken } = tokens;
    const userAttributes =
      tokenService.getDecodedIdToken<UserAttributes>(idToken);

    set({
      idToken,
      accessToken,
      userAttributes
    });
  },

  clearTokens: () => {
    set({
      idToken: undefined,
      accessToken: undefined,
      userAttributes: undefined
    });
  }
});

export default createAuthSlice;
