// libs
import Link from "next/link";
import { useTranslations } from "next-intl";
// other
import CONSTANTS from "@/constants";

const { FORGOT_PASSWORD } = CONSTANTS.ROUTES;

const ButtonForgotPassword = () => {
  const t = useTranslations("login");

  return (
    <Link
      href={FORGOT_PASSWORD}
      className="ml-auto inline-block text-sm font-medium underline-offset-4 hover:underline"
    >
      {t("link.forgotPassword")}
    </Link>
  );
};

export default ButtonForgotPassword;
