// types
import type { ContactAdminFormValues } from "@/types/ContactAdmin";

export type ContactAdminStep = "form" | "success";

export interface ContactAdminState {
  step: ContactAdminStep;
  email: string;
  isEmailFromRedirect: boolean;
  formData: ContactAdminFormValues | null;
  ticketNumber: string | null;
  referrerPath: string | null;
}

export interface ContactAdminActions {
  setEmail: (email: string, isFromRedirect: boolean) => void;
  setReferrerPath: (path: string) => void;
  goToSuccessStep: (
    formData: ContactAdminFormValues,
    ticketNumber: string
  ) => void;
  reset: () => void;
}

export type ContactAdminStore = ContactAdminState & ContactAdminActions;
