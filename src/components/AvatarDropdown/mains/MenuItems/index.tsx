// libs
import React from "react";
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

  const menuItems = getTranslatedMenuItems(t);

  return (
    <>
      <DropdownMenuLabel className="px-3 text-xs font-semibold tracking-wider text-slate-500 uppercase">
        {t("avatarDropdown.account")}
      </DropdownMenuLabel>

      {menuItems.map((item) => (
        <DropdownMenuItem
          key={item.key}
          onClick={item.action}
          className="group cursor-pointer px-3 py-2 transition-colors focus:bg-slate-50"
        >
          <div className="flex w-full items-center gap-3">
            <div className="group-hover:text-accent-foreground group-hover:bg-accent flex h-9 w-9 items-center justify-center rounded-lg transition-colors">
              <item.icon className="size-4" />
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-sm font-medium">{item.label}</p>
              <p className="truncate text-xs text-slate-500">
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
