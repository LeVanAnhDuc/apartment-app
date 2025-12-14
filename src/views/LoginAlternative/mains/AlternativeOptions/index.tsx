"use client";

// libs
import { Mail, Smartphone, KeyRound, Headset } from "lucide-react";
// components
import LoginOptionCard from "../../components/LoginOptionCard";
// others
import CONSTANTS from "@/constants";

const ANIMATION_DELAY_STEP = 0.1;

const { CONTACT_ADMIN, LOGIN_PASSWORD, LOGIN_OTP, LOGIN_MAGIC_LINK } =
  CONSTANTS.ROUTES;

const AlternativeOptions = ({
  email,
  currentPath,
  labels
}: {
  email: string;
  currentPath: string;
  labels: {
    magicLink: { title: string; description: string };
    otp: { title: string; description: string };
    password: { title: string; description: string };
    contactAdmin: { title: string; description: string };
  };
}) => {
  const encodedEmail = encodeURIComponent(email);
  const encodedFrom = encodeURIComponent(currentPath);

  return (
    <div className="space-y-3">
      <LoginOptionCard
        icon={Mail}
        title={labels.magicLink.title}
        description={labels.magicLink.description}
        colorVariant="orange"
        href={`${LOGIN_MAGIC_LINK}?email=${encodedEmail}`}
        animationDelay={0}
      />
      <LoginOptionCard
        icon={Smartphone}
        title={labels.otp.title}
        description={labels.otp.description}
        colorVariant="blue"
        href={`${LOGIN_OTP}?email=${encodedEmail}`}
        animationDelay={ANIMATION_DELAY_STEP}
      />
      <LoginOptionCard
        icon={KeyRound}
        title={labels.password.title}
        description={labels.password.description}
        colorVariant="green"
        href={`${LOGIN_PASSWORD}?email=${encodedEmail}`}
        animationDelay={ANIMATION_DELAY_STEP * 2}
      />
      <LoginOptionCard
        icon={Headset}
        title={labels.contactAdmin.title}
        description={labels.contactAdmin.description}
        colorVariant="purple"
        href={`${CONTACT_ADMIN}?email=${encodedEmail}&from=${encodedFrom}`}
        animationDelay={ANIMATION_DELAY_STEP * 3}
      />
    </div>
  );
};

export default AlternativeOptions;
