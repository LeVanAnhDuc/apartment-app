"use client";

// libs
import { useTranslations } from "next-intl";
// types
import type { SignupInfoFormValues } from "@/types/Signup";
// components
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";
// hooks
import { useFieldProps } from "@/hooks";
// others
import CONSTANTS from "@/constants";

const { GENDER } = CONSTANTS.FIELD_NAMES.SIGNUP_FIELD_NAMES;

const GENDER_OPTIONS = ["male", "female", "other"] as const;

const GenderSelect = ({ disabled = false }: { disabled?: boolean }) => {
  const t = useTranslations("signup.infoStep.input");
  const { field, fieldState } = useFieldProps<SignupInfoFormValues>(GENDER);

  return (
    <FormField
      {...field}
      render={({ field }) => (
        <FormItem>
          <FormLabel className="text-foreground">
            {t("labelGender")} <span className="text-destructive">*</span>
          </FormLabel>
          <Select
            onValueChange={field.onChange}
            defaultValue={field.value}
            disabled={disabled}
          >
            <FormControl>
              <SelectTrigger
                className="border-input bg-background focus:border-ring focus:ring-ring !h-12 w-full rounded-lg px-4 transition-all duration-200"
                aria-invalid={fieldState.invalid}
              >
                <SelectValue placeholder={t("placeholderGender")} />
              </SelectTrigger>
            </FormControl>
            <SelectContent>
              {GENDER_OPTIONS.map((option) => (
                <SelectItem key={option} value={option}>
                  {t(`gender.${option}`)}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default GenderSelect;
