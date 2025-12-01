"use client";

// libs
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

const OtpVerifyingStatus = () => {
  const t = useTranslations("forgotPassword.form.otp");

  return (
    <motion.p
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="text-center text-sm text-orange-600"
    >
      <span className="flex items-center justify-center gap-2">
        <span className="h-4 w-4 animate-spin rounded-full border-2 border-orange-600 border-t-transparent" />
        <span>{t("verifying")}</span>
      </span>
    </motion.p>
  );
};

export default OtpVerifyingStatus;
