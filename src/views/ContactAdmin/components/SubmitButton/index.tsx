"use client";

// libs
import { useTranslations } from "next-intl";
// components
import { Button } from "@/components/ui/button";

const SubmitButton = ({ isSubmitting }: { isSubmitting: boolean }) => {
  const t = useTranslations("contactAdmin.form.button");

  return (
    <Button
      type="submit"
      disabled={isSubmitting}
      className="h-12 w-full bg-purple-600 transition-all duration-200 hover:bg-purple-700 hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-50"
    >
      {isSubmitting ? (
        <span className="flex items-center justify-center gap-2">
          <span className="h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent" />
          <span>{t("submitting")}</span>
        </span>
      ) : (
        t("submit")
      )}
    </Button>
  );
};

export default SubmitButton;
