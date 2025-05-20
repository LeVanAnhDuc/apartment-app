// libs
import Link from "next/link";
// component
import Checkbox from "@/components/Checkbox";

const ButtonForgotPassword = () => (
  <main className="flex items-center justify-between">
    <label className="flex items-center gap-2">
      <Checkbox className="hover:cursor-pointer" />
      Remember me
    </label>
    <Link
      href={"/forgot-password"}
      className="text-primary hover:text-secondary font-medium"
    >
      Forgot password?
    </Link>
  </main>
);

export default ButtonForgotPassword;
