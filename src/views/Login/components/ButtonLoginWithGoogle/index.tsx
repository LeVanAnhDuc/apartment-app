// libs
import { useTranslations } from "next-intl";
// component
import CustomButton from "@/components/CustomButton";

const ButtonLoginWithGoogle = () => {
  const t = useTranslations("login");

  return (
    <CustomButton variant="outline" fullWidth>
      {t("form.button.loginWithGoogle")}
    </CustomButton>
  );
};

export default ButtonLoginWithGoogle;
