// libs
import { useTranslations } from "next-intl";
// others
import CONSTANTS from "@/constants";
import { Link } from "@/i18n/navigation";

const { SIGNUP } = CONSTANTS.ROUTES;

const ButtonSignUp = () => {
  const t = useTranslations("login.link");

  return (
    <main className="mt-4 text-center text-sm">
      {t("descriptionSignUp")}?{" "}
      <Link
        href={SIGNUP}
        className="font-medium underline-offset-4 hover:underline"
      >
        {t("signUp")}
      </Link>
    </main>
  );
};

export default ButtonSignUp;
