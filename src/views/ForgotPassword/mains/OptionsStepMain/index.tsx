"use client";

// libs
import { useCallback } from "react";
import { useRouter, usePathname } from "next/navigation";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Smartphone, Mail, ShieldCheck, Headset, KeyRound } from "lucide-react";
// components
import BackButton from "@/views/Login/components/BackButton";
import EmailBadge from "@/components/EmailBadge";
import AuthFooter from "@/components/AuthFooter";
import AuthIcon from "@/components/AuthIcon";
import RecoveryOptionCard from "../../components/RecoveryOptionCard";
import RecoveryOptionsInfo from "../../components/RecoveryOptionsInfo";
// stores
import { useForgotPasswordStore, useContactAdminStore } from "@/stores";
// hooks
import { useEmailGuard } from "@/hooks";
// others
import CONSTANTS from "@/constants";

const ANIMATION_DELAY_STEP = 0.1;

const OptionsStepMain = ({
  has2FAEnabled = false
}: {
  has2FAEnabled?: boolean;
}) => {
  const router = useRouter();
  const pathname = usePathname();
  const t = useTranslations("forgotPassword.form.options");

  const email = useForgotPasswordStore((state) => state.email);

  const { hasEmail } = useEmailGuard({ email });
  const goToOtpStep = useForgotPasswordStore((state) => state.goToOtpStep);
  const goToMagicLinkStep = useForgotPasswordStore(
    (state) => state.goToMagicLinkStep
  );

  const setContactAdminEmail = useContactAdminStore((state) => state.setEmail);
  const setContactAdminReferrer = useContactAdminStore(
    (state) => state.setReferrerPath
  );

  const handleBackToLogin = useCallback(() => {
    router.push(CONSTANTS.ROUTES.LOGIN);
  }, [router]);

  const handleSelectOtp = useCallback(() => {
    goToOtpStep();
  }, [goToOtpStep]);

  const handleSelectMagicLink = useCallback(() => {
    goToMagicLinkStep();
  }, [goToMagicLinkStep]);

  const handleSelect2FA = useCallback(() => {
    // TODO: Implement 2FA recovery flow
  }, []);

  const handleContactAdmin = useCallback(() => {
    setContactAdminEmail(email, true);
    setContactAdminReferrer(pathname);
    router.push(CONSTANTS.ROUTES.CONTACT_ADMIN);
  }, [email, pathname, router, setContactAdminEmail, setContactAdminReferrer]);

  if (!hasEmail) return null;

  return (
    <main className="auth-background flex min-h-screen items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.3 }}
        className="w-full max-w-md"
      >
        <div className="auth-card relative p-8 md:p-10">
          <BackButton onClick={handleBackToLogin} />

          <div className="mb-8 text-center">
            <div className="mb-4 flex justify-center">
              <AuthIcon Icon={KeyRound} variant="orange" animated />
            </div>
            <h1 className="text-foreground mb-2 text-2xl font-medium">
              {t("title")}
            </h1>
          </div>

          <EmailBadge email={email} />

          <p className="text-muted-foreground mb-6 text-center">
            {t("description")}
          </p>

          <div className="space-y-3">
            <RecoveryOptionCard
              icon={Smartphone}
              title={t("otp.title")}
              description={t("otp.description")}
              colorVariant="blue"
              onClick={handleSelectOtp}
              animationDelay={0}
            />
            <RecoveryOptionCard
              icon={Mail}
              title={t("magicLink.title")}
              description={t("magicLink.description")}
              colorVariant="orange"
              onClick={handleSelectMagicLink}
              animationDelay={ANIMATION_DELAY_STEP}
            />
            <RecoveryOptionCard
              icon={ShieldCheck}
              title={t("twoFactor.title")}
              description={
                has2FAEnabled
                  ? t("twoFactor.descriptionEnabled")
                  : t("twoFactor.descriptionDisabled")
              }
              colorVariant="green"
              onClick={handleSelect2FA}
              animationDelay={ANIMATION_DELAY_STEP * 2}
              disabled={!has2FAEnabled}
            />
            <RecoveryOptionCard
              icon={Headset}
              title={t("contactAdmin.title")}
              description={t("contactAdmin.description")}
              colorVariant="purple"
              onClick={handleContactAdmin}
              animationDelay={ANIMATION_DELAY_STEP * 3}
            />
          </div>

          <RecoveryOptionsInfo />
        </div>

        <AuthFooter />
      </motion.div>
    </main>
  );
};

export default OptionsStepMain;
