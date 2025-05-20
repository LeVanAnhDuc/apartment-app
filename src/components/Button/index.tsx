// types
import type { ComponentProps } from "react";
// components
import { Button as ButtonUI } from "@/components/ui/button";
// others
import { cn } from "@/lib/utils";

const Button = ({ className, ...props }: ComponentProps<"button">) => (
  <ButtonUI
    className={cn(
      "bg-primary hover:bg-primary/80 text-white transition-all",
      className
    )}
    {...props}
  />
);

export default Button;
