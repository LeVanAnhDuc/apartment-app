"use client";

// libs
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

const ANIMATION_DELAY = 0.4;

const RecoveryOptionsInfo = () => {
  const t = useTranslations("forgotPassword.form.options");

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: ANIMATION_DELAY }}
      className="mt-6 rounded-lg border border-amber-200 bg-amber-50 p-4"
    >
      <p className="text-center text-sm text-gray-700">💡 {t("hint")}</p>
    </motion.div>
  );
};

export default RecoveryOptionsInfo;
