// libs
import { Loader2Icon } from "lucide-react";
// types
import type { ComponentProps, ReactNode } from "react";
import type { buttonVariants } from "@/components/ui/button";
import type { VariantProps } from "class-variance-authority";
// components
import { Button as ButtonUI } from "@/components/ui/button";
// others
import { cn } from "@/libs/utils";

interface ButtonProps
  extends ComponentProps<"button">,
    VariantProps<typeof buttonVariants> {
  loading?: boolean;
  iconRight?: ReactNode;
  iconLeft?: ReactNode;
  fullWidth?: boolean;
}

const CustomButton = ({
  className,
  loading,
  variant = "default",
  fullWidth,
  ...props
}: ButtonProps) => (
  <ButtonUI
    className={cn(
      "hover:cursor-pointer",
      {
        "w-full": fullWidth,
        "hover:bg-primary/80": variant === "default"
      },
      className
    )}
    disabled={loading || props.disabled}
    variant={variant}
    {...props}
  >
    {loading ? <Loader2Icon className="animate-spin" /> : props.iconLeft}
    {props.children}
    {props.iconRight}
  </ButtonUI>
);

export default CustomButton;
