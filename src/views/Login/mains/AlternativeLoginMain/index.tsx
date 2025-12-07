"use client";

// libs
import { usePathname } from "next/navigation";
import { useTranslations } from "next-intl";
import { Mail, Smartphone, KeyRound, Headset } from "lucide-react";
// components
import AuthStepLayout from "@/components/AuthStepLayout";
import AuthIcon from "@/components/AuthIcon";
import LoginOptionCard from "../../components/LoginOptionCard";
import LoginOptionsInfo from "../../components/LoginOptionsInfo";
// stores
import { useLoginStore, useContactAdminStore } from "@/stores";
// hooks
import { useEmailGuard } from "@/hooks";
// others
import { useRouter } from "@/i18n/navigation";
import CONSTANTS from "@/constants";

const ANIMATION_DELAY_STEP = 0.1;

const { CONTACT_ADMIN, LOGIN } = CONSTANTS.ROUTES;

const AlternativeLoginMain = () => {
  const t = useTranslations("login.form");
  const tAlt = useTranslations("login.form.alternative");
  const router = useRouter();
  const pathname = usePathname();

  const email = useLoginStore((state) => state.email);

  const { hasEmail } = useEmailGuard({ email, redirectTo: LOGIN });
  const goToPasswordStep = useLoginStore((state) => state.goToPasswordStep);
  const goToOtpStep = useLoginStore((state) => state.goToOtpStep);
  const goToMagicLinkStep = useLoginStore((state) => state.goToMagicLinkStep);
  const goToEmailStep = useLoginStore((state) => state.goToEmailStep);

  const setContactAdminEmail = useContactAdminStore((state) => state.setEmail);
  const setContactAdminReferrer = useContactAdminStore(
    (state) => state.setReferrerPath
  );

  const handleSelectPassword = () => {
    goToPasswordStep(email);
  };

  const handleSelectMagicLink = () => {
    goToMagicLinkStep();
  };

  const handleSelectOTP = () => {
    goToOtpStep();
  };

  const handleContactAdmin = () => {
    setContactAdminEmail(email, true);
    setContactAdminReferrer(pathname);
    router.push(CONTACT_ADMIN);
  };

  if (!hasEmail) return null;

  return (
    <AuthStepLayout
      icon={<AuthIcon Icon={KeyRound} />}
      title={t("titleChooseMethod")}
      email={email}
      onBack={goToEmailStep}
    >
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
    </AuthStepLayout>
  );
};

export default AlternativeLoginMain;
