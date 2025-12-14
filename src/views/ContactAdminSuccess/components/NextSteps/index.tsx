"use client";

// libs
import { motion } from "framer-motion";
import { Clock, CheckCircle, AlertTriangle } from "lucide-react";
// types
import type { ContactAdminMessages } from "@/types/libs";
// dataSources
import { NEXT_STEPS } from "@/dataSources/ContactAdmin";

const NextSteps = ({
  email,
  labels,
  responseLabels
}: {
  email?: string;
  labels: ContactAdminMessages["success"]["nextSteps"];
  responseLabels?: ContactAdminMessages["success"]["response"];
}) => {
  const steps = [
    { ...NEXT_STEPS[0], ...labels.step1 },
    { ...NEXT_STEPS[1], ...labels.step2 },
    { ...NEXT_STEPS[2], ...labels.step3 }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 }}
      className="mb-8"
    >
      <h3 className="text-foreground mb-4 flex items-center gap-2">
        <Clock className="h-5 w-5 text-purple-600 dark:text-purple-400" />
        {labels.title}
      </h3>

      {/* Response status based on email */}
      {responseLabels && (
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.55 }}
          className={`mb-4 rounded-lg p-4 ${
            email
              ? "border border-green-200 bg-green-50 dark:border-green-800 dark:bg-green-950/30"
              : "border border-amber-200 bg-amber-50 dark:border-amber-800 dark:bg-amber-950/30"
          }`}
        >
          {email ? (
            <div className="flex items-start gap-3">
              <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-green-600 dark:text-green-400" />
              <div>
                <p className="text-sm text-green-800 dark:text-green-200">
                  {responseLabels.withEmail?.replace("{email}", email)}
                </p>
                <p className="mt-1 text-xs text-green-600 dark:text-green-400">
                  {responseLabels.withEmailTime}
                </p>
              </div>
            </div>
          ) : (
            <div className="flex items-start gap-3">
              <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-amber-600 dark:text-amber-400" />
              <div>
                <p className="text-sm text-amber-800 dark:text-amber-200">
                  {responseLabels.anonymous}
                </p>
                <p className="mt-1 text-xs text-amber-600 dark:text-amber-400">
                  {responseLabels.anonymousNote}
                </p>
                <p className="mt-1 text-xs font-medium text-amber-700 dark:text-amber-300">
                  {responseLabels.anonymousSaveTicket}
                </p>
              </div>
            </div>
          )}
        </motion.div>
      )}

      <div className="space-y-3">
        {steps.map((step, index) => (
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
              <div className="text-foreground mb-1 text-sm">{step.title}</div>
              <p className="text-muted-foreground text-xs">
                {step.description.replace("{email}", email || "")}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default NextSteps;
