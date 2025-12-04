"use client";

// libs
import { useCallback, useEffect } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { ArrowLeft, Headset } from "lucide-react";
// types
import type { ContactAdminFormValues } from "@/types/ContactAdmin";
// components
import CustomButton from "@/components/CustomButton";
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
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="w-full max-w-2xl"
    >
      <div className="auth-card p-8 md:p-10">
        <div className="mb-6">
          <CustomButton
            onClick={handleBack}
            variant="ghost"
            disabled={isSubmitting}
            iconLeft={<ArrowLeft className="mr-2 h-4 w-4" />}
            className="text-muted-foreground hover:text-foreground hover:bg-muted h-9 px-3"
          >
            {t("button.back")}
          </CustomButton>
        </div>

        <div className="mb-8 text-center">
          <AuthIcon Icon={Headset} variant="purple" animated />
          <h1 className="text-foreground mb-2 text-2xl font-medium">
            {t("title")}
          </h1>
          <p className="text-muted-foreground">{t("description")}</p>
        </div>

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
      </div>

      <InitEffect onEmailInit={handleEmailInit} />
    </motion.div>
  );
};

export default FormStepMain;
