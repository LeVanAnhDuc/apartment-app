"use client";

// libs
import { useTranslations } from "next-intl";
// types
import type { ResetPasswordFormValues } from "@/types/ForgotPassword";
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

const { CONFIRM_PASSWORD } = CONSTANTS.FIELD_NAMES.FORGOT_PASSWORD_FIELD_NAMES;

const InputConfirmPassword = () => {
  const t = useTranslations("forgotPassword");
  const { field, fieldState } =
    useFieldProps<ResetPasswordFormValues>(CONFIRM_PASSWORD);

  return (
    <FormField
      {...field}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{t("form.step3.input.labelConfirmPassword")}</FormLabel>
          <FormControl>
            <Input
              {...field}
              type="password"
              placeholder={t("form.step3.input.placeholderConfirmPassword")}
              aria-invalid={fieldState.invalid}
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default InputConfirmPassword;
