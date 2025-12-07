// libs
import { getMessages } from "next-intl/server";
import { redirect } from "next/navigation";
import { UserCircle } from "lucide-react";
// types
import type { SignupMessages } from "@/types/libs";
// components
import AuthStepLayout from "@/components/AuthStepLayout";
import AuthIcon from "@/components/AuthIcon";
import InfoStepForm from "./mains/InfoStepForm";
import BackButton from "./components/BackButton";
// others
import CONSTANTS from "@/constants";

const { SIGNUP } = CONSTANTS.ROUTES;

const SignupInfo = async ({
  searchParams
}: {
  searchParams: Promise<{ email?: string }>;
}) => {
  const { email } = await searchParams;

  if (!email) redirect(SIGNUP);

  const decodedEmail = decodeURIComponent(email);
  const messages = await getMessages();
  const translations = messages.signup as SignupMessages;
  const { infoStep } = translations;

  return (
    <AuthStepLayout
      icon={<AuthIcon Icon={UserCircle} variant="green" />}
      title={infoStep.title}
      email={decodedEmail}
      backButton={<BackButton />}
    >
      <InfoStepForm
        labels={{
          fullName: infoStep.input.labelFullName,
          fullNamePlaceholder: infoStep.input.placeholderFullName,
          gender: infoStep.input.labelGender,
          genderPlaceholder: infoStep.input.placeholderGender,
          genderMale: infoStep.input.gender.male,
          genderFemale: infoStep.input.gender.female,
          genderOther: infoStep.input.gender.other,
          birthday: infoStep.input.labelBirthday,
          birthdayPlaceholder: infoStep.input.placeholderBirthday,
          password: infoStep.input.labelPassword,
          passwordPlaceholder: infoStep.input.placeholderPassword,
          passwordConfirm: infoStep.input.labelPasswordConfirm,
          passwordConfirmPlaceholder: infoStep.input.placeholderPasswordConfirm,
          submit: infoStep.button.submit
        }}
      />
    </AuthStepLayout>
  );
};

export default SignupInfo;
