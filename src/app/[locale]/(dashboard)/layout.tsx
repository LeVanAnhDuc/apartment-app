// types
import type { ReactNode } from "react";
// components
import Header from "@/components/Header";

export default function Layout({
  children
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <main>
      <Header />
      <div className="min-h-[calc(100vh-4rem)] pt-16">{children}</div>
    </main>
  );
}
