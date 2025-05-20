// libs
import Link from "next/link";

const ButtonLogin = () => (
  <main className="text-center text-sm">
    Already have an account?{" "}
    <Link
      href="/login"
      className="text-primary hover:text-secondary font-medium"
    >
      Login
    </Link>
  </main>
);

export default ButtonLogin;
