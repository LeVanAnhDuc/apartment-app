"use client";

// libs
import { motion } from "framer-motion";
// types
import type { LucideIcon } from "lucide-react";
// others
import { cn } from "@/libs/utils";

type ColorVariant = "orange" | "blue" | "green" | "purple";

interface LoginOptionCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  colorVariant: ColorVariant;
  onClick: () => void;
  animationDelay?: number;
}

const COLOR_CLASSES: Record<ColorVariant, string> = {
  orange: "bg-orange-100 group-hover:bg-orange-200 text-orange-600",
  blue: "bg-blue-100 group-hover:bg-blue-200 text-blue-600",
  green: "bg-green-100 group-hover:bg-green-200 text-green-600",
  purple: "bg-purple-100 group-hover:bg-purple-200 text-purple-600"
};

const LoginOptionCard = ({
  icon: Icon,
  title,
  description,
  colorVariant,
  onClick,
  animationDelay = 0
}: LoginOptionCardProps) => (
  <motion.button
    initial={{ opacity: 0, x: -20 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ delay: animationDelay }}
    onClick={onClick}
    type="button"
    className={cn(
      "group flex w-full items-center gap-4 rounded-xl border-2",
      "border-border p-4 transition-all duration-200",
      "hover:border-primary hover:bg-primary/5"
    )}
  >
    <div
      className={cn(
        "flex h-12 w-12 items-center justify-center rounded-lg",
        "transition-colors duration-200",
        COLOR_CLASSES[colorVariant]
      )}
    >
      <Icon className="h-6 w-6" />
    </div>
    <div className="flex-1 text-left">
      <div className="text-foreground font-medium">{title}</div>
      <div className="text-muted-foreground text-sm">{description}</div>
    </div>
  </motion.button>
);

export default LoginOptionCard;
