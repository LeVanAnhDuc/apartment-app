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

const LoginBlock = () => {
  const t = useTranslations("login.form");

  return (
    <main className="auth-background flex h-full items-center justify-center">
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
