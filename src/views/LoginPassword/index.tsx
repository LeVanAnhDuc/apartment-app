// libs
import { getMessages } from "next-intl/server";
import { redirect } from "next/navigation";
import { KeyRound } from "lucide-react";
// components
import AuthStepLayout from "@/components/AuthStepLayout";
import AuthIcon from "@/components/AuthIcon";
import PasswordStepForm from "./mains/PasswordStepForm";
import BackButton from "./components/BackButton";
// others
import CONSTANTS from "@/constants";

const { LOGIN } = CONSTANTS.ROUTES;

const LoginPassword = async ({
  searchParams
}: {
  searchParams: Promise<{ email?: string }>;
}) => {
  const { email } = await searchParams;

  if (!email) redirect(LOGIN);

  const decodedEmail = decodeURIComponent(email);
  const messages = await getMessages();
  const translations = messages.login;
  const { form, link } = translations;

  return (
    <AuthStepLayout
      icon={<AuthIcon Icon={KeyRound} />}
      title={form.titleWelcome}
      email={decodedEmail}
      backButton={<BackButton />}
    >
      <PasswordStepForm
        email={decodedEmail}
        labels={{
          password: form.input.labelEnterPassword,
          placeholder: form.input.placeholderPassword,
          forgotPassword: link.forgotPassword,
          tryAnother: form.button.tryAnother,
          next: form.button.next
        }}
      />
    </AuthStepLayout>
  );
};

export default LoginPassword;
