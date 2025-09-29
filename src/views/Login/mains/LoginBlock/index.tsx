// components
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import InputEmail from "../../components/InputEmail";
import InputPassword from "../../components/InputPassword";
import ButtonForgotPassword from "../../components/ButtonForgotPassword";
import ButtonLogin from "../../components/ButtonLogin";
import ButtonLoginWithGoogle from "../../components/ButtonLoginWithGoogle";
import ButtonSignUp from "../../components/ButtonSignUp";

const LoginBlock = () => (
  <main className="flex flex-1 items-center justify-center">
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>Student Login</CardTitle>
        <CardDescription>
          Enter your email below to login to your account
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="flex flex-col gap-6">
            <InputEmail />
            <InputPassword />
            <ButtonForgotPassword />
            <div className="space-y-3">
              <ButtonLogin />
              <ButtonLoginWithGoogle />
            </div>
          </div>
          <ButtonSignUp />
        </form>
      </CardContent>
    </Card>
  </main>
);

export default LoginBlock;
