"use client";

// libs
import { useTranslations } from "next-intl";
// components
import CustomButton from "@/components/CustomButton";

const SubmitButton = ({ isSubmitting }: { isSubmitting: boolean }) => {
  const t = useTranslations("contactAdmin.form.button");

  return (
    <CustomButton
      type="submit"
      loading={isSubmitting}
      fullWidth
      className="h-12 bg-purple-600 transition-all duration-200 hover:bg-purple-700 hover:shadow-lg"
    >
      {isSubmitting ? t("submitting") : t("submit")}
    </CustomButton>
  );
};

export default SubmitButton;
