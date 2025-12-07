// libs
import { create } from "zustand";
// types
import type { AuthStore, ContactAdminStore } from "@/types/stores";
import type { ForgotPasswordStore } from "@/types/stores/forgotPassword";
import type { ResetPasswordStore } from "@/types/stores/resetPassword";
// slices
import createAuthSlice from "./slices/auth";
import createForgotPasswordSlice from "./slices/forgotPassword";
import createResetPasswordSlice from "./slices/resetPassword";
import createContactAdminSlice from "./slices/contactAdmin";

export const useAuthStore = create<AuthStore>()((...props) => ({
  ...createAuthSlice(...props)
}));

export const useForgotPasswordStore = create<ForgotPasswordStore>()(
  (...props) => ({
    ...createForgotPasswordSlice(...props)
  })
);

export const useResetPasswordStore = create<ResetPasswordStore>()(
  (...props) => ({
    ...createResetPasswordSlice(...props)
  })
);

export const useContactAdminStore = create<ContactAdminStore>()((...props) => ({
  ...createContactAdminSlice(...props)
}));

export const authStoreState = useAuthStore.getState;
