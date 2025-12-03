"use client";

// libs
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

const ImportantNotes = ({ ticketNumber }: { ticketNumber: string }) => {
  const t = useTranslations("contactAdmin.success.importantNotes");

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.9 }}
      className="mb-8 rounded-xl border border-amber-200 bg-amber-50 p-4 dark:border-amber-800 dark:bg-amber-950/30"
    >
      <p className="mb-2 text-sm text-amber-900 dark:text-amber-100">
        📌 {t("title")}
      </p>
      <ul className="list-inside list-disc space-y-1 text-xs text-amber-800 dark:text-amber-200">
        <li>{t("note1", { ticketNumber })}</li>
        <li>{t("note2")}</li>
        <li>{t("note3")}</li>
      </ul>
    </motion.div>
  );
};

export default ImportantNotes;
