// libs
import { useTranslations } from "next-intl";
// types
import type { SignupInfoFormValues } from "@/types/Signup";
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

const { FULL_NAME } = CONSTANTS.FIELD_NAMES.SIGNUP_FIELD_NAMES;

const FullNameInput = ({ disabled = false }: { disabled?: boolean }) => {
  const t = useTranslations("signup.infoStep.input");
  const { field, fieldState } = useFieldProps<SignupInfoFormValues>(FULL_NAME);

  return (
    <FormField
      {...field}
      render={({ field }) => (
        <FormItem>
          <FormLabel className="text-foreground">
            {t("labelFullName")} <span className="text-destructive">*</span>
          </FormLabel>
          <FormControl>
            <Input
              {...field}
              placeholder={t("placeholderFullName")}
              aria-invalid={fieldState.invalid}
              disabled={disabled}
              className="border-input bg-background focus:border-ring focus:ring-ring h-12 rounded-lg px-4 transition-all duration-200"
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default FullNameInput;
