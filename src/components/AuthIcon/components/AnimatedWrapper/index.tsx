"use client";

// libs
import type { ReactNode } from "react";
import { motion } from "framer-motion";

const AnimatedWrapper = ({ children }: { children: ReactNode }) => (
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
    {children}
  </motion.div>
);

export default AnimatedWrapper;
