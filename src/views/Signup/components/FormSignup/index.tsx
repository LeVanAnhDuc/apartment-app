import ButtonLogin from "../ButtonLogin";
import ButtonLSignupWithGoogle from "../ButtonLSignupWithGoogle";
import ButtonSignUp from "../ButtonSignUp";
import InputEmail from "../InputEmail";
import InputFullName from "../InputFullName";
import InputPassword from "../InputPassword";
import InputPasswordConfirm from "../InputPasswordConfirm";
import InputPhone from "../InputPhone";

const FormSignup = () => (
  <form>
    <div className="flex flex-col gap-6">
      <InputFullName />
      <InputEmail />
      <InputPhone />
      <InputPassword />
      <InputPasswordConfirm />
      <div className="space-y-3">
        <ButtonSignUp />
        <ButtonLSignupWithGoogle />
      </div>
      <ButtonLogin />
    </div>
  </form>
);

export default FormSignup;
