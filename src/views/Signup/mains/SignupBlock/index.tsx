// components
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import FormSignup from "../../components/FormSignup";

const SignupBlock = () => (
  <main className="flex h-full items-center justify-center">
    <Card className="w-sm">
      <CardHeader>
        <CardTitle>Create Your Account</CardTitle>
        <CardDescription>Create an account to get started</CardDescription>
      </CardHeader>
      <CardContent>
        <FormSignup />
      </CardContent>
    </Card>
  </main>
);

export default SignupBlock;
