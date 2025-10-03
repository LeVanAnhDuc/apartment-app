// libs
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";
import { getTranslations } from "next-intl/server";
// types
import type { ReactNode } from "react";
import type { Locale } from "@/i18n/config";
// components
import Header from "@/components/Header";
import ProvidersReactQuery from "@/contexts/ProvidersReactQuery";
// others
import { routing } from "@/i18n/routing";
import "./globals.css";

export const generateStaticParams = () =>
  routing.locales.map((locale) => ({ locale }));

export async function generateMetadata({
  params
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "common.app" });

  return {
    title: t("name"),
    description: t("description")
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
        <ProvidersReactQuery>
          <NextIntlClientProvider>
            <Header />
            <div className="min-h-[calc(100vh-4rem)] pt-16">{children}</div>
          </NextIntlClientProvider>
        </ProvidersReactQuery>
      </body>
    </html>
  );
}
