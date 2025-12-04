"use client";

// libs
import { motion } from "framer-motion";
// types
import type { LucideProps } from "lucide-react";
import type { ForwardRefExoticComponent, RefAttributes } from "react";
// others
import { cn } from "@/libs/utils";

type AuthIconVariant = "blue" | "green" | "orange" | "purple";
type AuthIconShape = "rounded" | "circle";
type AuthIconSize = "md" | "lg";

const VARIANT_CLASSES: Record<AuthIconVariant, string> = {
  blue: "from-blue-500 to-indigo-600",
  green: "from-green-500 to-emerald-600",
  orange: "from-amber-500 to-orange-600",
  purple: "from-purple-500 to-purple-600"
};

const SHAPE_CLASSES: Record<AuthIconShape, string> = {
  rounded: "rounded-2xl",
  circle: "rounded-full"
};

const SIZE_CLASSES: Record<AuthIconSize, { container: string; icon: string }> =
  {
    md: { container: "h-16 w-16", icon: "h-8 w-8" },
    lg: { container: "h-20 w-20", icon: "h-10 w-10" }
  };

const AuthIcon = ({
  Icon,
  variant = "blue",
  shape = "rounded",
  size = "md",
  animated = false,
  className
}: {
  Icon: ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
  >;
  variant?: AuthIconVariant;
  shape?: AuthIconShape;
  size?: AuthIconSize;
  animated?: boolean;
  className?: string;
}) => {
  const sizeClasses = SIZE_CLASSES[size];

  const content = (
    <div
      className={cn(
        "inline-flex items-center justify-center bg-gradient-to-br",
        sizeClasses.container,
        VARIANT_CLASSES[variant],
        SHAPE_CLASSES[shape],
        className
      )}
    >
      <Icon className={cn("text-white", sizeClasses.icon)} />
    </div>
  );

  if (animated) {
    return (
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
          delay: 0.1
        }}
      >
        {content}
      </motion.div>
    );
  }

  return content;
};

export default AuthIcon;
