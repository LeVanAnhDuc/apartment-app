// libs
import Link from "next/link";
// others
import CONSTANTS from "@/constants";

const { SIGNUP } = CONSTANTS.ROUTES;

const ButtonSignUp = () => (
  <main className="mt-4 text-center text-sm">
    Don&apos;t have an account?{" "}
    <Link href={SIGNUP} className="underline-offset-4 hover:underline">
      Sign up
    </Link>
  </main>
);

export default ButtonSignUp;
