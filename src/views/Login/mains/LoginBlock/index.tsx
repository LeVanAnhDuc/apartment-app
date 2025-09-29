// components
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import FormLogin from "../../components/FormLogin";

const LoginBlock = () => (
  <main className="flex flex-1 items-center justify-center">
    <Card className="w-sm">
      <CardHeader>
        <CardTitle>Student Login</CardTitle>
        <CardDescription>
          Enter your email below to login to your account
        </CardDescription>
      </CardHeader>
      <CardContent>
        <FormLogin />
      </CardContent>
    </Card>
  </main>
);

export default LoginBlock;
