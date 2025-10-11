// types
import type { ReactNode } from "react";
// components
import ModalSelectAndAvatar from "@/components/ModalSelectAndAvatar";

export default function Layout({
  children
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <div className="min-h-screen">
      <ModalSelectAndAvatar />
      {children}
    </div>
  );
}
