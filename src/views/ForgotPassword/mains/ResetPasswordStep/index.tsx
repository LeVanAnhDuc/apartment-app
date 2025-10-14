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
import ResetPasswordForm from "../../components/ResetPasswordForm";

const ResetPasswordStep = ({
  email,
  onSuccess
}: {
  email: string;
  onSuccess: () => void;
}) => {
  const t = useTranslations("forgotPassword");

  return (
    <Card className="w-sm">
      <CardHeader>
        <CardTitle>{t("form.step3.title")}</CardTitle>
        <CardDescription>{t("form.step3.description")}</CardDescription>
      </CardHeader>
      <CardContent>
        <ResetPasswordForm email={email} onSuccess={onSuccess} />
      </CardContent>
    </Card>
  );
};

export default ResetPasswordStep;
