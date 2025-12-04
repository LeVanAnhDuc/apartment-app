"use client";

// libs
import { useCallback } from "react";
import { useRouter, usePathname } from "next/navigation";
import { useTranslations } from "next-intl";
import { Smartphone, Mail, ShieldCheck, Headset, KeyRound } from "lucide-react";
// components
import AuthStepLayout from "@/components/AuthStepLayout";
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
const { LOGIN } = CONSTANTS.ROUTES;

const OptionsStepMain = ({
  has2FAEnabled = false
}: {
  has2FAEnabled?: boolean;
}) => {
  const router = useRouter();
  const pathname = usePathname();
  const t = useTranslations("forgotPassword.form.options");

  const email = useForgotPasswordStore((state) => state.email);

  const { hasEmail } = useEmailGuard({ email, redirectTo: LOGIN });
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
    <AuthStepLayout
      icon={<AuthIcon Icon={KeyRound} variant="orange" animated />}
      title={t("title")}
      email={email}
      onBack={handleBackToLogin}
    >
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
    </AuthStepLayout>
  );
};

export default OptionsStepMain;
