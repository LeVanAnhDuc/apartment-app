// types
import type { LoginFormValues } from "@/types/Login";
// component
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

const { EMAIL } = CONSTANTS.FIELD_NAMES.LOGIN_FIELD_NAMES;

const InputEmail = () => {
  const { field, fieldState } = useFieldProps<LoginFormValues>(EMAIL);

  return (
    <FormField
      {...field}
      render={({ field }) => (
        <FormItem>
          <FormLabel>Email</FormLabel>
          <FormControl>
            <Input
              {...field}
              placeholder="m@example.com"
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

export default InputEmail;
