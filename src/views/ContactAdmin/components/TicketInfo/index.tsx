"use client";

// libs
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { Mail } from "lucide-react";
// types
import type { ContactAdminFormValues } from "@/types/ContactAdmin";
// dataSources
import { PRIORITY_STYLES } from "@/dataSources/ContactAdmin";

const TicketInfo = ({
  ticketNumber,
  formData
}: {
  ticketNumber: string;
  formData: ContactAdminFormValues;
}) => {
  const t = useTranslations("contactAdmin.success.ticketInfo");
  const tCategory = useTranslations("contactAdmin.form.category");
  const tPriority = useTranslations("contactAdmin.form.priority");

  const priorityStyle =
    PRIORITY_STYLES[formData.priority as keyof typeof PRIORITY_STYLES] ||
    PRIORITY_STYLES.medium;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4 }}
      className="mb-8 rounded-xl border-2 border-blue-200 bg-gradient-to-br from-blue-50 to-indigo-50 p-6 dark:border-blue-800 dark:from-blue-950/30 dark:to-indigo-950/30"
    >
      <div className="mb-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Mail className="h-5 w-5 text-blue-600 dark:text-blue-400" />
          <span className="text-sm text-blue-900 dark:text-blue-100">
            {t("title")}
          </span>
        </div>
        <span className="rounded-full bg-blue-100 px-3 py-1 font-mono text-sm text-blue-700 dark:bg-blue-900/50 dark:text-blue-300">
          {ticketNumber}
        </span>
      </div>

      <div className="space-y-3">
        <div className="flex items-start justify-between">
          <span className="text-muted-foreground text-sm">
            {t("labelSubject")}
          </span>
          <span className="text-foreground ml-4 flex-1 text-right text-sm">
            {formData.subject}
          </span>
        </div>

        <div className="flex items-start justify-between">
          <span className="text-muted-foreground text-sm">
            {t("labelCategory")}
          </span>
          <span className="text-foreground text-sm">
            {tCategory(
              formData.category as
                | "account"
                | "technical"
                | "feature"
                | "billing"
                | "security"
                | "other"
            )}
          </span>
        </div>

        <div className="flex items-start justify-between">
          <span className="text-muted-foreground text-sm">
            {t("labelPriority")}
          </span>
          <span className={`rounded-full px-2 py-0.5 text-sm ${priorityStyle}`}>
            {tPriority(formData.priority as "low" | "medium" | "high")}
          </span>
        </div>
      </div>
    </motion.div>
  );
};

export default TicketInfo;
