"use client";

// libs
import { useState } from "react";
import { useRouter } from "next/navigation";
// types
import type { RequestResetFormValues } from "@/types/ForgotPassword";
// components
import RequestResetStep from "./mains/RequestResetStep";
import VerifyCodeStep from "./mains/VerifyCodeStep";
import ResetPasswordStep from "./mains/ResetPasswordStep";
// dataSources
import { EForgotPasswordStep } from "@/dataSources/ForgotPassword/enums";
// others
import CONSTANTS from "@/constants";

const { ANIMATION_DURATION } = CONSTANTS.FORGOT_PASSWORD;

const ForgotPassword = () => {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState<
    UnionEnum<EForgotPasswordStep>
  >(EForgotPasswordStep.REQUEST_RESET);
  const [email, setEmail] = useState<string>("");
  const [isAnimating, setIsAnimating] = useState(false);

  const handleRequestResetSuccess = (values: RequestResetFormValues) => {
    setEmail(values.email);
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentStep(EForgotPasswordStep.VERIFY_CODE);
      setIsAnimating(false);
    }, ANIMATION_DURATION);
  };

  const handleVerifyCodeSuccess = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentStep(EForgotPasswordStep.RESET_PASSWORD);
      setIsAnimating(false);
    }, ANIMATION_DURATION);
  };

  const handleResetPasswordSuccess = () => router.push(CONSTANTS.ROUTES.LOGIN);

  const handleBackToLogin = () => router.push(CONSTANTS.ROUTES.LOGIN);

  const handleBackToRequestReset = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentStep(EForgotPasswordStep.REQUEST_RESET);
      setIsAnimating(false);
    }, ANIMATION_DURATION);
  };

  const renderStep = () => {
    const { REQUEST_RESET, VERIFY_CODE, RESET_PASSWORD } = EForgotPasswordStep;
    switch (currentStep) {
      case REQUEST_RESET:
        return (
          <RequestResetStep
            onSuccess={handleRequestResetSuccess}
            onBackToLogin={handleBackToLogin}
          />
        );
      case VERIFY_CODE:
        return (
          <VerifyCodeStep
            email={email}
            onSuccess={handleVerifyCodeSuccess}
            onBack={handleBackToRequestReset}
          />
        );
      case RESET_PASSWORD:
        return (
          <ResetPasswordStep
            email={email}
            onSuccess={handleResetPasswordSuccess}
          />
        );
      default:
        return null;
    }
  };

  return (
    <main className="auth-background flex h-full items-center justify-center">
      <div
        className={`transition-all duration-300 ${
          isAnimating
            ? "translate-x-4 transform opacity-0"
            : "translate-x-0 transform opacity-100"
        }`}
      >
        {renderStep()}
      </div>
    </main>
  );
};

export default ForgotPassword;
