// libs
import type { StateCreator } from "zustand";
// types
import type { ContactAdminStore } from "@/types/stores";
import type { ContactAdminFormValues } from "@/types/ContactAdmin";

const initialState = {
  step: "form" as const,
  email: "",
  isEmailFromRedirect: false,
  formData: null,
  ticketNumber: null,
  referrerPath: null
};

const createContactAdminSlice: StateCreator<ContactAdminStore> = (set) => ({
  ...initialState,

  setEmail: (email: string, isFromRedirect: boolean) =>
    set({ email, isEmailFromRedirect: isFromRedirect }),

  setReferrerPath: (path: string) => set({ referrerPath: path }),

  goToSuccessStep: (formData: ContactAdminFormValues, ticketNumber: string) =>
    set({ step: "success", formData, ticketNumber }),

  reset: () => set(initialState)
});

export default createContactAdminSlice;
