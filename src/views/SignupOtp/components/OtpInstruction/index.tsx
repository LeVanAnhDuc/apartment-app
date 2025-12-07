"use client";

// libs
import { motion } from "framer-motion";

const OtpInstruction = ({ label }: { label: string }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 0.4 }}
    className="mb-6"
  >
    <div className="rounded-lg bg-green-50 p-4 dark:bg-green-900/20">
      <p className="text-muted-foreground text-center text-sm">{label}</p>
    </div>
  </motion.div>
);

export default OtpInstruction;
