// libs
import { getMessages } from "next-intl/server";
import { redirect } from "next/navigation";
import { KeyRound } from "lucide-react";
// types
import type { LoginMessages } from "@/types/libs";
// components
import AuthStepLayout from "@/components/AuthStepLayout";
import AuthIcon from "@/components/AuthIcon";
import AlternativeOptions from "./mains/AlternativeOptions";
import LoginOptionsInfo from "./components/LoginOptionsInfo";
import BackButton from "./components/BackButton";
// others
import CONSTANTS from "@/constants";

const { LOGIN } = CONSTANTS.ROUTES;

const LoginAlternative = async ({
  searchParams
}: {
  searchParams: Promise<{ email?: string }>;
}) => {
  const { email } = await searchParams;

  if (!email) {
    redirect(LOGIN);
  }

  const decodedEmail = decodeURIComponent(email);
  const messages = await getMessages();
  const translations = messages.login as LoginMessages;
  const { form } = translations;

  return (
    <AuthStepLayout
      icon={<AuthIcon Icon={KeyRound} />}
      title={form.titleChooseMethod}
      email={decodedEmail}
      backButton={<BackButton />}
    >
      <AlternativeOptions
        email={decodedEmail}
        labels={{
          magicLink: form.alternative.magicLink,
          otp: form.alternative.otp,
          password: form.alternative.password,
          contactAdmin: form.alternative.contactAdmin
        }}
      />
      <LoginOptionsInfo label={form.descriptionChooseMethod} />
    </AuthStepLayout>
  );
};

export default LoginAlternative;
