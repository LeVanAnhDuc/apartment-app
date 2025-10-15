// components
import { InputOTP as InputOTPUI } from "@/components/ui/input-otp";
// others
import { cn } from "@/libs/utils";

const CustomInputOTP = ({
  className,
  containerClassName,
  fullWidth,
  maxLength,
  children,
  ...props
}: {
  fullWidth?: boolean;
  maxLength: number;
  value?: string;
  onChange?: (value: string) => void;
  disabled?: boolean;
  className?: string;
  containerClassName?: string;
  children?: React.ReactNode;
}) => (
  <InputOTPUI
    maxLength={maxLength}
    data-slot="input-otp"
    containerClassName={cn(
      "flex items-center has-disabled:opacity-50",
      {
        "w-full gap-0": fullWidth // No gap for full width, slots will be adjacent
      },
      {
        "gap-2": !fullWidth // Default gap when not full width
      },
      containerClassName
    )}
    className={cn("disabled:cursor-not-allowed", className)}
    {...props}
  >
    {children}
  </InputOTPUI>
);

export default CustomInputOTP;
