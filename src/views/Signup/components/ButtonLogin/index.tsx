// libs
import { useTranslations } from "next-intl";
// others
import CONSTANTS from "@/constants";
import { Link } from "@/i18n/navigation";

const { LOGIN } = CONSTANTS.ROUTES;

const ButtonLogin = () => {
  const t = useTranslations("signup.link");

  return (
    <main className="mt-4 text-center text-sm">
      {t("descriptionSignUp")}?{" "}
      <Link
        href={LOGIN}
        className="font-medium underline-offset-4 hover:underline"
      >
        {t("login")}
      </Link>
    </main>
  );
};

export default ButtonLogin;
