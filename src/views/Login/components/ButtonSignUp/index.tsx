// libs
import Link from "next/link";
import { useTranslations } from "next-intl";
// others
import CONSTANTS from "@/constants";

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
