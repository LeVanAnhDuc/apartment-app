"use client";

// libs
import { useCallback, useEffect } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import { Headset } from "lucide-react";
// types
import type { ContactAdminFormValues } from "@/types/ContactAdmin";
// components
import AuthStepLayout from "@/components/AuthStepLayout";
import AuthIcon from "@/components/AuthIcon";
import ResponseTimeAlert from "../../components/ResponseTimeAlert";
import EmailInput from "../../components/EmailInput";
import SubjectInput from "../../components/SubjectInput";
import CategorySelect from "../../components/CategorySelect";
import PrioritySelect from "../../components/PrioritySelect";
import MessageTextarea from "../../components/MessageTextarea";
import SubmitButton from "../../components/SubmitButton";
// ghosts
import InitEffect from "../../ghosts/InitEffect";
// forms
import { contactAdminFormProps } from "@/forms/ContactAdmin";
// stores
import { useContactAdminStore } from "@/stores";
// others
import CONSTANTS from "@/constants";

const { EMAIL } = CONSTANTS.FIELD_NAMES.CONTACT_ADMIN_FIELD_NAMES;

const FormStepMain = () => {
  const t = useTranslations("contactAdmin.form");
  const router = useRouter();

  const email = useContactAdminStore((state) => state.email);
  const isEmailFromRedirect = useContactAdminStore(
    (state) => state.isEmailFromRedirect
  );
  const referrerPath = useContactAdminStore((state) => state.referrerPath);
  const setEmail = useContactAdminStore((state) => state.setEmail);
  const goToSuccessStep = useContactAdminStore(
    (state) => state.goToSuccessStep
  );

  const methods = useForm<ContactAdminFormValues>({ ...contactAdminFormProps });
  const { setValue, formState } = methods;
  const { isSubmitting } = formState;

  useEffect(() => {
    if (email) {
      setValue(EMAIL, email);
    }
  }, [email, setValue]);

  const handleEmailInit = useCallback(
    (emailValue: string, isFromRedirect: boolean) => {
      setEmail(emailValue, isFromRedirect);
      setValue(EMAIL, emailValue);
    },
    [setEmail, setValue]
  );

  const handleBack = useCallback(() => {
    if (referrerPath) {
      router.push(referrerPath);
    } else {
      router.back();
    }
  }, [referrerPath, router]);

  const generateTicketNumber = () =>
    `TICKET-${Date.now().toString().slice(-8)}`;

  const onSubmit = async (data: ContactAdminFormValues) => {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));

    const ticketNumber = generateTicketNumber();
    goToSuccessStep(data, ticketNumber);
  };

  return (
    <AuthStepLayout
      icon={<AuthIcon Icon={Headset} variant="purple" animated />}
      title={t("title")}
      description={t("description")}
      onBack={handleBack}
      backDisabled={isSubmitting}
      maxWidth="2xl"
      ghostComponents={<InitEffect onEmailInit={handleEmailInit} />}
    >
      <ResponseTimeAlert />

      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)} className="space-y-5">
          <EmailInput
            disabled={isSubmitting}
            isFromRedirect={isEmailFromRedirect}
          />

          <SubjectInput disabled={isSubmitting} />

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            <CategorySelect disabled={isSubmitting} />
            <PrioritySelect disabled={isSubmitting} />
          </div>

          <MessageTextarea disabled={isSubmitting} />

          <SubmitButton isSubmitting={isSubmitting} />
        </form>
      </FormProvider>

      <div className="bg-muted mt-6 rounded-lg p-4">
        <p className="text-muted-foreground text-center text-sm">
          {t("footerNote")}
        </p>
      </div>
    </AuthStepLayout>
  );
};

export default FormStepMain;
