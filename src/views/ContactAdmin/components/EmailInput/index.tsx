"use client";

// libs
import { useFormContext } from "react-hook-form";
import { useTranslations } from "next-intl";
// types
import type { ContactAdminFormValues } from "@/types/ContactAdmin";
// components
import FormFieldMessage from "@/components/FormFieldMessage";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel
} from "@/components/ui/form";
import CustomInput from "@/components/CustomInput";
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
  const { control } = useFormContext<ContactAdminFormValues>();

  const isEmailDisabled = disabled || isFromRedirect;

  return (
    <FormField
      control={control}
      name={EMAIL}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{t("labelEmail")}</FormLabel>
          <FormControl>
            <CustomInput
              {...field}
              type="email"
              placeholder="email@example.com"
              disabled={isEmailDisabled}
              className={isEmailDisabled ? "bg-muted" : ""}
            />
          </FormControl>
          <FormFieldMessage />
        </FormItem>
      )}
    />
  );
};

export default EmailInput;
