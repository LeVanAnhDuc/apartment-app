// libs
import React from "react";
import { useTheme } from "next-themes";
import { useTranslations } from "next-intl";
// components
import {
  DropdownMenuItem,
  DropdownMenuLabel
} from "@/components/ui/dropdown-menu";
// dataSources
import { getTranslatedMenuItems } from "@/dataSources/AvatarDropdown";

const MenuItems = () => {
  const t = useTranslations("common");
  const { setTheme } = useTheme();

  const handleToggleTheme = () =>
    setTheme((prev) => (prev === "light" ? "dark" : "light"));

  const menuItems = getTranslatedMenuItems(t, handleToggleTheme);

  return (
    <>
      <DropdownMenuLabel className="text-muted-foreground px-3 text-xs font-semibold tracking-wider uppercase transition-colors duration-300">
        {t("avatarDropdown.account")}
      </DropdownMenuLabel>

      {menuItems.map((item) => (
        <DropdownMenuItem
          key={item.key}
          onClick={item.action}
          className="group focus:bg-accent focus:text-accent-foreground dark:focus:bg-accent/50 cursor-pointer px-3 py-2 transition-colors duration-300"
        >
          <div className="flex w-full items-center gap-3">
            <div className="group-hover:text-accent-foreground group-hover:bg-accent dark:group-hover:bg-accent/50 flex h-9 w-9 items-center justify-center rounded-lg transition-colors duration-300">
              <item.icon className="text-muted-foreground group-hover:text-accent-foreground size-4 transition-colors duration-300" />
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-foreground text-sm font-medium transition-colors duration-300">
                {item.label}
              </p>
              <p className="text-muted-foreground truncate text-xs transition-colors duration-300">
                {item.description}
              </p>
            </div>
          </div>
        </DropdownMenuItem>
      ))}
    </>
  );
};

export default MenuItems;
