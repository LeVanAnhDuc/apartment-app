// libs
import { useFormContext } from "react-hook-form";
import { useTranslations } from "next-intl";
// types
import type { LoginFormValues } from "@/types/Login";
// components
import CustomButton from "@/components/CustomButton";

const ButtonLogin = ({ loading }: { loading?: boolean }) => {
  const { handleSubmit } = useFormContext<LoginFormValues>();
  const t = useTranslations("login");

  return (
    <CustomButton
      fullWidth
      onClick={() => handleSubmit}
      loading={loading}
      type="submit"
    >
      {t("form.button.login")}
    </CustomButton>
  );
};

export default ButtonLogin;
