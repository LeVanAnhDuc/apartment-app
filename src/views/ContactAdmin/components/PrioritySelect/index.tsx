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
  FormLabel
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectValue
} from "@/components/ui/select";
import CustomSelectTrigger from "@/components/CustomSelectTrigger";
// dataSources
import { PRIORITIES } from "@/dataSources/ContactAdmin";
// others
import CONSTANTS from "@/constants";

const { PRIORITY } = CONSTANTS.FIELD_NAMES.CONTACT_ADMIN_FIELD_NAMES;

const PrioritySelect = ({ disabled = false }: { disabled?: boolean }) => {
  const t = useTranslations("contactAdmin.form");
  const { control } = useFormContext<ContactAdminFormValues>();

  return (
    <FormField
      control={control}
      name={PRIORITY}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{t("input.labelPriority")}</FormLabel>
          <Select
            onValueChange={field.onChange}
            defaultValue={field.value}
            disabled={disabled}
          >
            <FormControl>
              <CustomSelectTrigger>
                <SelectValue />
              </CustomSelectTrigger>
            </FormControl>
            <SelectContent>
              {PRIORITIES.map((priority) => (
                <SelectItem key={priority.value} value={priority.value}>
                  <span className={priority.colorClass}>
                    {t(`priority.${priority.value}`)}
                  </span>
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </FormItem>
      )}
    />
  );
};

export default PrioritySelect;
