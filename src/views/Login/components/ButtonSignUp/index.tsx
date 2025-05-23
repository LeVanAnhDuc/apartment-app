import Link from "next/link";

const ButtonSignUp = () => (
  <main className="text-center text-sm">
    Don’t have an account?{" "}
    <Link
      href="/signup"
      className="text-primary hover:text-secondary font-medium"
    >
      Sign up
    </Link>
  </main>
);

export default ButtonSignUp;
