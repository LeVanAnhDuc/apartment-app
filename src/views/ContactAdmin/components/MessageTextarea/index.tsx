"use client";

// libs
import { useFormContext, useWatch } from "react-hook-form";
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
import { Textarea } from "@/components/ui/textarea";
// others
import CONSTANTS from "@/constants";

const { MESSAGE } = CONSTANTS.FIELD_NAMES.CONTACT_ADMIN_FIELD_NAMES;
const MIN_CHARS = 20;

const MessageTextarea = ({ disabled = false }: { disabled?: boolean }) => {
  const t = useTranslations("contactAdmin.form");
  const tValidation = useTranslations("contactAdmin.validation.message");
  const { control } = useFormContext<ContactAdminFormValues>();
  const messageValue = useWatch({ control, name: MESSAGE });

  return (
    <FormField
      control={control}
      name={MESSAGE}
      render={({ field, fieldState }) => (
        <FormItem>
          <FormLabel>
            {t("input.labelMessage")}{" "}
            <span className="text-destructive">*</span>
          </FormLabel>
          <FormControl>
            <Textarea
              {...field}
              placeholder={t("input.placeholderMessage")}
              disabled={disabled}
              rows={6}
              className="resize-none"
            />
          </FormControl>
          <div className="flex items-center justify-between">
            {fieldState.error?.message ? (
              <FormMessage>
                {tValidation(
                  fieldState.error.message as "required" | "minLength"
                )}
              </FormMessage>
            ) : (
              <p className="text-muted-foreground text-xs">
                {t("hint.minChars", { count: MIN_CHARS })}
              </p>
            )}
            <p className="text-muted-foreground text-xs">
              {t("hint.charCount", { count: messageValue?.length || 0 })}
            </p>
          </div>
        </FormItem>
      )}
    />
  );
};

export default MessageTextarea;
