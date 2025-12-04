// types
import type {
  ResetPasswordState,
  ResetPasswordStore
} from "@/types/stores/resetPassword";
import type { StateCreator } from "zustand";

const initialState: ResetPasswordState = {
  email: "",
  token: ""
};

const createResetPasswordSlice: StateCreator<ResetPasswordStore> = (set) => ({
  ...initialState,

  setCredentials: (email: string, token: string) => set({ email, token }),

  reset: () => set(initialState)
});

export default createResetPasswordSlice;
