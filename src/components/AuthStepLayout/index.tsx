// libs
import type { ReactNode } from "react";
// components
import EmailBadge from "@/components/EmailBadge";
import AnimatedCard from "./components/AnimatedCard";
import AnimatedText from "./components/AnimatedText";
import BackButtonClient from "./components/BackButtonClient";

type MaxWidth = "md" | "2xl";

const AuthStepLayout = ({
  icon,
  title,
  description,
  email,
  backButton,
  onBack,
  backDisabled = false,
  maxWidth = "md",
  children,
  ghostComponents
}: {
  icon: ReactNode;
  title: string;
  description?: string;
  email?: string;
  backButton?: ReactNode;
  onBack?: () => void;
  backDisabled?: boolean;
  maxWidth?: MaxWidth;
  children: ReactNode;
  ghostComponents?: ReactNode;
}) => (
  <main className="auth-background flex items-center justify-center">
    <AnimatedCard maxWidth={maxWidth}>
      <div className="auth-card relative p-8 md:p-10">
        {backButton}

        {onBack && !backButton && (
          <BackButtonClient onBack={onBack} disabled={backDisabled} />
        )}

        <div className="mb-8 text-center">
          <div className="mb-4 flex justify-center">{icon}</div>

          <AnimatedText>
            <h1 className="text-foreground mb-2 text-2xl font-medium">
              {title}
            </h1>
            {description && (
              <p className="text-muted-foreground mb-4">{description}</p>
            )}
          </AnimatedText>
        </div>

        {email && <EmailBadge email={email} />}

        {children}
      </div>
    </AnimatedCard>

    {ghostComponents}
  </main>
);

export default AuthStepLayout;
