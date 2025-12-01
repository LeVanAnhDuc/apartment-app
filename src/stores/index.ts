// libs
import { create } from "zustand";
// types
import type { AuthStore } from "@/types/stores";
import type { LoginStore } from "@/types/stores/login";
import type { ForgotPasswordStore } from "@/types/stores/forgotPassword";
// slices
import createAuthSlice from "./slices/auth";
import createLoginSlice from "./slices/login";
import createForgotPasswordSlice from "./slices/forgotPassword";

export const useAuthStore = create<AuthStore>()((...props) => ({
  ...createAuthSlice(...props)
}));

export const useLoginStore = create<LoginStore>()((...props) => ({
  ...createLoginSlice(...props)
}));

export const useForgotPasswordStore = create<ForgotPasswordStore>()(
  (...props) => ({
    ...createForgotPasswordSlice(...props)
  })
);

export const authStoreState = useAuthStore.getState;
