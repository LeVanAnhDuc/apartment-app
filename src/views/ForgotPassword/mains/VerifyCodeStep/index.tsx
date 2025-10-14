"use client";

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
import VerifyCodeForm from "../../components/VerifyCodeForm";

const VerifyCodeStep = ({
  email,
  onSuccess,
  onBack
}: {
  email: string;
  onSuccess: () => void;
  onBack: () => void;
}) => {
  const t = useTranslations("forgotPassword");

  return (
    <Card className="w-sm">
      <CardHeader>
        <CardTitle>{t("form.step2.title")}</CardTitle>
        <CardDescription>{t("form.step2.description")}</CardDescription>
      </CardHeader>
      <CardContent>
        <VerifyCodeForm email={email} onSuccess={onSuccess} onBack={onBack} />
      </CardContent>
    </Card>
  );
};

export default VerifyCodeStep;
