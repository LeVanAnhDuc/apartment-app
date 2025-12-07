"use client";

// libs
import { FormProvider, useForm } from "react-hook-form";
// types
import type { SignupInfoFormValues } from "@/types/Signup";
// components
import PasswordInput from "@/components/PasswordInput";
import FullNameInput from "../../components/FullNameInput";
import GenderSelect from "../../components/GenderSelect";
import BirthdayInput from "../../components/BirthdayInput";
import SubmitButton from "../../components/SubmitButton";
// forms
import { signupInfoFormProps } from "@/forms/Signup";
// others
import CONSTANTS from "@/constants";

const { PASSWORD, PASSWORD_CONFIRM } = CONSTANTS.FIELD_NAMES.SIGNUP_FIELD_NAMES;

const InfoStepForm = ({
  labels
}: {
  labels: {
    fullName: string;
    fullNamePlaceholder: string;
    gender: string;
    genderPlaceholder: string;
    genderMale: string;
    genderFemale: string;
    genderOther: string;
    birthday: string;
    birthdayPlaceholder: string;
    password: string;
    passwordPlaceholder: string;
    passwordConfirm: string;
    passwordConfirmPlaceholder: string;
    submit: string;
  };
}) => {
  const methods = useForm<SignupInfoFormValues>({ ...signupInfoFormProps });

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const onSubmit = (data: SignupInfoFormValues) => {
    // TODO: Call API to register user with email and form data
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)} className="space-y-5">
        <FullNameInput
          label={labels.fullName}
          placeholder={labels.fullNamePlaceholder}
        />
        <GenderSelect
          label={labels.gender}
          placeholder={labels.genderPlaceholder}
          genderLabels={{
            male: labels.genderMale,
            female: labels.genderFemale,
            other: labels.genderOther
          }}
        />
        <BirthdayInput
          label={labels.birthday}
          placeholder={labels.birthdayPlaceholder}
        />
        <PasswordInput
          name={PASSWORD}
          label={labels.password}
          placeholder={labels.passwordPlaceholder}
          required
        />
        <PasswordInput
          name={PASSWORD_CONFIRM}
          label={labels.passwordConfirm}
          placeholder={labels.passwordConfirmPlaceholder}
          required
        />
        <SubmitButton label={labels.submit} />
      </form>
    </FormProvider>
  );
};

export default InfoStepForm;
