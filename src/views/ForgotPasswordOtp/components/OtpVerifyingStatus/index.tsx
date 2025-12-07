"use client";

// libs
import { motion } from "framer-motion";

const OtpVerifyingStatus = ({ label }: { label: string }) => (
  <motion.p
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    className="text-center text-sm text-orange-600"
  >
    <span className="flex items-center justify-center gap-2">
      <span className="h-4 w-4 animate-spin rounded-full border-2 border-orange-600 border-t-transparent" />
      <span>{label}</span>
    </span>
  </motion.p>
);

export default OtpVerifyingStatus;
