"use client";

// libs
import { motion } from "framer-motion";
// types
import type { LucideIcon } from "lucide-react";
import type { ColorVariant } from "@/dataSources/Common";
// components
import CardContent from "./CardContent";
// others
import { Link } from "@/i18n/navigation";
import { cn } from "@/libs/utils";

const RecoveryOptionCard = ({
  icon,
  title,
  description,
  colorVariant,
  href,
  animationDelay = 0,
  disabled = false,
  unavailableLabel
}: {
  icon: LucideIcon;
  title: string;
  description: string;
  colorVariant: ColorVariant;
  href?: string;
  animationDelay?: number;
  disabled?: boolean;
  unavailableLabel?: string;
}) => {
  const cardClassName = cn(
    "group flex w-full items-center gap-4 rounded-xl border-2 p-4",
    "transition-all duration-200",
    disabled
      ? "cursor-not-allowed border-gray-200 bg-gray-50 opacity-60"
      : "border-border hover:border-primary hover:bg-primary/5"
  );

  const contentProps = {
    icon,
    title,
    description,
    colorVariant,
    disabled,
    unavailableLabel
  };

  if (disabled || !href) {
    return (
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: animationDelay }}
        aria-label={disabled ? `${title} - ${unavailableLabel}` : title}
        aria-disabled={disabled}
        className={cardClassName}
      >
        <CardContent {...contentProps} />
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: animationDelay }}
    >
      <Link href={href} className={cardClassName}>
        <CardContent {...contentProps} />
      </Link>
    </motion.div>
  );
};

export default RecoveryOptionCard;
