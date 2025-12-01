"use client";

// libs
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
// components
import { Button } from "@/components/ui/button";

interface ResendMagicLinkButtonProps {
  countdown: number;
  canResend: boolean;
  isResending: boolean;
  onResend: () => void;
  onTryOther: () => void;
}

const ResendMagicLinkButton = ({
  countdown,
  canResend,
  isResending,
  onResend,
  onTryOther
}: ResendMagicLinkButtonProps) => {
  const t = useTranslations("forgotPassword.form.magicLink");

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.4 }}
      className="space-y-3"
    >
      <Button
        onClick={onResend}
        disabled={!canResend || isResending}
        variant="outline"
        className="h-12 w-full border-gray-300 transition-all duration-200 hover:border-gray-400 hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-50"
      >
        {isResending ? (
          <span className="flex items-center justify-center gap-2">
            <span className="h-4 w-4 animate-spin rounded-full border-2 border-orange-600 border-t-transparent" />
            <span>{t("button.sending")}</span>
          </span>
        ) : canResend ? (
          t("button.resend")
        ) : (
          t("button.resendIn", { seconds: countdown })
        )}
      </Button>

      <div className="text-center">
        <button
          type="button"
          onClick={onTryOther}
          className="text-primary hover:text-primary/80 text-sm transition-colors duration-200 hover:underline"
        >
          {t("button.tryOther")}
        </button>
      </div>
    </motion.div>
  );
};

export default ResendMagicLinkButton;
