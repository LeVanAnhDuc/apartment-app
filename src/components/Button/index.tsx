// types
import type { ComponentProps } from "react";
import type { buttonVariants } from "@/components/ui/button";
// components
import { Button as ButtonUI } from "@/components/ui/button";
// others
import { cn } from "@/lib/utils";
import type { VariantProps } from "class-variance-authority";

const Button = ({
  className,
  ...props
}: ComponentProps<"button"> & VariantProps<typeof buttonVariants>) => (
  <ButtonUI
    className={cn(
      "bg-primary flex items-center justify-center text-white transition-all",
      className
    )}
    {...props}
  />
);

export default Button;
