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
import CustomInput from "@/components/CustomInput";
// others
import CONSTANTS from "@/constants";

const { SUBJECT } = CONSTANTS.FIELD_NAMES.CONTACT_ADMIN_FIELD_NAMES;

const SubjectInput = ({ disabled = false }: { disabled?: boolean }) => {
  const t = useTranslations("contactAdmin.form.input");
  const tValidation = useTranslations("contactAdmin.validation.subject");
  const { control } = useFormContext<ContactAdminFormValues>();

  return (
    <FormField
      control={control}
      name={SUBJECT}
      render={({ field, fieldState }) => (
        <FormItem>
          <FormLabel>
            {t("labelSubject")} <span className="text-destructive">*</span>
          </FormLabel>
          <FormControl>
            <CustomInput
              {...field}
              type="text"
              placeholder={t("placeholderSubject")}
              disabled={disabled}
            />
          </FormControl>
          {fieldState.error?.message && (
            <FormMessage>
              {tValidation(
                fieldState.error.message as "required" | "minLength"
              )}
            </FormMessage>
          )}
        </FormItem>
      )}
    />
  );
};

export default SubjectInput;
