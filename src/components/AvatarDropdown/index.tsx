"use client";
// libs
import React from "react";
// components
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import AvatarUser from "./components/AvatarUser";
import CustomButton from "../CustomButton";
import UserInfoHeader from "./mains/UserInfoHeader";
import MenuItems from "./mains/MenuItems";
import SignoutItem from "./mains/SignoutItem";

const AvatarDropdown = () => (
  <DropdownMenu>
    <DropdownMenuTrigger asChild>
      <CustomButton
        variant={"ghost"}
        className="group size-9 rounded-full p-0 focus:outline-none"
      >
        <AvatarUser />
      </CustomButton>
    </DropdownMenuTrigger>

    <DropdownMenuContent
      className="dark:bg-popover dark:text-popover-foreground w-72 overflow-hidden rounded-xl border-0 p-2 shadow-2xl transition-all duration-300"
      align="end"
    >
      <UserInfoHeader />
      <DropdownMenuSeparator className="dark:bg-border" />
      <MenuItems />
      <DropdownMenuSeparator className="dark:bg-border" />
      <SignoutItem />
    </DropdownMenuContent>
  </DropdownMenu>
);

export default AvatarDropdown;
