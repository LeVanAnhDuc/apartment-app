// libs
import { useTranslations } from "next-intl";
// types
import type { SignupFormValues } from "@/types/Signup";
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

const { EMAIL } = CONSTANTS.FIELD_NAMES.SIGNUP_FIELD_NAMES;

const InputEmail = () => {
  const t = useTranslations("signup.form.input");
  const { field, fieldState } = useFieldProps<SignupFormValues>(EMAIL);

  return (
    <FormField
      {...field}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{t("labelEmail")}</FormLabel>
          <FormControl>
            <Input
              {...field}
              placeholder="m@example.com"
              aria-invalid={fieldState.invalid}
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default InputEmail;
