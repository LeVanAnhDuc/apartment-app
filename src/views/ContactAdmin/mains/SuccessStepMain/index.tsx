"use client";

// libs
import { useCallback } from "react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import { ArrowLeft, Printer } from "lucide-react";
// components
import AuthStepLayout from "@/components/AuthStepLayout";
import CustomButton from "@/components/CustomButton";
import SuccessIcon from "../../components/SuccessIcon";
import TicketInfo from "../../components/TicketInfo";
import NextSteps from "../../components/NextSteps";
import ImportantNotes from "../../components/ImportantNotes";
// stores
import { useContactAdminStore } from "@/stores";

const SuccessStepMain = () => {
  const t = useTranslations("contactAdmin.success");
  const router = useRouter();

  const formData = useContactAdminStore((state) => state.formData);
  const ticketNumber = useContactAdminStore((state) => state.ticketNumber);
  const referrerPath = useContactAdminStore((state) => state.referrerPath);
  const reset = useContactAdminStore((state) => state.reset);

  const handleBackToDashboard = useCallback(() => {
    reset();
    if (referrerPath) {
      router.push(referrerPath);
    } else {
      router.push("/");
    }
  }, [referrerPath, router, reset]);

  const handlePrint = useCallback(() => {
    window.print();
  }, []);

  if (!formData || !ticketNumber) return null;

  return (
    <AuthStepLayout
      icon={<SuccessIcon />}
      title={t("title")}
      description={t("description")}
      maxWidth="2xl"
    >
      <TicketInfo ticketNumber={ticketNumber} formData={formData} />

      <NextSteps email={formData.email} />

      <ImportantNotes ticketNumber={ticketNumber} />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
        className="flex flex-col gap-3 sm:flex-row"
      >
        <CustomButton
          onClick={handleBackToDashboard}
          iconLeft={<ArrowLeft className="mr-2 h-5 w-5" />}
          className="h-12 flex-1 bg-blue-600 transition-all duration-200 hover:bg-blue-700 hover:shadow-lg"
        >
          {t("button.backToDashboard")}
        </CustomButton>

        <CustomButton
          variant="outline"
          onClick={handlePrint}
          iconLeft={<Printer className="mr-2 h-5 w-5" />}
          className="hover:bg-muted h-12 flex-1 transition-all duration-200"
        >
          {t("button.print")}
        </CustomButton>
      </motion.div>
    </AuthStepLayout>
  );
};

export default SuccessStepMain;
