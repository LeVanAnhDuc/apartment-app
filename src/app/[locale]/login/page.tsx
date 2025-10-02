// libs
import { getTranslations } from "next-intl/server";
// types
import type { Locale } from "@/i18n/config";
// components
import Login from "@/views/Login";

export async function generateMetadata({
  params
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "login" });

  return {
    title: t("title")
  };
}

export default Login;
