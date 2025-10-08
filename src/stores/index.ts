// libs
import { create } from "zustand";
// types
import type { AuthStore } from "@/types/stores";
// slices
import createAuthSlice from "./slices/auth";

export const authStore = create<AuthStore>()((...props) => ({
  ...createAuthSlice(...props)
}));
