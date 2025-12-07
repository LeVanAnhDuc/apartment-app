// libs
import { useTranslations } from "next-intl";
// types
import type { EmailStepFormValues } from "@/types/Login";
// components
import CustomInput from "@/components/CustomInput";
import FormFieldMessage from "@/components/FormFieldMessage";
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
            <CustomInput
              {...field}
              type="email"
              placeholder="example@gmail.com"
              aria-invalid={fieldState.invalid}
              disabled={disabled}
            />
          </FormControl>
          <FormFieldMessage />
        </FormItem>
      )}
    />
  );
};

export default EmailInput;
