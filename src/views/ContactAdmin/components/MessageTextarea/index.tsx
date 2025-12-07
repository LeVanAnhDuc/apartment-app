"use client";

// libs
import { useFormContext, useWatch } from "react-hook-form";
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
import { Textarea } from "@/components/ui/textarea";
// hooks
import { useFormField } from "@/components/ui/form";
// others
import CONSTANTS from "@/constants";

const { MESSAGE } = CONSTANTS.FIELD_NAMES.CONTACT_ADMIN_FIELD_NAMES;
const MIN_CHARS = 20;

const MessageHint = ({ charCount }: { charCount: number }) => {
  const t = useTranslations("contactAdmin.form");
  const { error } = useFormField();

  return (
    <div className="flex items-center justify-between">
      {error?.message ? (
        <FormFieldMessage />
      ) : (
        <p className="text-muted-foreground text-xs">
          {t("hint.minChars", { count: MIN_CHARS })}
        </p>
      )}
      <p className="text-muted-foreground text-xs">
        {t("hint.charCount", { count: charCount })}
      </p>
    </div>
  );
};

const MessageTextarea = ({ disabled = false }: { disabled?: boolean }) => {
  const t = useTranslations("contactAdmin.form");
  const { control } = useFormContext<ContactAdminFormValues>();
  const messageValue = useWatch({ control, name: MESSAGE });

  return (
    <FormField
      control={control}
      name={MESSAGE}
      render={({ field }) => (
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
          <MessageHint charCount={messageValue?.length || 0} />
        </FormItem>
      )}
    />
  );
};

export default MessageTextarea;
