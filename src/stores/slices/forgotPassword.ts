// types
import type {
  ForgotPasswordState,
  ForgotPasswordStore
} from "@/types/stores/forgotPassword";
import type { StateCreator } from "zustand";

const initialState: ForgotPasswordState = {
  step: "options",
  email: "",
  otp: ""
};

const createForgotPasswordSlice: StateCreator<ForgotPasswordStore> = (set) => ({
  ...initialState,

  setEmail: (email: string) => set({ email }),

  setOtp: (otp: string) => set({ otp }),

  goToOptionsStep: (email: string) => set({ email, step: "options" }),

  goToOtpStep: () => set({ step: "otp" }),

  goToMagicLinkStep: () => set({ step: "magicLink" }),

  goToNewPasswordStep: () => set({ step: "newPassword" }),

  reset: () => set(initialState)
});

export default createForgotPasswordSlice;
