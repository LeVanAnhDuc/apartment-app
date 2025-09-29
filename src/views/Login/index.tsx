// component
import Footer from "./mains/Footer";
import Header from "./mains/Header";
import LoginBlock from "./mains/LoginBlock";

const Login = () => (
  <section className="flex size-full h-screen flex-col">
    <Header />
    <LoginBlock />
    <Footer />
  </section>
);

export default Login;
