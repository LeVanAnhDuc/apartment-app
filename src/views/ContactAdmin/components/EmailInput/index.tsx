"use client";

// libs
import { useFormContext } from "react-hook-form";
import { useTranslations } from "next-intl";
// types
import type { ContactAdminFormValues } from "@/types/ContactAdmin";
// components
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
// others
import CONSTANTS from "@/constants";

const { EMAIL } = CONSTANTS.FIELD_NAMES.CONTACT_ADMIN_FIELD_NAMES;

const EmailInput = ({
  disabled = false,
  isFromRedirect = false
}: {
  disabled?: boolean;
  isFromRedirect?: boolean;
}) => {
  const t = useTranslations("contactAdmin.form.input");
  const tValidation = useTranslations("contactAdmin.validation.email");
  const { control } = useFormContext<ContactAdminFormValues>();

  const isEmailDisabled = disabled || isFromRedirect;

  return (
    <FormField
      control={control}
      name={EMAIL}
      render={({ field, fieldState }) => (
        <FormItem>
          <FormLabel>{t("labelEmail")}</FormLabel>
          <FormControl>
            <Input
              {...field}
              type="email"
              placeholder="email@example.com"
              disabled={isEmailDisabled}
              className={`h-12 ${isEmailDisabled ? "bg-muted" : ""}`}
            />
          </FormControl>
          {fieldState.error?.message && (
            <FormMessage>
              {tValidation(fieldState.error.message as "required" | "invalid")}
            </FormMessage>
          )}
        </FormItem>
      )}
    />
  );
};

export default EmailInput;
