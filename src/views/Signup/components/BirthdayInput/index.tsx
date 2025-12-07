"use client";

// libs
import { format } from "date-fns";
import { vi, enUS } from "date-fns/locale";
import { useLocale, useTranslations } from "next-intl";
import { CalendarIcon } from "lucide-react";
// types
import type { SignupInfoFormValues } from "@/types/Signup";
// components
import CustomButton from "@/components/CustomButton";
import FormFieldMessage from "@/components/FormFieldMessage";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger
} from "@/components/ui/popover";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel
} from "@/components/ui/form";
// hooks
import { useFieldProps } from "@/hooks";
// others
import CONSTANTS from "@/constants";
import { cn } from "@/libs/utils";

const { BIRTHDAY } = CONSTANTS.FIELD_NAMES.SIGNUP_FIELD_NAMES;

const BirthdayInput = ({ disabled = false }: { disabled?: boolean }) => {
  const t = useTranslations("signup.infoStep.input");
  const locale = useLocale();
  const { field, fieldState } = useFieldProps<SignupInfoFormValues>(BIRTHDAY);
  const today = new Date();

  const dateLocale = locale === "vi" ? vi : enUS;

  return (
    <FormField
      {...field}
      render={({ field }) => {
        const selectedDate = field.value ? new Date(field.value) : undefined;

        return (
          <FormItem>
            <FormLabel className="text-foreground">
              {t("labelBirthday")} <span className="text-destructive">*</span>
            </FormLabel>
            <Popover>
              <PopoverTrigger asChild>
                <FormControl>
                  <CustomButton
                    variant="outline"
                    disabled={disabled}
                    aria-invalid={fieldState.invalid}
                    fullWidth
                    iconLeft={<CalendarIcon className="mr-2 h-4 w-4" />}
                    className={cn(
                      "border-input bg-background focus:border-ring focus:ring-ring h-12 justify-start rounded-lg px-4 text-left font-normal transition-all duration-200",
                      !field.value && "text-muted-foreground"
                    )}
                  >
                    {field.value ? (
                      format(selectedDate!, "dd/MM/yyyy", {
                        locale: dateLocale
                      })
                    ) : (
                      <span>{t("placeholderBirthday")}</span>
                    )}
                  </CustomButton>
                </FormControl>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                  mode="single"
                  selected={selectedDate}
                  onSelect={(date) => {
                    field.onChange(date ? format(date, "yyyy-MM-dd") : "");
                  }}
                  disabled={(date) => date > today}
                  defaultMonth={selectedDate || new Date(2000, 0)}
                  captionLayout="dropdown"
                  fromYear={1900}
                  toYear={today.getFullYear()}
                  locale={dateLocale}
                />
              </PopoverContent>
            </Popover>
            <FormFieldMessage />
          </FormItem>
        );
      }}
    />
  );
};

export default BirthdayInput;
