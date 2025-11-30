"use client";

// libs
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

const OtpInstruction = () => {
  const t = useTranslations("login.form.otp");

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.4 }}
      className="mb-6"
    >
      <div className="bg-primary/5 rounded-lg p-4">
        <p className="text-muted-foreground text-center text-sm">
          {t("instruction")}
        </p>
      </div>
    </motion.div>
  );
};

export default OtpInstruction;
