// libs
import Link from "next/link";
// others
import CONSTANTS from "@/constants";

const { SIGNUP } = CONSTANTS.ROUTES;

const ButtonSignUp = () => (
  <main className="text-center text-sm">
    Don’t have an account?{" "}
    <Link
      href={SIGNUP}
      className="text-primary hover:text-tertiary font-medium"
    >
      Sign up
    </Link>
  </main>
);

export default ButtonSignUp;
