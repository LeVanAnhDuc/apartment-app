"use client";

// libs
import { useCallback } from "react";
import { useTranslations } from "next-intl";
import { Mail, Smartphone, KeyRound, Headset } from "lucide-react";
// components
import BackButton from "../../components/BackButton";
import EmailBadge from "@/components/EmailBadge";
import AuthIcon from "@/components/AuthIcon";
import AuthFooter from "@/components/AuthFooter";
import LoginOptionCard from "../../components/LoginOptionCard";
import LoginOptionsInfo from "../../components/LoginOptionsInfo";
// stores
import { useLoginStore } from "@/stores";

const ANIMATION_DELAY_STEP = 0.1;

const AlternativeLoginMain = () => {
  const t = useTranslations("login.form");
  const tAlt = useTranslations("login.form.alternative");
  const email = useLoginStore((state) => state.email);
  const goToPasswordStep = useLoginStore((state) => state.goToPasswordStep);
  const goToEmailStep = useLoginStore((state) => state.goToEmailStep);

  const handleSelectPassword = useCallback(() => {
    goToPasswordStep(email);
  }, [email, goToPasswordStep]);

  const handleSelectMagicLink = useCallback(() => {
    // TODO: Implement magic link flow
  }, []);

  const handleSelectOTP = useCallback(() => {
    // TODO: Implement OTP flow
  }, []);

  const handleContactAdmin = useCallback(() => {
    // TODO: Implement contact admin flow
  }, []);

  return (
    <main className="auth-background flex min-h-screen items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="auth-card relative p-8 md:p-10">
          <BackButton onClick={goToEmailStep} />

          <div className="mb-8 text-center">
            <div className="mb-4 flex justify-center">
              <AuthIcon Icon={KeyRound} />
            </div>
            <h1 className="text-foreground mb-2 text-2xl font-medium">
              {t("titleChooseMethod")}
            </h1>
          </div>

          <EmailBadge email={email} />

          <div className="space-y-3">
            <LoginOptionCard
              icon={Mail}
              title={tAlt("magicLink.title")}
              description={tAlt("magicLink.description")}
              colorVariant="orange"
              onClick={handleSelectMagicLink}
              animationDelay={0}
            />
            <LoginOptionCard
              icon={Smartphone}
              title={tAlt("otp.title")}
              description={tAlt("otp.description")}
              colorVariant="blue"
              onClick={handleSelectOTP}
              animationDelay={ANIMATION_DELAY_STEP}
            />
            <LoginOptionCard
              icon={KeyRound}
              title={tAlt("password.title")}
              description={tAlt("password.description")}
              colorVariant="green"
              onClick={handleSelectPassword}
              animationDelay={ANIMATION_DELAY_STEP * 2}
            />
            <LoginOptionCard
              icon={Headset}
              title={tAlt("contactAdmin.title")}
              description={tAlt("contactAdmin.description")}
              colorVariant="purple"
              onClick={handleContactAdmin}
              animationDelay={ANIMATION_DELAY_STEP * 3}
            />
          </div>

          <LoginOptionsInfo />
        </div>

        <AuthFooter />
      </div>
    </main>
  );
};

export default AlternativeLoginMain;
