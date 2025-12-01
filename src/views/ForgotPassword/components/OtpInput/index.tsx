"use client";

// components
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot
} from "@/components/ui/input-otp";

interface OtpInputProps {
  value: string;
  onChange: (value: string) => void;
  disabled?: boolean;
  length?: number;
}

const OtpInput = ({
  value,
  onChange,
  disabled = false,
  length = 6
}: OtpInputProps) => (
  <div className="flex justify-center">
    <InputOTP
      maxLength={length}
      value={value}
      onChange={onChange}
      disabled={disabled}
    >
      <InputOTPGroup>
        {Array.from({ length }).map((_, index) => (
          <InputOTPSlot
            key={index}
            index={index}
            className="h-14 w-12 text-xl"
          />
        ))}
      </InputOTPGroup>
    </InputOTP>
  </div>
);

export default OtpInput;
