"use client";

// components
import FormStepMain from "../FormStepMain";
import SuccessStepMain from "../SuccessStepMain";
// stores
import { useContactAdminStore } from "@/stores";

const ContactAdminStepSwitch = () => {
  const step = useContactAdminStore((state) => state.step);

  if (step === "success") return <SuccessStepMain />;

  return <FormStepMain />;
};

export default ContactAdminStepSwitch;
