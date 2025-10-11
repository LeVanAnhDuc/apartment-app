// libs
import { toast } from "sonner";
import { jwtDecode } from "jwt-decode";
// stores
import { authStoreState } from "@/stores";

export const confirmErrorToast = (message: string) => {
  toast.error(message, {
    duration: Infinity,
    action: {
      label: "OK",
      onClick: () => {}
    }
  });
};

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
