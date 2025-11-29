// types
import type { LoginState, LoginStore } from "@/types/stores/login";
import type { StateCreator } from "zustand";

const initialState: LoginState = {
  step: "email",
  email: ""
};

const createLoginSlice: StateCreator<LoginStore> = (set) => ({
  ...initialState,

  setEmail: (email: string) => set({ email }),

  goToPasswordStep: (email: string) => set({ email, step: "password" }),

  goToEmailStep: () => set({ step: "email" }),

  reset: () => set(initialState)
});

export default createLoginSlice;
