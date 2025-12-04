"use client";

// libs
import { useCallback, useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { useFormContext } from "react-hook-form";
// components
import { Input } from "@/components/ui/input";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "@/components/ui/form";

const PasswordInput = ({
  name,
  label,
  placeholder,
  disabled = false,
  required = false
}: {
  name: string;
  label: string;
  placeholder?: string;
  disabled?: boolean;
  required?: boolean;
}) => {
  const { control } = useFormContext();
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = useCallback(() => {
    setShowPassword((prev) => !prev);
  }, []);

  return (
    <FormField
      control={control}
      name={name}
      render={({ field, fieldState }) => (
        <FormItem>
          <FormLabel className="text-foreground">
            {label}
            {required && <span className="text-destructive"> *</span>}
          </FormLabel>
          <FormControl>
            <div className="relative w-full">
              <Input
                {...field}
                type={showPassword ? "text" : "password"}
                placeholder={placeholder}
                aria-invalid={fieldState.invalid}
                disabled={disabled}
                className="border-input bg-background focus:border-ring focus:ring-ring h-12 rounded-lg px-4 pr-12 transition-all duration-200"
              />
              <button
                type="button"
                className="text-muted-foreground hover:text-foreground absolute top-1/2 right-3 -translate-y-1/2 transition-colors duration-200 disabled:opacity-50"
                onClick={togglePasswordVisibility}
                onMouseDown={(e) => e.preventDefault()}
                disabled={disabled}
              >
                {showPassword ? (
                  <EyeOff className="h-5 w-5" />
                ) : (
                  <Eye className="h-5 w-5" />
                )}
              </button>
            </div>
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default PasswordInput;
