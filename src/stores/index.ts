// libs
import { create } from "zustand";
// types
import type { AuthStore, ContactAdminStore } from "@/types/stores";
// slices
import createAuthSlice from "./slices/auth";
import createContactAdminSlice from "./slices/contactAdmin";

export const useAuthStore = create<AuthStore>()((...props) => ({
  ...createAuthSlice(...props)
}));

export const useContactAdminStore = create<ContactAdminStore>()((...props) => ({
  ...createContactAdminSlice(...props)
}));

export const authStoreState = useAuthStore.getState;
