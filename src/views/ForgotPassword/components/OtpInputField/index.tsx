"use client";

// libs
import { useTranslations } from "next-intl";
// types
import type { VerifyCodeFormValues } from "@/types/ForgotPassword";
// components
import { InputOTPSlot } from "@/components/ui/input-otp";
import CustomInputOTP from "@/components/CustomInputOTP";
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

const { OTP_LENGTH } = CONSTANTS.FORGOT_PASSWORD;
const { OTP } = CONSTANTS.FIELD_NAMES.FORGOT_PASSWORD_FIELD_NAMES;

const OtpInputField = ({
  disabled,
  onAutoSubmit
}: {
  disabled?: boolean;
  onAutoSubmit?: () => void;
}) => {
  const t = useTranslations("forgotPassword");
  const { field } = useFieldProps<VerifyCodeFormValues>(OTP);

  return (
    <FormField
      {...field}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{t("form.step2.input.labelOtp")}</FormLabel>
          <FormControl>
            <CustomInputOTP
              maxLength={OTP_LENGTH}
              fullWidth
              value={field.value}
              onChange={(value: string) => {
                field.onChange(value);
                if (value.length === OTP_LENGTH && onAutoSubmit) {
                  onAutoSubmit();
                }
              }}
              disabled={disabled}
            >
              <div className="flex w-full">
                {Array.from({ length: OTP_LENGTH }).map((_, index) => (
                  <InputOTPSlot key={index} index={index} className="flex-1" />
                ))}
              </div>
            </CustomInputOTP>
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default OtpInputField;
