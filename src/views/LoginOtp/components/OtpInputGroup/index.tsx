"use client";

// libs
import { motion } from "framer-motion";
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
  isVerifying = false,
  verifyingLabel
}: {
  value: string;
  onChange: (value: string) => void;
  disabled?: boolean;
  isVerifying?: boolean;
  verifyingLabel?: string;
}) => (
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

    {isVerifying && verifyingLabel && (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-primary flex items-center justify-center gap-2 text-center text-sm"
      >
        <div className="border-primary h-4 w-4 animate-spin rounded-full border-2 border-t-transparent" />
        <span>{verifyingLabel}</span>
      </motion.div>
    )}
  </motion.div>
);

export default OtpInputGroup;
