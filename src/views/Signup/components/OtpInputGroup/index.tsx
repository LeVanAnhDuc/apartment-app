"use client";

// libs
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
// components
import CustomInputOTP from "@/components/CustomInputOTP";
import { InputOTPGroup, InputOTPSlot } from "@/components/ui/input-otp";
// others
import { cn } from "@/libs/utils";

const OTP_LENGTH = 6;

const OtpInputGroup = ({
  value,
  onChange,
  disabled = false,
  isVerifying = false
}: {
  value: string;
  onChange: (value: string) => void;
  disabled?: boolean;
  isVerifying?: boolean;
}) => {
  const t = useTranslations("signup.otpStep");

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.3 }}
      className="mb-6"
    >
      <div className="mb-2 flex justify-center">
        <CustomInputOTP
          maxLength={OTP_LENGTH}
          value={value}
          onChange={onChange}
          disabled={disabled || isVerifying}
        >
          <InputOTPGroup>
            {Array.from({ length: OTP_LENGTH }).map((_, index) => (
              <InputOTPSlot
                key={index}
                index={index}
                className={cn("h-14 w-12 text-xl")}
              />
            ))}
          </InputOTPGroup>
        </CustomInputOTP>
      </div>

      {isVerifying && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex items-center justify-center gap-2 text-center text-sm text-green-600"
        >
          <div className="h-4 w-4 animate-spin rounded-full border-2 border-green-600 border-t-transparent" />
          <span>{t("verifying")}</span>
        </motion.div>
      )}
    </motion.div>
  );
};

export default OtpInputGroup;
