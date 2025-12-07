"use client";

// libs
import type { ReactNode } from "react";
import { motion } from "framer-motion";

const AnimatedText = ({ children }: { children: ReactNode }) => (
  <motion.div
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.2 }}
  >
    {children}
  </motion.div>
);

export default AnimatedText;
