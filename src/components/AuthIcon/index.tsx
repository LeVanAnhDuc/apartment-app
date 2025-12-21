// types
import type { LucideIcon } from "lucide-react";
// components
import { ScaleSpring } from "@/components/Animated";
// others
import { cn } from "@/libs/utils";

const AuthIcon = ({
  Icon,
  animated = false,
  className
}: {
  Icon: LucideIcon;
  animated?: boolean;
  className?: string;
}) => {
  const iconElement = (
    <div
      className={cn(
        "inline-flex h-16 w-16 items-center justify-center rounded-full bg-amber-500",
        className
      )}
    >
      <Icon className="h-8 w-8 text-white" />
    </div>
  );

  if (animated) return <ScaleSpring>{iconElement}</ScaleSpring>;

  return iconElement;
};

export default AuthIcon;
