// types
import type { z } from "zod";
import type { loginFormValidation } from "@/forms/Login/validations";

export type LoginFormValues = z.infer<typeof loginFormValidation>;
