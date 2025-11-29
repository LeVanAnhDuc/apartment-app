// libs
import { create } from "zustand";
// types
import type { AuthStore } from "@/types/stores";
import type { LoginStore } from "@/types/stores/login";
// slices
import createAuthSlice from "./slices/auth";
import createLoginSlice from "./slices/login";

export const useAuthStore = create<AuthStore>()((...props) => ({
  ...createAuthSlice(...props)
}));

export const useLoginStore = create<LoginStore>()((...props) => ({
  ...createLoginSlice(...props)
}));

export const authStoreState = useAuthStore.getState;
