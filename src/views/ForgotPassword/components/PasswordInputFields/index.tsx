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

const { NEW_PASSWORD, CONFIRM_PASSWORD } =
  CONSTANTS.FIELD_NAMES.FORGOT_PASSWORD_FIELD_NAMES;

const PasswordInputFields = ({ disabled }: { disabled?: boolean }) => {
  const t = useTranslations("forgotPassword");
  const newPasswordField = useFieldProps<ResetPasswordFormValues>(NEW_PASSWORD);
  const confirmPasswordField =
    useFieldProps<ResetPasswordFormValues>(CONFIRM_PASSWORD);

  return (
    <>
      <FormField
        {...newPasswordField.field}
        render={({ field }) => (
          <FormItem>
            <FormLabel>{t("form.step3.input.labelNewPassword")}</FormLabel>
            <FormControl>
              <Input
                {...field}
                type="password"
                placeholder={t("form.step3.input.placeholderNewPassword")}
                aria-invalid={newPasswordField.fieldState.invalid}
                disabled={disabled}
                autoFocus
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        {...confirmPasswordField.field}
        render={({ field }) => (
          <FormItem>
            <FormLabel>{t("form.step3.input.labelConfirmPassword")}</FormLabel>
            <FormControl>
              <Input
                {...field}
                type="password"
                placeholder={t("form.step3.input.placeholderConfirmPassword")}
                aria-invalid={confirmPasswordField.fieldState.invalid}
                disabled={disabled}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </>
  );
};

export default PasswordInputFields;
