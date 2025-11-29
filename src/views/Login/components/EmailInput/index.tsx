// libs
import { useTranslations } from "next-intl";
// types
import type { EmailStepFormValues } from "@/types/Login";
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

const { EMAIL } = CONSTANTS.FIELD_NAMES.LOGIN_FIELD_NAMES;

const EmailInput = ({ disabled = false }: { disabled?: boolean }) => {
  const t = useTranslations("login.form.input");
  const { field, fieldState } = useFieldProps<EmailStepFormValues>(EMAIL);

  return (
    <FormField
      {...field}
      render={({ field }) => (
        <FormItem>
          <FormLabel className="text-foreground">{t("labelEmail")}</FormLabel>
          <FormControl>
            <Input
              {...field}
              type="email"
              placeholder="example@gmail.com"
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

export default EmailInput;
