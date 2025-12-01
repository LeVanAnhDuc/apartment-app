"use client";

// libs
import { useTranslations } from "next-intl";

const PasswordRequirements = () => {
  const t = useTranslations("forgotPassword.form.newPassword.requirements");

  return (
    <div className="rounded-lg bg-amber-50 p-4">
      <p className="mb-2 text-sm text-gray-700">{t("title")}</p>
      <ul className="list-inside list-disc space-y-1 text-sm text-gray-600">
        <li>{t("minLength")}</li>
        <li>{t("uppercase")}</li>
        <li>{t("number")}</li>
      </ul>
    </div>
  );
};

export default PasswordRequirements;
