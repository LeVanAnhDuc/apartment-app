"use client";

// libs
import type { ReactNode } from "react";
import { motion } from "framer-motion";
// components
import BackButton from "@/views/Login/components/BackButton";
import EmailBadge from "@/components/EmailBadge";
import AuthFooter from "@/components/AuthFooter";

const AuthStepLayout = ({
  icon,
  title,
  description,
  email,
  onBack,
  backDisabled = false,
  children,
  ghostComponents
}: {
  icon: ReactNode;
  title: string;
  description: string;
  email: string;
  onBack: () => void;
  backDisabled?: boolean;
  children: ReactNode;
  ghostComponents?: ReactNode;
}) => (
  <main className="auth-background flex min-h-screen items-center justify-center p-4">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className="w-full max-w-md"
    >
      <div className="auth-card relative p-8 md:p-10">
        <BackButton onClick={onBack} disabled={backDisabled} />

        <div className="mb-8 text-center">
          <div className="mb-4 flex justify-center">{icon}</div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h1 className="text-foreground mb-2 text-2xl font-medium">
              {title}
            </h1>
            <p className="text-muted-foreground mb-4">{description}</p>
          </motion.div>
        </div>

        <EmailBadge email={email} />

        {children}
      </div>

      <AuthFooter />
    </motion.div>

    {ghostComponents}
  </main>
);

export default AuthStepLayout;
