// libs
import { useMutation } from "@tanstack/react-query";
// types
import type { LoginFormValues, LoginSuccessResponse } from "@/types/Login";
// services
import { login } from "@/services/auth.service";
// stores
import { authStore } from "@/stores";

export const useLoginMutation = () =>
  useMutation<LoginSuccessResponse, Error, LoginFormValues>({
    mutationFn: login,
    onSuccess: (data) => {
      authStore((state) => state.setTokens)({
        accessToken: data.data.accessToken,
        idToken: data.data.idToken
      });
    }
    // The global onError handler in QueryClient will catch errors,
    // but you can add component-specific error handling here if needed.
  });
