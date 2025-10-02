// libs
import { useFormContext } from "react-hook-form";
import { useTranslations } from "next-intl";
// types
import type { SignupFormValues } from "@/types/Signup";
// components
import CustomButton from "@/components/CustomButton";

const ButtonSignUp = () => {
  const t = useTranslations("signup.form.button");
  const { handleSubmit } = useFormContext<SignupFormValues>();

  return (
    <CustomButton className="w-full" onClick={() => handleSubmit}>
      {t("signup")}
    </CustomButton>
  );
};

export default ButtonSignUp;
