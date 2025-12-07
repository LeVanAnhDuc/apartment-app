"use client";

// libs
import { motion } from "framer-motion";
// types
import type { LucideIcon } from "lucide-react";
import type { ColorVariant } from "@/dataSources/Common";
// dataSources
import { COLOR_VARIANT_CLASSES, DISABLED_CLASSES } from "@/dataSources/Common";
// others
import { cn } from "@/libs/utils";

const RecoveryOptionCard = ({
  icon: Icon,
  title,
  description,
  colorVariant,
  onClick,
  animationDelay = 0,
  disabled = false,
  unavailableLabel
}: {
  icon: LucideIcon;
  title: string;
  description: string;
  colorVariant: ColorVariant;
  onClick: () => void;
  animationDelay?: number;
  disabled?: boolean;
  unavailableLabel?: string;
}) => (
  <motion.button
    initial={{ opacity: 0, x: -20 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ delay: animationDelay }}
    onClick={onClick}
    type="button"
    disabled={disabled}
    aria-label={disabled ? `${title} - ${unavailableLabel}` : title}
    aria-disabled={disabled}
    className={cn(
      "group flex w-full items-center gap-4 rounded-xl border-2 p-4",
      "transition-all duration-200",
      disabled
        ? "cursor-not-allowed border-gray-200 bg-gray-50 opacity-60"
        : "border-border hover:border-primary hover:bg-primary/5"
    )}
  >
    <div
      className={cn(
        "flex h-12 w-12 items-center justify-center rounded-lg",
        "transition-colors duration-200",
        disabled ? DISABLED_CLASSES : COLOR_VARIANT_CLASSES[colorVariant]
      )}
    >
      <Icon className="h-6 w-6" />
    </div>
    <div className="flex-1 text-left">
      <div
        className={cn(
          "font-medium",
          disabled ? "text-gray-500" : "text-foreground"
        )}
      >
        {title}
      </div>
      <div className="text-muted-foreground text-sm">{description}</div>
    </div>
    {disabled && unavailableLabel && (
      <div className="rounded bg-gray-200 px-2 py-1 text-xs text-gray-600">
        {unavailableLabel}
      </div>
    )}
  </motion.button>
);

export default RecoveryOptionCard;
