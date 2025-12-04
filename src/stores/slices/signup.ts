// types
import type { SignupState, SignupStore } from "@/types/stores/signup";
import type { StateCreator } from "zustand";

const initialState: SignupState = {
  step: "email",
  email: "",
  formData: null
};

const createSignupSlice: StateCreator<SignupStore> = (set) => ({
  ...initialState,

  setEmail: (email: string) => set({ email }),

  goToOtpStep: (email: string) => set({ email, step: "otp" }),

  goToInfoStep: () => set({ step: "info" }),

  goToEmailStep: () => set({ step: "email" }),

  reset: () => set(initialState)
});

export default createSignupSlice;
