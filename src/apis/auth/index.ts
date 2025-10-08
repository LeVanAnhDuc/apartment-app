// libs
import { useMutation } from "@tanstack/react-query";
// types
import type { LoginFormValues, LoginSuccessResponse } from "@/types/Login";
// services
import { login } from "@/services/auth.service";
// others
import CONSTANTS from "@/constants";

const { ACCESS_TOKEN, REFRESH_TOKEN } = CONSTANTS.STORAGE_KEYS;

export const useLoginMutation = () =>
  useMutation<LoginSuccessResponse, Error, LoginFormValues>({
    mutationFn: login,
    onSuccess: (data) => {
      // On success, store the tokens.
      // A senior dev would use a secure storage like HttpOnly cookies
      // or a state management library, but for now, we'll use localStorage.
      localStorage.setItem(ACCESS_TOKEN, data.data.accessToken);
      localStorage.setItem(REFRESH_TOKEN, data.data.refreshToken);
    }
    // The global onError handler in QueryClient will catch errors,
    // but you can add component-specific error handling here if needed.
  });
