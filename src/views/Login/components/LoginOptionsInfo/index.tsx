"use client";

// libs
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

const ANIMATION_DELAY = 0.4;

const LoginOptionsInfo = () => {
  const t = useTranslations("login.form");

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: ANIMATION_DELAY }}
      className="bg-primary/5 mt-6 rounded-lg p-4"
    >
      <p className="text-muted-foreground text-center text-sm">
        {t("descriptionChooseMethod")}
      </p>
    </motion.div>
  );
};

export default LoginOptionsInfo;
