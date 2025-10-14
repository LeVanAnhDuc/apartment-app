"use client";
// libs
import { useTranslations } from "next-intl";
// types
import type { RequestResetFormValues } from "@/types/ForgotPassword";
// components
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import RequestResetForm from "../../components/RequestResetForm";
import CustomButton from "@/components/CustomButton";

const RequestResetStep = ({
  onSuccess,
  onBackToLogin
}: {
  onSuccess: (values: RequestResetFormValues) => void;
  onBackToLogin: () => void;
}) => {
  const t = useTranslations("forgotPassword");

  return (
    <Card className="w-sm">
      <CardHeader>
        <CardTitle>{t("form.step1.title")}</CardTitle>
        <CardDescription>{t("form.step1.description")}</CardDescription>
      </CardHeader>
      <CardContent>
        <RequestResetForm onSuccess={onSuccess} />

        <div className="mt-4 text-center">
          <CustomButton
            variant="link"
            onClick={onBackToLogin}
            className="text-sm"
          >
            {t("link.backToLogin")}
          </CustomButton>
        </div>
      </CardContent>
    </Card>
  );
};

export default RequestResetStep;
