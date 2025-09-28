// components
import Logo from "@/components/Logo";

const Header = () => (
  <header className="flex w-full items-center justify-between px-6 py-4">
    <section className="flex items-center gap-2">
      <Logo />
      <span className="text-xl font-semibold">LearnHub</span>
    </section>

    <section className="flex items-center gap-4">
      {/* TODO: Add language selector */}
    </section>
  </header>
);

export default Header;
