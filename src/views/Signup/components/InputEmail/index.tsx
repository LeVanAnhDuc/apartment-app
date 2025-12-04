// libs
import { useTranslations } from "next-intl";
// types
import type { SignupEmailFormValues } from "@/types/Signup";
// components
import CustomInput from "@/components/CustomInput";
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

const { EMAIL } = CONSTANTS.FIELD_NAMES.SIGNUP_FIELD_NAMES;

const EmailInput = ({ disabled = false }: { disabled?: boolean }) => {
  const t = useTranslations("signup.emailStep.input");
  const { field, fieldState } = useFieldProps<SignupEmailFormValues>(EMAIL);

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
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default EmailInput;
