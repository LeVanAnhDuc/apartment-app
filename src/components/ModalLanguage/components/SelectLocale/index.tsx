"use client";
// libs
import { Check, Loader } from "lucide-react";
import { hasLocale, useLocale } from "next-intl";
import { useState, useTransition } from "react";
// types
import { localeNames, type Locale } from "@/i18n/config";
// components
import CustomButton from "@/components/CustomButton";
// others
import { usePathname, useRouter } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";

const SelectLocale = () => {
  const localActive = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [pending, startTransition] = useTransition();
  const [pendingLocale, setPendingLocale] = useState<Locale | null>(null);

  const handleLanguageChange = async (newLocale: Locale) => {
    if (newLocale === localActive || !hasLocale(routing.locales, newLocale))
      return;

    setPendingLocale(newLocale);

    startTransition(() => {
      router.replace(pathname, { locale: newLocale });
    });
  };

  const getRightIcon = (locale: Locale) => {
    if (locale === localActive) return <Check />;

    if (pending && locale === pendingLocale)
      return (
        <span className="animate-spin">
          <Loader />
        </span>
      );

    return null;
  };

  return (
    <main className="@container space-y-4">
      <h3 className="text-xl font-semibold">Chọn ngôn ngữ và khu vực</h3>
      <div className="grid grid-cols-1 gap-3 @sm:grid-cols-2 @lg:grid-cols-3 @xl:grid-cols-4 @2xl:grid-cols-5">
        {routing.locales.map((locale) => (
          <CustomButton
            key={locale}
            variant={"outline"}
            disabled={pending}
            onClick={() => handleLanguageChange(locale)}
            className={`h-11 ${localActive === locale && "border-gray-900"}`}
            iconRight={getRightIcon(locale)}
          >
            <div className="font-medium text-gray-900">
              {localeNames[locale]}
            </div>
          </CustomButton>
        ))}
      </div>
    </main>
  );
};

export default SelectLocale;
