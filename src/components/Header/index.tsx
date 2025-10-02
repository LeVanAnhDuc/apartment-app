// components
import Logo from "@/components/Logo";
import ModalLanguage from "@/components/ModalLanguage";

const Header = () => (
  <header className="bg-background fixed top-0 right-0 left-0 z-50 flex w-full items-center justify-between border-b px-6 py-3">
    <section className="flex items-center gap-2">
      <Logo />
      <span className="font-semibold">Platform Learning</span>
    </section>

    <ModalLanguage />
  </header>
);

export default Header;
