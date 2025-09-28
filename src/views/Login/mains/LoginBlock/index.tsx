// components
import InputEmail from "../../components/InputEmail";
import InputPassword from "../../components/InputPassword";
import FormTitle from "../../components/FormTitle";
import ButtonForgotPassword from "../../components/ButtonForgotPassword";
import GroupButtonSignInWith from "../../components/GroupButtonSignInWith";
import ButtonSignUp from "../../components/ButtonSignUp";
import ButtonLogin from "../../components/ButtonLogin";
import OtherSignInWith from "../../components/OtherSignInWith";

const LoginBlock = () => (
  <main className="flex flex-1 items-center justify-center">
    <div className="w-md rounded-3xl bg-white p-6 shadow-2xl">
      <FormTitle />
      <form className="mt-6 space-y-5">
        <InputEmail />
        <InputPassword />
        <ButtonForgotPassword />
        <ButtonLogin />
        <OtherSignInWith />
        <GroupButtonSignInWith />
        <ButtonSignUp />
      </form>
    </div>
  </main>
);

export default LoginBlock;
