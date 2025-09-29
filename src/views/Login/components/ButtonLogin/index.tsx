// types
import type { LoginFormValues } from "@/types/Login";
// components
import CustomButton from "@/components/CustomButton";
import { useFormContext } from "react-hook-form";

const ButtonLogin = () => {
  const { handleSubmit } = useFormContext<LoginFormValues>();

  return (
    <CustomButton fullWidth onClick={() => handleSubmit}>
      Sign in
    </CustomButton>
  );
};

export default ButtonLogin;
