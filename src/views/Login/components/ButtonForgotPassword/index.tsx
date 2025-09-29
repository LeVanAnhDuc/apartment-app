// libs
import Link from "next/link";
// component
// other
import CONSTANTS from "@/constants";

const { FORGOT_PASSWORD } = CONSTANTS.ROUTES;

const ButtonForgotPassword = () => (
  <Link
    href={FORGOT_PASSWORD}
    className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
  >
    Forgot password?
  </Link>
);

export default ButtonForgotPassword;
