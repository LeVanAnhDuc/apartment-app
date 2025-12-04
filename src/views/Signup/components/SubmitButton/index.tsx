// libs
import { useTranslations } from "next-intl";
// components
import CustomButton from "@/components/CustomButton";

const SubmitButton = ({
  loading = false,
  fullWidth = true
}: {
  loading?: boolean;
  fullWidth?: boolean;
}) => {
  const t = useTranslations("signup.infoStep.button");

  return (
    <CustomButton
      type="submit"
      loading={loading}
      fullWidth={fullWidth}
      className="bg-primary text-primary-foreground hover:bg-primary/90 h-12 rounded-lg transition-all duration-200 hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-50"
    >
      {t("submit")}
    </CustomButton>
  );
};

export default SubmitButton;
