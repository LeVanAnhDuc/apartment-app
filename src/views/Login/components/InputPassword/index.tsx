"use client";
// libs
import { Eye, EyeOff } from "lucide-react";
import { useCallback, useState } from "react";
import { useTranslations } from "next-intl";
// types
import type { LoginFormValues } from "@/types/Login";
// component
import { Input } from "@/components/ui/input";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "@/components/ui/form";
// hooks
import { useFieldProps } from "@/hooks";
// others
import CONSTANTS from "@/constants";

const { PASSWORD } = CONSTANTS.FIELD_NAMES.LOGIN_FIELD_NAMES;

const InputPassword = () => {
  const t = useTranslations("login.form.input");
  const [showPassword, setShowPassword] = useState(false);
  const { field, fieldState } = useFieldProps<LoginFormValues>(PASSWORD);

  const togglePasswordVisibility = useCallback(() => {
    setShowPassword((prev) => !prev);
  }, []);

  return (
    <FormField
      {...field}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{t("labelPassword")}</FormLabel>
          <FormControl>
            <main className="relative size-full">
              <Input
                type={showPassword ? "text" : "password"}
                placeholder={t("labelPassword")}
                aria-invalid={fieldState.invalid}
                {...field}
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

export default InputPassword;
