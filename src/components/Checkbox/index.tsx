// components
import { Checkbox as CheckboxUI } from "@/components/ui/checkbox";
import { cn } from "@/lib/utils";
// types
import type * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import type { ComponentProps } from "react";

const Checkbox = ({
  className,
  ...props
}: ComponentProps<typeof CheckboxPrimitive.Root>) => (
  <CheckboxUI
    className={cn(
      "accent-primary size-4 data-[state=checked]:text-white",
      className
    )}
    {...props}
  />
);

export default Checkbox;
