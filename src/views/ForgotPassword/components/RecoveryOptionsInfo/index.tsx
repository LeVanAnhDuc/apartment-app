"use client";

// libs
import { motion } from "framer-motion";

const RecoveryOptionsInfo = ({ hint }: { hint: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.4 }}
    className="mt-6 rounded-lg border border-amber-200 bg-amber-50 p-4"
  >
    <p className="text-center text-sm text-gray-700">💡 {hint}</p>
  </motion.div>
);

export default RecoveryOptionsInfo;
