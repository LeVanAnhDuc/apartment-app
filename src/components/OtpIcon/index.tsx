"use client";

// libs
import { motion } from "framer-motion";
import { Lock } from "lucide-react";

const OtpIcon = () => (
  <motion.div
    initial={{ scale: 0 }}
    animate={{ scale: 1 }}
    transition={{
      type: "spring",
      stiffness: 260,
      damping: 20,
      delay: 0.1
    }}
    className="mb-4 inline-flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-blue-600"
  >
    <Lock className="h-10 w-10 text-white" />
  </motion.div>
);

export default OtpIcon;
