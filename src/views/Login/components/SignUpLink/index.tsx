// libs
import { useTranslations } from "next-intl";
// others
import { Link } from "@/i18n/navigation";
import CONSTANTS from "@/constants";

const { SIGNUP } = CONSTANTS.ROUTES;

const SignUpLink = () => {
  const t = useTranslations("login.link");

  return (
    <div className="mt-8 text-center">
      <p className="text-muted-foreground text-sm">
        {t("descriptionSignUp")}?{" "}
        <Link
          href={SIGNUP}
          className="text-primary transition-colors duration-200 hover:underline"
        >
          {t("signUp")}
        </Link>
      </p>
    </div>
  );
};

export default SignUpLink;
