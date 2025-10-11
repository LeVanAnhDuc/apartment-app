// libs
import { useMutation } from "@tanstack/react-query";
// types
import type { LoginFormValues, LoginSuccessResponse } from "@/types/Login";
// apis
import { login } from "./fetchers";
// stores
import { authStoreState } from "@/stores";

export const useLoginMutation = () =>
  useMutation<LoginSuccessResponse, Error, LoginFormValues>({
    mutationFn: login,
    onSuccess: (data) => {
      const { setTokens } = authStoreState();
      setTokens({
        accessToken: data.data.accessToken,
        idToken: data.data.idToken
      });
    }
    // The global onError handler in QueryClient will catch errors,
    // but you can add component-specific error handling here if needed.
  });
