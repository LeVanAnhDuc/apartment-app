// libs
import { getMessages } from "next-intl/server";
import { redirect } from "next/navigation";
import { Lock } from "lucide-react";
// types
import type { LoginMessages } from "@/types/libs";
// components
import AuthStepLayout from "@/components/AuthStepLayout";
import AuthIcon from "@/components/AuthIcon";
import OtpStepForm from "./mains/OtpStepForm";
import OtpInstruction from "./components/OtpInstruction";
import BackButton from "./components/BackButton";
// others
import CONSTANTS from "@/constants";

const { LOGIN } = CONSTANTS.ROUTES;

const LoginOtp = async ({
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
  const { otp } = form;

  return (
    <AuthStepLayout
      icon={
        <AuthIcon
          Icon={Lock}
          variant="blue"
          shape="circle"
          size="lg"
          animated
        />
      }
      title={otp.title}
      description={otp.description}
      email={decodedEmail}
      backButton={<BackButton email={decodedEmail} />}
    >
      <OtpStepForm
        email={decodedEmail}
        labels={{
          instruction: otp.instruction,
          verifying: otp.verifying,
          resendSuccess: otp.resendSuccess,
          resend: otp.button.resend,
          resendIn: otp.button.resendIn,
          sending: otp.button.sending,
          tryOther: otp.button.tryOther
        }}
      />
      <OtpInstruction label={otp.instruction} />
    </AuthStepLayout>
  );
};

export default LoginOtp;
