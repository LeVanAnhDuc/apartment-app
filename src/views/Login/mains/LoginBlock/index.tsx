// components
import InputEmail from "../../components/InputEmail";
import InputPassword from "../../components/InputPassword";
import FormTitle from "../../components/FormTitle";
import FormDescription from "../../components/FormDescription";
import ButtonForgotPassword from "../../components/ButtonForgotPassword";
import GroupButtonSignInWith from "../../components/GroupButtonSignInWith";
import ButtonSignUp from "../../components/ButtonSignUp";
import ButtonLogin from "../../components/ButtonLogin";

const LoginBlock = () => (
  <main className="flex h-screen items-center justify-center">
    <div className="rounded-3xl bg-white p-8 shadow-2xl sm:p-10 md:p-14">
      <FormTitle />
      <FormDescription />
      <form className="mt-10 space-y-5">
        <InputEmail />
        <InputPassword />
        <ButtonForgotPassword />
        <ButtonLogin />
        <GroupButtonSignInWith />
        <ButtonSignUp />
      </form>
    </div>
  </main>
);

export default LoginBlock;
