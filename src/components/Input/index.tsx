// types
import type { ComponentProps } from "react";
// components
import { Input as InputUI } from "@/components/ui/input";
// others
import { cn } from "@/lib/utils";

const Input = ({ className, ...props }: ComponentProps<"input">) => (
  <InputUI className={cn("border-primary", className)} {...props} />
);

export default Input;
