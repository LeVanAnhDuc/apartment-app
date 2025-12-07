// libs
import { getMessages } from "next-intl/server";
import { redirect } from "next/navigation";
import { KeyRound } from "lucide-react";
// types
import type { ResetPasswordMessages } from "@/types/libs";
// components
import AuthStepLayout from "@/components/AuthStepLayout";
import AuthIcon from "@/components/AuthIcon";
import ResetPasswordForm from "./mains/ResetPasswordForm";
// others
import CONSTANTS from "@/constants";

const { LOGIN } = CONSTANTS.ROUTES;

const ResetPassword = async ({
  searchParams
}: {
  searchParams: Promise<{ email?: string; token?: string }>;
}) => {
  const { email, token } = await searchParams;

  // Security: Redirect if missing email or token
  if (!email || !token) redirect(LOGIN);

  const decodedEmail = decodeURIComponent(email);
  const decodedToken = decodeURIComponent(token);

  const messages = await getMessages();
  const translations = messages.resetPassword as ResetPasswordMessages;
  const { form, message } = translations;

  return (
    <AuthStepLayout
      icon={<AuthIcon Icon={KeyRound} variant="orange" animated />}
      title={form.title}
      description={form.description}
      email={decodedEmail}
    >
      <ResetPasswordForm
        email={decodedEmail}
        token={decodedToken}
        labels={{
          newPasswordLabel: form.input.labelNewPassword,
          newPasswordPlaceholder: form.input.placeholderNewPassword,
          confirmPasswordLabel: form.input.labelConfirmPassword,
          confirmPasswordPlaceholder: form.input.placeholderConfirmPassword,
          requirementsTitle: form.requirements.title,
          requirementsMinLength: form.requirements.minLength,
          requirementsUppercase: form.requirements.uppercase,
          requirementsNumber: form.requirements.number,
          submitButton: form.button.reset,
          successMessage: message.success
        }}
      />
    </AuthStepLayout>
  );
};

export default ResetPassword;
