"use client";

// libs
import { useTranslations } from "next-intl";

const OtpInstructionBox = () => {
  const t = useTranslations("forgotPassword.form.otp");

  return (
    <div className="mb-6 rounded-lg bg-amber-50 p-4">
      <p className="text-center text-sm text-gray-700">{t("instruction")}</p>
    </div>
  );
};

export default OtpInstructionBox;
