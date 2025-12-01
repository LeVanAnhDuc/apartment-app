"use client";

// libs
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

const ANIMATION_DELAY = 0.3;

const MagicLinkInstructions = () => {
  const t = useTranslations("forgotPassword.form.magicLink");

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: ANIMATION_DELAY }}
      className="mb-6 space-y-4"
    >
      <div className="rounded-lg bg-blue-50 p-4">
        <p className="text-sm text-gray-700">
          <span className="mb-2 block">📧 {t("instruction.checkEmail")}</span>
          {t("instruction.clickLink")}
        </p>
      </div>

      <div className="rounded-lg border border-yellow-200 bg-yellow-50 p-4">
        <p className="text-sm text-gray-700">
          💡 <span>{t("checkSpam")}</span>
        </p>
      </div>
    </motion.div>
  );
};

export default MagicLinkInstructions;
