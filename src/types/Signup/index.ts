// libs
import type { z } from "zod";
// forms
import type { signupFormValidation } from "@/forms/Signup/validations";

export type SignupFormValues = z.infer<typeof signupFormValidation>;
