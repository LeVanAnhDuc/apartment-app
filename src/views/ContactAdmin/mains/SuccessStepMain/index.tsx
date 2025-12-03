"use client";

// libs
import { useCallback } from "react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import { ArrowLeft, Printer } from "lucide-react";
// components
import { Button } from "@/components/ui/button";
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
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
      className="w-full max-w-2xl"
    >
      <div className="auth-card p-8 md:p-10">
        <div className="mb-8 text-center">
          <SuccessIcon />

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <h1 className="mb-3 text-2xl font-medium text-green-600">
              {t("title")}
            </h1>
            <p className="text-foreground mb-2 text-lg">{t("subtitle")}</p>
            <p className="text-muted-foreground text-sm">{t("description")}</p>
          </motion.div>
        </div>

        <TicketInfo ticketNumber={ticketNumber} formData={formData} />

        <NextSteps email={formData.email} />

        <ImportantNotes ticketNumber={ticketNumber} />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="flex flex-col gap-3 sm:flex-row"
        >
          <Button
            onClick={handleBackToDashboard}
            className="h-12 flex-1 bg-blue-600 transition-all duration-200 hover:bg-blue-700 hover:shadow-lg"
          >
            <ArrowLeft className="mr-2 h-5 w-5" />
            {t("button.backToDashboard")}
          </Button>

          <Button
            variant="outline"
            onClick={handlePrint}
            className="hover:bg-muted h-12 flex-1 transition-all duration-200"
          >
            <Printer className="mr-2 h-5 w-5" />
            {t("button.print")}
          </Button>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default SuccessStepMain;
