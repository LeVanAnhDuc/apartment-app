"use client";

// libs
import { motion } from "framer-motion";
import { AlertCircle } from "lucide-react";
// types
import type { ContactAdminMessages } from "@/types/libs";
// others
import CONSTANTS from "@/constants";

const { RESPONSE_HOURS } = CONSTANTS.CONTACT_ADMIN;

const ResponseTimeAlert = ({
  labels
}: {
  labels: ContactAdminMessages["form"]["responseTime"];
}) => (
  <motion.div
    initial={{ opacity: 0, y: -10 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.2 }}
    className="mb-6 flex items-start gap-3 rounded-xl border border-blue-200 bg-blue-50 p-4 dark:border-blue-800 dark:bg-blue-950/30"
  >
    <AlertCircle className="mt-0.5 h-5 w-5 shrink-0 text-blue-600 dark:text-blue-400" />
    <div>
      <p className="mb-1 text-sm text-blue-900 dark:text-blue-100">
        {labels.title}
      </p>
      <p className="text-xs text-blue-700 dark:text-blue-300">
        {labels.description.replace("{hours}", String(RESPONSE_HOURS))}
      </p>
    </div>
  </motion.div>
);

export default ResponseTimeAlert;
