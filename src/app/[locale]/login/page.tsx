// libs
import { getTranslations } from "next-intl/server";
// components
import Login from "@/views/Login";

export async function generateMetadata({
  params
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "login" });

  return {
    title: t("title")
  };
}

export default Login;
