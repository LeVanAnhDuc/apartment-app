// libs
import { toast } from "sonner";
import { jwtDecode } from "jwt-decode";
// types
import type { Locale } from "next-intl";
// stores
import { authStoreState } from "@/stores";
// i18n
import { defaultLocale, locales } from "@/i18n/config";

export const confirmErrorToast = (message: string): Promise<void> =>
  new Promise((resolve) => {
    toast.error(message, {
      duration: Infinity,
      action: {
        label: "OK",
        onClick: () => resolve()
      }
    });
  });

export const errorToast = (message: string) => toast.error(message);

export const getAuthorizationHeader = () => {
  const { idToken } = authStoreState();

  return idToken ? `Bearer ${idToken}` : undefined;
};

export const decodeToken = <T>(token: string) => {
  try {
    return jwtDecode<T>(token);
  } catch {
    return undefined;
  }
};

export const getCurrentLocale = (): Locale => {
  try {
    const pathname = window.location.pathname;
    const localeMatch = pathname.match(/\/([^/]+)/);
    const locale = localeMatch?.[1] as Locale;

    return locales.includes(locale) ? locale : defaultLocale;
  } catch {
    return defaultLocale;
  }
};
