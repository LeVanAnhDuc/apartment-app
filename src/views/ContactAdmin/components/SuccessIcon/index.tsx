"use client";

// libs
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const SuccessIcon = () => (
  <motion.div
    initial={{ scale: 0 }}
    animate={{ scale: 1 }}
    transition={{
      type: "spring",
      stiffness: 200,
      damping: 15,
      delay: 0.1
    }}
    className="relative mb-6 inline-flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-green-500 to-emerald-600"
  >
    <CheckCircle2 className="h-14 w-14 text-white" />

    <motion.div
      className="absolute inset-0 rounded-full bg-green-500"
      animate={{
        scale: [1, 1.3, 1],
        opacity: [0.5, 0, 0.5]
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    />
    <motion.div
      className="absolute inset-0 rounded-full bg-green-500"
      animate={{
        scale: [1, 1.5, 1],
        opacity: [0.3, 0, 0.3]
      }}
      transition={{
        duration: 2,
        delay: 0.5,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    />
  </motion.div>
);

export default SuccessIcon;
