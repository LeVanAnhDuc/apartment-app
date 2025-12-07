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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectValue
} from "@/components/ui/select";
import CustomSelectTrigger from "@/components/CustomSelectTrigger";
// dataSources
import { CATEGORIES } from "@/dataSources/ContactAdmin";
// others
import CONSTANTS from "@/constants";

const { CATEGORY } = CONSTANTS.FIELD_NAMES.CONTACT_ADMIN_FIELD_NAMES;

const CategorySelect = ({ disabled = false }: { disabled?: boolean }) => {
  const t = useTranslations("contactAdmin.form");
  const { control } = useFormContext<ContactAdminFormValues>();

  return (
    <FormField
      control={control}
      name={CATEGORY}
      render={({ field }) => (
        <FormItem>
          <FormLabel>
            {t("input.labelCategory")}{" "}
            <span className="text-destructive">*</span>
          </FormLabel>
          <Select
            onValueChange={field.onChange}
            defaultValue={field.value}
            disabled={disabled}
          >
            <FormControl>
              <CustomSelectTrigger>
                <SelectValue placeholder={t("input.placeholderCategory")} />
              </CustomSelectTrigger>
            </FormControl>
            <SelectContent>
              {CATEGORIES.map((category) => (
                <SelectItem key={category} value={category}>
                  {t(`category.${category}`)}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <FormFieldMessage />
        </FormItem>
      )}
    />
  );
};

export default CategorySelect;
