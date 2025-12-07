"use client";

// libs
import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { cn } from "@/libs/utils";

type MaxWidth = "md" | "2xl";

const maxWidthClasses: Record<MaxWidth, string> = {
  md: "max-w-md",
  "2xl": "max-w-2xl"
};

const AnimatedCard = ({
  maxWidth = "md",
  children
}: {
  maxWidth?: MaxWidth;
  children: ReactNode;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.3 }}
    className={cn("w-full", maxWidthClasses[maxWidth])}
  >
    {children}
  </motion.div>
);

export default AnimatedCard;
