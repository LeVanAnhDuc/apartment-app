// libs
import axiosInstance from "@/libs/axios";
// types
import type { LoginFormValues, LoginSuccessResponse } from "@/types/Login";
// constants
import CONSTANTS from "@/constants";

export const login = async (
  credentials: LoginFormValues
): Promise<LoginSuccessResponse> => {
  const { data } = await axiosInstance.post<LoginSuccessResponse>(
    CONSTANTS.END_POINTS.AUTH.LOGIN,
    credentials
  );

  return data;
};
