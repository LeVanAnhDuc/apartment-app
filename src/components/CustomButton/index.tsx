// types
import type { ComponentProps, ReactNode } from "react";
import type { buttonVariants } from "@/components/ui/button";
import type { VariantProps } from "class-variance-authority";
// components
import { Button as ButtonUI } from "@/components/ui/button";
import { Spinner } from "../ui/spinner";
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
  iconRight,
  iconLeft,
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
    {loading ? <Spinner /> : iconLeft}
    {props.children}
    {iconRight}
  </ButtonUI>
);

export default CustomButton;
