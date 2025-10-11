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

const { FULL_NAME } = CONSTANTS.FIELD_NAMES.SIGNUP_FIELD_NAMES;

const InputFullName = () => {
  const t = useTranslations("signup.form.input");
  const { field, fieldState } = useFieldProps<SignupFormValues>(FULL_NAME);

  return (
    <FormField
      {...field}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{t("labelFullName")}</FormLabel>
          <FormControl>
            <Input
              {...field}
              placeholder="John Doe"
              aria-invalid={fieldState.invalid}
              autoFocus
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default InputFullName;
