// libs
import { useTranslations } from "next-intl";
// components
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import FormLogin from "../../components/FormLogin";
import LanguageSwitcher from "@/components/ModalLanguage";

const LoginBlock = () => {
  const t = useTranslations("login.form");

  return (
    <main className="flex flex-1 items-center justify-center">
      <LanguageSwitcher />
      <Card className="w-sm">
        <CardHeader>
          <CardTitle>{t("title")}</CardTitle>
          <CardDescription>{t("description")}</CardDescription>
        </CardHeader>
        <CardContent>
          <FormLogin />
        </CardContent>
      </Card>
    </main>
  );
};

export default LoginBlock;
