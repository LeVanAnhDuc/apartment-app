"use client";

// libs
import { usePathname } from "next/navigation";
import { Mail, Smartphone, KeyRound, Headset } from "lucide-react";
// components
import LoginOptionCard from "../../components/LoginOptionCard";
// stores
import { useContactAdminStore } from "@/stores";
// others
import { useRouter } from "@/i18n/navigation";
import CONSTANTS from "@/constants";

const ANIMATION_DELAY_STEP = 0.1;

const { CONTACT_ADMIN, LOGIN_PASSWORD, LOGIN_OTP, LOGIN_MAGIC_LINK } =
  CONSTANTS.ROUTES;

const AlternativeOptions = ({
  email,
  labels
}: {
  email: string;
  labels: {
    magicLink: { title: string; description: string };
    otp: { title: string; description: string };
    password: { title: string; description: string };
    contactAdmin: { title: string; description: string };
  };
}) => {
  const router = useRouter();
  const pathname = usePathname();

  const setContactAdminEmail = useContactAdminStore((state) => state.setEmail);
  const setContactAdminReferrer = useContactAdminStore(
    (state) => state.setReferrerPath
  );

  const encodedEmail = encodeURIComponent(email);

  const handleSelectPassword = () => {
    router.push(`${LOGIN_PASSWORD}?email=${encodedEmail}`);
  };

  const handleSelectMagicLink = () => {
    router.push(`${LOGIN_MAGIC_LINK}?email=${encodedEmail}`);
  };

  const handleSelectOTP = () => {
    router.push(`${LOGIN_OTP}?email=${encodedEmail}`);
  };

  const handleContactAdmin = () => {
    setContactAdminEmail(email, true);
    setContactAdminReferrer(pathname);
    router.push(CONTACT_ADMIN);
  };

  return (
    <div className="space-y-3">
      <LoginOptionCard
        icon={Mail}
        title={labels.magicLink.title}
        description={labels.magicLink.description}
        colorVariant="orange"
        onClick={handleSelectMagicLink}
        animationDelay={0}
      />
      <LoginOptionCard
        icon={Smartphone}
        title={labels.otp.title}
        description={labels.otp.description}
        colorVariant="blue"
        onClick={handleSelectOTP}
        animationDelay={ANIMATION_DELAY_STEP}
      />
      <LoginOptionCard
        icon={KeyRound}
        title={labels.password.title}
        description={labels.password.description}
        colorVariant="green"
        onClick={handleSelectPassword}
        animationDelay={ANIMATION_DELAY_STEP * 2}
      />
      <LoginOptionCard
        icon={Headset}
        title={labels.contactAdmin.title}
        description={labels.contactAdmin.description}
        colorVariant="purple"
        onClick={handleContactAdmin}
        animationDelay={ANIMATION_DELAY_STEP * 3}
      />
    </div>
  );
};

export default AlternativeOptions;
