// libs
import { useTranslations } from "next-intl";
// others
import { Link } from "@/i18n/navigation";
import CONSTANTS from "@/constants";

const { LOGIN } = CONSTANTS.ROUTES;

const LoginLink = () => {
  const t = useTranslations("signup.link");

  return (
    <div className="mt-8 text-center">
      <p className="text-muted-foreground text-sm">
        {t("descriptionSignUp")}?{" "}
        <Link
          href={LOGIN}
          className="text-primary transition-colors duration-200 hover:underline"
        >
          {t("login")}
        </Link>
      </p>
    </div>
  );
};

export default LoginLink;
