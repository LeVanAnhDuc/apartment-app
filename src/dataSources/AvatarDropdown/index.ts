// libs
import { User, Settings, Moon, Sun } from "lucide-react";
// types
import type { useTranslations as useTranslationsType } from "next-intl";

export const getTranslatedMenuItems = (
  t: ReturnType<typeof useTranslationsType<"common">>,
  toggleTheme?: () => void,
  currentTheme?: string | undefined,
  onProfileClick?: () => void,
  onSettingsClick?: () => void
) => {
  const isDarkMode = currentTheme === "dark";

  return [
    {
      key: "profile",
      icon: User,
      label: t("avatarDropdown.profile"),
      description: t("avatarDropdown.profileDescription"),
      action: onProfileClick || (() => {})
    },
    {
      key: "settings",
      icon: Settings,
      label: t("avatarDropdown.settings"),
      description: t("avatarDropdown.settingsDescription"),
      action: onSettingsClick || (() => {})
    },
    {
      key: "themeToggle",
      icon: isDarkMode ? Sun : Moon,
      label: isDarkMode
        ? t("avatarDropdown.lightMode")
        : t("avatarDropdown.darkMode"),
      description: isDarkMode
        ? t("avatarDropdown.lightModeDescription")
        : t("avatarDropdown.darkModeDescription"),
      action: toggleTheme
    }
  ];
};
