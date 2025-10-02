"use client";
// libs
import { Eye, EyeOff } from "lucide-react";
import { useCallback, useState } from "react";
import { useTranslations } from "next-intl";
// types
import type { SignupFormValues } from "@/types/Signup";
// components
import { Input } from "@/components/ui/input";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "@/components/ui/form";
// hooks
import useFieldProps from "@/hooks/useFieldProps";
// others
import CONSTANTS from "@/constants";

const { PASSWORD_CONFIRM } = CONSTANTS.FIELD_NAMES.SIGNUP_FIELD_NAMES;

const InputPasswordConfirm = () => {
  const t = useTranslations("signup.form.input");
  const { field, fieldState } =
    useFieldProps<SignupFormValues>(PASSWORD_CONFIRM);
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = useCallback(() => {
    setShowPassword((prev) => !prev);
  }, []);

  return (
    <FormField
      {...field}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{t("labelPasswordConfirm")}</FormLabel>
          <FormControl>
            <main className="relative size-full">
              <Input
                {...field}
                type={showPassword ? "text" : "password"}
                placeholder={t("labelPasswordConfirm")}
                aria-invalid={fieldState.invalid}
              />
              <span
                className="absolute top-1/2 right-4 -translate-y-1/2 transform hover:cursor-pointer"
                onClick={togglePasswordVisibility}
                onMouseDown={(e) => e.preventDefault()}
              >
                {showPassword ? (
                  <EyeOff className="text-primary size-5" />
                ) : (
                  <Eye className="text-primary size-5" />
                )}
              </span>
            </main>
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default InputPasswordConfirm;
