// libs
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";
import { getTranslations } from "next-intl/server";
// types
import type { ReactNode } from "react";
// others
import { routing } from "@/i18n/routing";
import "./globals.css";

export const generateStaticParams = () =>
  routing.locales.map((locale) => ({ locale }));

export async function generateMetadata({
  params
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "common" });

  return {
    title: t("app.name"),
    description: t("app.description")
  };
}

export default async function RootLayout({
  children,
  params
}: Readonly<{
  children: ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider>{children}</NextIntlClientProvider>
      </body>
    </html>
  );
}
