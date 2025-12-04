"use client";

// libs
import { useRouter } from "next/navigation";
import { useTranslations } from "next-intl";
// stores
import { useLoginStore, useForgotPasswordStore } from "@/stores";
// others
import CONSTANTS from "@/constants";

const { FORGOT_PASSWORD } = CONSTANTS.ROUTES;

const ForgotPasswordLink = () => {
  const router = useRouter();
  const t = useTranslations("login.link");
  const loginEmail = useLoginStore((state) => state.email);
  const goToOptionsStep = useForgotPasswordStore(
    (state) => state.goToOptionsStep
  );

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    goToOptionsStep(loginEmail);
    router.push(FORGOT_PASSWORD);
  };

  return (
    <div className="flex items-center justify-between text-sm">
      <a
        href={FORGOT_PASSWORD}
        onClick={handleClick}
        className="text-primary transition-colors duration-200 hover:underline"
      >
        {t("forgotPassword")}
      </a>
    </div>
  );
};

export default ForgotPasswordLink;
