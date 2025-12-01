"use client";

// libs
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
// types
import type { LucideIcon } from "lucide-react";
// others
import { cn } from "@/libs/utils";

type ColorVariant = "orange" | "blue" | "green" | "purple";

interface RecoveryOptionCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  colorVariant: ColorVariant;
  onClick: () => void;
  animationDelay?: number;
  disabled?: boolean;
}

const COLOR_CLASSES: Record<ColorVariant, string> = {
  orange: "bg-orange-100 group-hover:bg-orange-200 text-orange-600",
  blue: "bg-blue-100 group-hover:bg-blue-200 text-blue-600",
  green: "bg-green-100 group-hover:bg-green-200 text-green-600",
  purple: "bg-purple-100 group-hover:bg-purple-200 text-purple-600"
};

const DISABLED_CLASSES = "bg-gray-200 text-gray-400";

const RecoveryOptionCard = ({
  icon: Icon,
  title,
  description,
  colorVariant,
  onClick,
  animationDelay = 0,
  disabled = false
}: RecoveryOptionCardProps) => {
  const t = useTranslations("forgotPassword");

  return (
    <motion.button
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: animationDelay }}
      onClick={onClick}
      type="button"
      disabled={disabled}
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
          disabled ? DISABLED_CLASSES : COLOR_CLASSES[colorVariant]
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
      {disabled && (
        <div className="rounded bg-gray-200 px-2 py-1 text-xs text-gray-600">
          {t("badge.unavailable")}
        </div>
      )}
    </motion.button>
  );
};

export default RecoveryOptionCard;
