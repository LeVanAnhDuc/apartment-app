"use client";

// libs
import Link from "next/link";
import { useTranslations } from "next-intl";

const TermsNotice = () => {
  const t = useTranslations("signup.emailStep");

  return (
    <div className="mt-8 text-center">
      <p className="text-muted-foreground text-sm">
        {t("termsNotice.prefix")}{" "}
        <Link
          href="#"
          className="text-primary transition-colors duration-200 hover:underline"
        >
          {t("termsNotice.terms")}
        </Link>{" "}
        {t("termsNotice.and")}{" "}
        <Link
          href="#"
          className="text-primary transition-colors duration-200 hover:underline"
        >
          {t("termsNotice.privacy")}
        </Link>
      </p>
    </div>
  );
};

export default TermsNotice;
