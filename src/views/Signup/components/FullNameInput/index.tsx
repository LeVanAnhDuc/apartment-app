// libs
import { useTranslations } from "next-intl";
// types
import type { SignupInfoFormValues } from "@/types/Signup";
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
            <CustomInput
              {...field}
              placeholder={t("placeholderFullName")}
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

export default FullNameInput;
