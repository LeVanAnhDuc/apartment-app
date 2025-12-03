// types
import type { ReactNode } from "react";
// components
import AuthHeader from "@/components/AuthHeader";

export default function Layout({
  children
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <div className="min-h-screen">
      <AuthHeader />
      {children}
    </div>
  );
}
