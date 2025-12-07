// libs
import { getMessages } from "next-intl/server";
import { redirect } from "next/navigation";
import { Mail } from "lucide-react";
// types
import type { LoginMessages } from "@/types/libs";
// components
import AuthStepLayout from "@/components/AuthStepLayout";
import AuthIcon from "@/components/AuthIcon";
import MagicLinkForm from "./mains/MagicLinkForm";
import MagicLinkInstructions from "./components/MagicLinkInstructions";
import BackButton from "./components/BackButton";
// others
import CONSTANTS from "@/constants";

const { LOGIN } = CONSTANTS.ROUTES;

const LoginMagicLink = async ({
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
  const { magicLink } = form;

  return (
    <AuthStepLayout
      icon={
        <AuthIcon
          Icon={Mail}
          variant="orange"
          shape="circle"
          size="lg"
          animated
        />
      }
      title={magicLink.title}
      description={magicLink.description}
      email={decodedEmail}
      backButton={<BackButton email={decodedEmail} />}
    >
      <MagicLinkInstructions
        labels={{
          instructionCheck: magicLink.instruction.check,
          instructionDetail: magicLink.instruction.detail,
          hintTitle: magicLink.hint.title,
          hintDescription: magicLink.hint.description
        }}
      />
      <MagicLinkForm
        email={decodedEmail}
        labels={{
          resendSuccess: magicLink.resendSuccess,
          resend: magicLink.button.resend,
          resendIn: magicLink.button.resendIn,
          sending: magicLink.button.sending,
          tryOther: magicLink.button.tryOther
        }}
      />
    </AuthStepLayout>
  );
};

export default LoginMagicLink;
