"use client";

// libs
import { usePathname } from "next/navigation";
import { Smartphone, Mail, ShieldCheck, Headset } from "lucide-react";
// components
import RecoveryOptionCard from "../../components/RecoveryOptionCard";
import RecoveryOptionsInfo from "../../components/RecoveryOptionsInfo";
// stores
import { useContactAdminStore } from "@/stores";
// others
import { useRouter } from "@/i18n/navigation";
import CONSTANTS from "@/constants";

const ANIMATION_DELAY_STEP = 0.1;
const { FORGOT_PASSWORD_OTP, FORGOT_PASSWORD_MAGIC_LINK, CONTACT_ADMIN } =
  CONSTANTS.ROUTES;

const OptionsForm = ({
  email,
  has2FAEnabled = false,
  labels
}: {
  email: string;
  has2FAEnabled?: boolean;
  labels: {
    description: string;
    otpTitle: string;
    otpDescription: string;
    magicLinkTitle: string;
    magicLinkDescription: string;
    twoFactorTitle: string;
    twoFactorDescriptionEnabled: string;
    twoFactorDescriptionDisabled: string;
    contactAdminTitle: string;
    contactAdminDescription: string;
    hint: string;
    unavailable: string;
  };
}) => {
  const router = useRouter();
  const pathname = usePathname();

  const setContactAdminEmail = useContactAdminStore((state) => state.setEmail);
  const setContactAdminReferrer = useContactAdminStore(
    (state) => state.setReferrerPath
  );

  const handleSelectOtp = () => {
    const encodedEmail = encodeURIComponent(email);
    router.push(`${FORGOT_PASSWORD_OTP}?email=${encodedEmail}`);
  };

  const handleSelectMagicLink = () => {
    const encodedEmail = encodeURIComponent(email);
    router.push(`${FORGOT_PASSWORD_MAGIC_LINK}?email=${encodedEmail}`);
  };

  const handleSelect2FA = () => {
    // TODO: Implement 2FA recovery flow
  };

  const handleContactAdmin = () => {
    setContactAdminEmail(email, true);
    setContactAdminReferrer(pathname);
    router.push(CONTACT_ADMIN);
  };

  return (
    <>
      <p className="text-muted-foreground mb-6 text-center">
        {labels.description}
      </p>

      <div className="space-y-3">
        <RecoveryOptionCard
          icon={Smartphone}
          title={labels.otpTitle}
          description={labels.otpDescription}
          colorVariant="blue"
          onClick={handleSelectOtp}
          animationDelay={0}
        />
        <RecoveryOptionCard
          icon={Mail}
          title={labels.magicLinkTitle}
          description={labels.magicLinkDescription}
          colorVariant="orange"
          onClick={handleSelectMagicLink}
          animationDelay={ANIMATION_DELAY_STEP}
        />
        <RecoveryOptionCard
          icon={ShieldCheck}
          title={labels.twoFactorTitle}
          description={
            has2FAEnabled
              ? labels.twoFactorDescriptionEnabled
              : labels.twoFactorDescriptionDisabled
          }
          colorVariant="green"
          onClick={handleSelect2FA}
          animationDelay={ANIMATION_DELAY_STEP * 2}
          disabled={!has2FAEnabled}
          unavailableLabel={labels.unavailable}
        />
        <RecoveryOptionCard
          icon={Headset}
          title={labels.contactAdminTitle}
          description={labels.contactAdminDescription}
          colorVariant="purple"
          onClick={handleContactAdmin}
          animationDelay={ANIMATION_DELAY_STEP * 3}
        />
      </div>

      <RecoveryOptionsInfo hint={labels.hint} />
    </>
  );
};

export default OptionsForm;
