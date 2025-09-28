// libs
import Link from "next/link";
// component
import Checkbox from "@/components/Checkbox";
// other
import CONSTANTS from "@/constants";

const { FORGOT_PASSWORD } = CONSTANTS.ROUTES;

const ButtonForgotPassword = () => (
  <main className="flex items-center justify-between">
    <label className="flex items-center gap-2 hover:cursor-pointer">
      <Checkbox />
      Remember me
    </label>
    <Link
      href={FORGOT_PASSWORD}
      className="text-primary hover:text-tertiary font-medium"
    >
      Forgot password?
    </Link>
  </main>
);

export default ButtonForgotPassword;
