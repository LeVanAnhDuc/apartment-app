"use client";

// libs
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { Clock } from "lucide-react";
// dataSources
import { NEXT_STEPS } from "@/dataSources/ContactAdmin";

const NextSteps = ({ email }: { email: string }) => {
  const t = useTranslations("contactAdmin.success.nextSteps");

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 }}
      className="mb-8"
    >
      <h3 className="text-foreground mb-4 flex items-center gap-2">
        <Clock className="h-5 w-5 text-purple-600 dark:text-purple-400" />
        {t("title")}
      </h3>

      <div className="space-y-3">
        {NEXT_STEPS.map((step, index) => (
          <motion.div
            key={step.key}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 + index * 0.1 }}
            className="bg-muted/50 flex items-start gap-4 rounded-xl p-4"
          >
            <div
              className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gradient-to-br text-white ${step.color}`}
            >
              {index + 1}
            </div>
            <div className="flex-1">
              <div className="text-foreground mb-1 text-sm">
                {t(`${step.key}.title`)}
              </div>
              <p className="text-muted-foreground text-xs">
                {t(`${step.key}.description`, { email })}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default NextSteps;
