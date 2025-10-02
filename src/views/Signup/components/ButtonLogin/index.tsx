// others
import CONSTANTS from "@/constants";
import { Link } from "@/i18n/navigation";

const { LOGIN } = CONSTANTS.ROUTES;

const ButtonLogin = () => (
  <main className="mt-4 text-center text-sm">
    Already have an account?{" "}
    <Link
      href={LOGIN}
      className="font-medium underline-offset-4 hover:underline"
    >
      Login
    </Link>
  </main>
);

export default ButtonLogin;
