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
import useFieldProps from "@/hooks/useFieldProps";
// others
import CONSTANTS from "@/constants";

const { PHONE } = CONSTANTS.FIELD_NAMES.SIGNUP_FIELD_NAMES;

const InputPhone = () => {
  const t = useTranslations("signup.form.input");
  const { field, fieldState } = useFieldProps<SignupFormValues>(PHONE);

  return (
    <FormField
      {...field}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{t("labelPhone")}</FormLabel>
          <FormControl>
            <Input
              {...field}
              placeholder="0123456789"
              aria-invalid={fieldState.invalid}
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default InputPhone;
