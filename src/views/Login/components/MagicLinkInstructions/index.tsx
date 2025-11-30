"use client";

// libs
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

const MagicLinkInstructions = () => {
  const t = useTranslations("login.form.magicLink");

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.3 }}
      className="mb-6 space-y-4"
    >
      <div className="bg-primary/5 rounded-lg p-4">
        <p className="text-foreground text-sm">
          <span className="mb-2 block">{t("instruction.check")}</span>
          {t("instruction.detail")}
        </p>
      </div>

      <div className="rounded-lg border border-yellow-200 bg-yellow-50 p-4 dark:border-yellow-800 dark:bg-yellow-950/30">
        <p className="text-foreground text-sm">
          <span className="font-medium">{t("hint.title")}</span>{" "}
          {t("hint.description")}
        </p>
      </div>
    </motion.div>
  );
};

export default MagicLinkInstructions;
