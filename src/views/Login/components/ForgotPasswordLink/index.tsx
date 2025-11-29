// libs
import Link from "next/link";
import { useTranslations } from "next-intl";
// others
import CONSTANTS from "@/constants";

const { FORGOT_PASSWORD } = CONSTANTS.ROUTES;

const ForgotPasswordLink = () => {
  const t = useTranslations("login.link");

  return (
    <div className="flex items-center justify-between text-sm">
      <Link
        href={FORGOT_PASSWORD}
        className="text-primary transition-colors duration-200 hover:underline"
      >
        {t("forgotPassword")}
      </Link>
    </div>
  );
};

export default ForgotPasswordLink;
