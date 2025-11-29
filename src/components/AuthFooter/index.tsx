"use client";

import Link from "next/link";
import { useTranslations } from "next-intl";

const AuthFooter = () => {
  const t = useTranslations("common.footer");

  return (
    <div className="mt-6 text-center">
      <div className="text-muted-foreground flex items-center justify-center gap-4 text-sm">
        <Link
          href="#"
          className="hover:text-foreground transition-colors duration-200"
        >
          {t("help")}
        </Link>
        <span>•</span>
        <Link
          href="#"
          className="hover:text-foreground transition-colors duration-200"
        >
          {t("privacy")}
        </Link>
        <span>•</span>
        <Link
          href="#"
          className="hover:text-foreground transition-colors duration-200"
        >
          {t("terms")}
        </Link>
      </div>
    </div>
  );
};

export default AuthFooter;
