"use client";

// libs
import { useTranslations } from "next-intl";
// types
import type { RequestResetFormValues } from "@/types/ForgotPassword";
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

const { EMAIL } = CONSTANTS.FIELD_NAMES.FORGOT_PASSWORD_FIELD_NAMES;

const InputEmail = () => {
  const t = useTranslations("forgotPassword");
  const { field, fieldState } = useFieldProps<RequestResetFormValues>(EMAIL);

  return (
    <FormField
      {...field}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{t("form.step1.input.labelEmail")}</FormLabel>
          <FormControl>
            <Input
              {...field}
              type="email"
              placeholder={t("form.step1.input.placeholderEmail")}
              aria-invalid={fieldState.invalid}
              autoFocus
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default InputEmail;
