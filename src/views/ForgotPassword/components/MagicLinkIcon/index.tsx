"use client";

// libs
import { motion } from "framer-motion";
import { Mail, Check } from "lucide-react";

const MagicLinkIcon = () => (
  <motion.div
    initial={{ scale: 0 }}
    animate={{ scale: 1 }}
    transition={{
      type: "spring",
      stiffness: 260,
      damping: 20,
      delay: 0.1
    }}
    className="relative mb-4 inline-flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-orange-500 to-orange-600"
  >
    <Mail className="h-10 w-10 text-white" />
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 0.5 }}
      className="absolute -top-1 -right-1 flex h-7 w-7 items-center justify-center rounded-full border-4 border-white bg-green-500"
    >
      <Check className="h-4 w-4 text-white" />
    </motion.div>
  </motion.div>
);

export default MagicLinkIcon;
