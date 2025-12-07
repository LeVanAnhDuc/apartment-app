"use client";

// libs
import { motion } from "framer-motion";
// components
import CustomButton from "@/components/CustomButton";
import { Link } from "@/i18n/navigation";

const ResendButton = ({
  countdown,
  canResend,
  isResending,
  isProcessing = false,
  onResend,
  tryOtherHref,
  labels
}: {
  countdown: number;
  canResend: boolean;
  isResending: boolean;
  isProcessing?: boolean;
  onResend: () => void;
  tryOtherHref: string;
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
    <CustomButton
      onClick={onResend}
      disabled={!canResend || isProcessing}
      loading={isResending}
      variant="outline"
      fullWidth
      className="h-12 border-gray-300 transition-all duration-200 hover:border-gray-400 hover:bg-gray-50"
    >
      {isResending
        ? labels.sending
        : canResend
          ? labels.resend
          : labels.resendIn.replace("{seconds}", String(countdown))}
    </CustomButton>

    <div className="text-center">
      <Link
        href={tryOtherHref}
        aria-disabled={isProcessing}
        className="text-primary hover:text-primary/80 text-sm transition-colors duration-200 hover:underline aria-disabled:pointer-events-none aria-disabled:opacity-50"
      >
        {labels.tryOther}
      </Link>
    </div>
  </motion.div>
);

export default ResendButton;
