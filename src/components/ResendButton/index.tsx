"use client";

// libs
import { motion } from "framer-motion";
// components
import { Button } from "@/components/ui/button";

const ResendButton = ({
  countdown,
  canResend,
  isResending,
  isProcessing = false,
  onResend,
  onTryOther,
  labels
}: {
  countdown: number;
  canResend: boolean;
  isResending: boolean;
  isProcessing?: boolean;
  onResend: () => void;
  onTryOther: () => void;
  labels: {
    resend: string;
    resendIn: string;
    sending: string;
    tryOther: string;
  };
}) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 0.4 }}
    className="space-y-3"
  >
    <Button
      onClick={onResend}
      disabled={!canResend || isResending || isProcessing}
      variant="outline"
      className="h-12 w-full border-gray-300 transition-all duration-200 hover:border-gray-400 hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-50"
    >
      {isResending ? (
        <span className="flex items-center justify-center gap-2">
          <span className="h-4 w-4 animate-spin rounded-full border-2 border-orange-600 border-t-transparent" />
          <span>{labels.sending}</span>
        </span>
      ) : canResend ? (
        labels.resend
      ) : (
        labels.resendIn.replace("{seconds}", String(countdown))
      )}
    </Button>

    <div className="text-center">
      <button
        type="button"
        onClick={onTryOther}
        disabled={isProcessing}
        className="text-primary hover:text-primary/80 text-sm transition-colors duration-200 hover:underline disabled:opacity-50"
      >
        {labels.tryOther}
      </button>
    </div>
  </motion.div>
);

export default ResendButton;
