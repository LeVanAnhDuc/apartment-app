"use client";

// libs
import { useTranslations } from "next-intl";
import { useCallback, useState } from "react";
import { Eye, EyeOff } from "lucide-react";
// types
import type { PasswordStepFormValues } from "@/types/Login";
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
import { useFieldProps } from "@/hooks";
// others
import CONSTANTS from "@/constants";

const { PASSWORD } = CONSTANTS.FIELD_NAMES.LOGIN_FIELD_NAMES;

const PasswordInput = ({ disabled = false }: { disabled?: boolean }) => {
  const t = useTranslations("login.form.input");
  const { field, fieldState } = useFieldProps<PasswordStepFormValues>(PASSWORD);
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = useCallback(() => {
    setShowPassword((prev) => !prev);
  }, []);

  return (
    <FormField
      {...field}
      render={({ field }) => (
        <FormItem>
          <FormLabel className="text-foreground">
            {t("labelEnterPassword")}
          </FormLabel>
          <FormControl>
            <div className="relative w-full">
              <Input
                {...field}
                type={showPassword ? "text" : "password"}
                placeholder={t("placeholderPassword")}
                aria-invalid={fieldState.invalid}
                disabled={disabled}
                className="border-input bg-background focus:border-ring focus:ring-ring h-12 rounded-lg px-4 pr-12 transition-all duration-200"
              />
              <button
                type="button"
                className="text-muted-foreground hover:text-foreground absolute top-1/2 right-3 -translate-y-1/2 transition-colors duration-200 disabled:opacity-50"
                onClick={togglePasswordVisibility}
                onMouseDown={(e) => e.preventDefault()}
                disabled={disabled}
              >
                {showPassword ? (
                  <EyeOff className="h-5 w-5" />
                ) : (
                  <Eye className="h-5 w-5" />
                )}
              </button>
            </div>
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default PasswordInput;
