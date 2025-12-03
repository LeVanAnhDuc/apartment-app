// types
import type { ReactNode } from "react";
// components
import AuthHeader from "@/components/AuthHeader";
import AuthFooter from "@/components/AuthFooter";

export default function ContactAdminLayout({
  children
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <>
      <AuthHeader />
      <main className="auth-background flex min-h-screen flex-col items-center justify-center p-4 pt-20">
        {children}
        <AuthFooter />
      </main>
    </>
  );
}
