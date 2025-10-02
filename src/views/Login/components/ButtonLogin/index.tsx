// libs
import { useFormContext } from "react-hook-form";
import { useTranslations } from "next-intl";
// types
import type { LoginFormValues } from "@/types/Login";
// components
import CustomButton from "@/components/CustomButton";

const ButtonLogin = () => {
  const { handleSubmit } = useFormContext<LoginFormValues>();
  const t = useTranslations("login");

  return (
    <CustomButton fullWidth onClick={() => handleSubmit}>
      {t("form.button.login")}
    </CustomButton>
  );
};

export default ButtonLogin;
