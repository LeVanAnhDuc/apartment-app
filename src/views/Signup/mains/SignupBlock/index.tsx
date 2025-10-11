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
import FormSignup from "../../components/FormSignup";

const SignupBlock = () => {
  const t = useTranslations("signup.form");

  return (
    <main className="auth-background flex h-full items-center justify-center">
      <Card className="w-sm">
        <CardHeader>
          <CardTitle>{t("title")}</CardTitle>
          <CardDescription>{t("description")}</CardDescription>
        </CardHeader>
        <CardContent>
          <FormSignup />
        </CardContent>
      </Card>
    </main>
  );
};

export default SignupBlock;
