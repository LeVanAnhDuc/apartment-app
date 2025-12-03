// libs
import { create } from "zustand";
// types
import type { AuthStore, ContactAdminStore } from "@/types/stores";
import type { LoginStore } from "@/types/stores/login";
import type { ForgotPasswordStore } from "@/types/stores/forgotPassword";
// slices
import createAuthSlice from "./slices/auth";
import createLoginSlice from "./slices/login";
import createForgotPasswordSlice from "./slices/forgotPassword";
import createContactAdminSlice from "./slices/contactAdmin";

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

export const useContactAdminStore = create<ContactAdminStore>()((...props) => ({
  ...createContactAdminSlice(...props)
}));

export const authStoreState = useAuthStore.getState;
