// libs
import { getMessages } from "next-intl/server";
import { redirect } from "next/navigation";
import { ShieldCheck } from "lucide-react";
// types
import type { SignupMessages } from "@/types/libs";
// components
import AuthStepLayout from "@/components/AuthStepLayout";
import AuthIcon from "@/components/AuthIcon";
import OtpStepForm from "./mains/OtpStepForm";
import BackButton from "./components/BackButton";
// others
import CONSTANTS from "@/constants";

const { SIGNUP } = CONSTANTS.ROUTES;

const SignupOtp = async ({
  searchParams
}: {
  searchParams: Promise<{ email?: string }>;
}) => {
  const { email } = await searchParams;

  if (!email) redirect(SIGNUP);

  const decodedEmail = decodeURIComponent(email);
  const messages = await getMessages();
  const translations = messages.signup as SignupMessages;
  const { otpStep } = translations;

  return (
    <AuthStepLayout
      icon={
        <AuthIcon
          Icon={ShieldCheck}
          variant="green"
          shape="circle"
          size="lg"
          animated
        />
      }
      title={otpStep.title}
      description={otpStep.description}
      email={decodedEmail}
      backButton={<BackButton />}
    >
      <OtpStepForm
        email={decodedEmail}
        changeEmailHref={SIGNUP}
        labels={{
          verifying: otpStep.verifying,
          instruction: otpStep.instruction,
          resendSuccess: otpStep.resendSuccess,
          resend: otpStep.button.resend,
          resendIn: otpStep.button.resendIn,
          sending: otpStep.button.sending,
          changeEmail: otpStep.button.changeEmail
        }}
      />
    </AuthStepLayout>
  );
};

export default SignupOtp;
