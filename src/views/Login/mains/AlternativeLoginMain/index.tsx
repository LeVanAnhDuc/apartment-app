"use client";

// libs
import { useCallback } from "react";
import { useRouter, usePathname } from "next/navigation";
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
import { useLoginStore, useContactAdminStore } from "@/stores";
// hooks
import { useEmailGuard } from "@/hooks";
// others
import CONSTANTS from "@/constants";

const ANIMATION_DELAY_STEP = 0.1;

const { CONTACT_ADMIN } = CONSTANTS.ROUTES;

const AlternativeLoginMain = () => {
  const t = useTranslations("login.form");
  const tAlt = useTranslations("login.form.alternative");
  const router = useRouter();
  const pathname = usePathname();

  const email = useLoginStore((state) => state.email);

  const { hasEmail } = useEmailGuard({ email });
  const goToPasswordStep = useLoginStore((state) => state.goToPasswordStep);
  const goToOtpStep = useLoginStore((state) => state.goToOtpStep);
  const goToMagicLinkStep = useLoginStore((state) => state.goToMagicLinkStep);
  const goToEmailStep = useLoginStore((state) => state.goToEmailStep);

  const setContactAdminEmail = useContactAdminStore((state) => state.setEmail);
  const setContactAdminReferrer = useContactAdminStore(
    (state) => state.setReferrerPath
  );

  const handleSelectPassword = useCallback(() => {
    goToPasswordStep(email);
  }, [email, goToPasswordStep]);

  const handleSelectMagicLink = useCallback(() => {
    goToMagicLinkStep();
  }, [goToMagicLinkStep]);

  const handleSelectOTP = useCallback(() => {
    goToOtpStep();
  }, [goToOtpStep]);

  const handleContactAdmin = useCallback(() => {
    setContactAdminEmail(email, true);
    setContactAdminReferrer(pathname);
    router.push(CONTACT_ADMIN);
  }, [email, pathname, router, setContactAdminEmail, setContactAdminReferrer]);

  if (!hasEmail) return null;

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
