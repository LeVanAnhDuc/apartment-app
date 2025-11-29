// libs
import { useTranslations } from "next-intl";
// components
import CustomButton from "@/components/CustomButton";

const TryAnotherButton = ({
  onClick,
  disabled = false
}: {
  onClick: () => void;
  disabled?: boolean;
}) => {
  const t = useTranslations("login.form.button");

  return (
    <CustomButton
      type="button"
      variant="outline"
      onClick={onClick}
      disabled={disabled}
      className="border-input hover:bg-accent h-12 flex-1 rounded-lg transition-all duration-200 disabled:cursor-not-allowed disabled:opacity-50"
    >
      {t("tryAnother")}
    </CustomButton>
  );
};

export default TryAnotherButton;
