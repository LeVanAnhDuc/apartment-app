"use client";

// libs
import { Smartphone, Mail, ShieldCheck, Headset } from "lucide-react";
// components
import RecoveryOptionCard from "../../components/RecoveryOptionCard";
import RecoveryOptionsInfo from "../../components/RecoveryOptionsInfo";
// others
import CONSTANTS from "@/constants";

const ANIMATION_DELAY_STEP = 0.1;
const { FORGOT_PASSWORD_OTP, FORGOT_PASSWORD_MAGIC_LINK, CONTACT_ADMIN } =
  CONSTANTS.ROUTES;

const OptionsForm = ({
  email,
  currentPath,
  has2FAEnabled = false,
  labels
}: {
  email: string;
  currentPath: string;
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
  const encodedEmail = encodeURIComponent(email);
  const encodedFrom = encodeURIComponent(currentPath);

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
          href={`${FORGOT_PASSWORD_OTP}?email=${encodedEmail}`}
          animationDelay={0}
        />
        <RecoveryOptionCard
          icon={Mail}
          title={labels.magicLinkTitle}
          description={labels.magicLinkDescription}
          colorVariant="orange"
          href={`${FORGOT_PASSWORD_MAGIC_LINK}?email=${encodedEmail}`}
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
          animationDelay={ANIMATION_DELAY_STEP * 2}
          disabled={!has2FAEnabled}
          unavailableLabel={labels.unavailable}
        />
        <RecoveryOptionCard
          icon={Headset}
          title={labels.contactAdminTitle}
          description={labels.contactAdminDescription}
          colorVariant="purple"
          href={`${CONTACT_ADMIN}?email=${encodedEmail}&from=${encodedFrom}`}
          animationDelay={ANIMATION_DELAY_STEP * 3}
        />
      </div>

      <RecoveryOptionsInfo hint={labels.hint} />
    </>
  );
};

export default OptionsForm;
