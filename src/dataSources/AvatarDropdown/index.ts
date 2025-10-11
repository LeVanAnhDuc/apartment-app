// libs
import { User, Settings, Moon } from "lucide-react";
// types
import type { useTranslations as useTranslationsType } from "next-intl";

export const getTranslatedMenuItems = (
  t: ReturnType<typeof useTranslationsType<"common">>,
  toggleTheme?: () => void
) => [
  {
    key: "profile",
    icon: User,
    label: t("avatarDropdown.profile"),
    description: t("avatarDropdown.profileDescription"),
    action: () => console.log("Profile clicked")
  },
  {
    key: "settings",
    icon: Settings,
    label: t("avatarDropdown.settings"),
    description: t("avatarDropdown.settingsDescription"),
    action: () => console.log("Settings clicked")
  },
  {
    key: "darkMode",
    icon: Moon,
    label: t("avatarDropdown.darkMode"),
    description: t("avatarDropdown.darkModeDescription"),
    action: toggleTheme
  }
];
