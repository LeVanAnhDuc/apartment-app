// libs
import React from "react";
// components
import ModalLanguage from "@/components/ModalLanguage";
import AvatarDropdown from "@/components/AvatarDropdown";

const ModalSelectAndAvatar = () => (
  <div className="fixed top-4 right-4 z-50 flex items-center gap-2">
    <ModalLanguage />
    <AvatarDropdown />
  </div>
);

export default ModalSelectAndAvatar;
