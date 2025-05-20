// components
import InputEmail from "../../components/InputEmail";
import InputPassword from "../../components/InputPassword";
import FormTitle from "../../components/FormTitle";
import ButtonSignUp from "../../components/ButtonSignUp";
import ButtonLogin from "../../components/ButtonLogin";
import InputFullName from "../../components/InputFullName";
import InputPhone from "../../components/InputPhone";
import InputPasswordConfirm from "../../components/InputPasswordConfirm";

const SignupBlock = () => (
  <main className="flex h-full items-center justify-center">
    <div className="rounded-3xl bg-white p-8 shadow-2xl sm:p-10 md:p-14">
      <FormTitle />
      <form className="mt-10 space-y-5">
        <InputFullName />
        <InputEmail />
        <InputPhone />
        <InputPassword />
        <InputPasswordConfirm />
        <ButtonSignUp />
        <ButtonLogin />
      </form>
    </div>
  </main>
);

export default SignupBlock;
