"use client";

// libs
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

const OtpInstruction = () => {
  const t = useTranslations("signup.otpStep");

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.4 }}
      className="mb-6"
    >
      <div className="rounded-lg bg-green-50 p-4 dark:bg-green-900/20">
        <p className="text-muted-foreground text-center text-sm">
          {t("instruction")}
        </p>
      </div>
    </motion.div>
  );
};

export default OtpInstruction;
