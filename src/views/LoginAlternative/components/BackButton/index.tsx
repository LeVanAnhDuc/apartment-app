"use client";

// libs
import { ArrowLeft } from "lucide-react";
// components
import { Button } from "@/components/ui/button";
// others
import { useRouter } from "@/i18n/navigation";
import CONSTANTS from "@/constants";

const { LOGIN } = CONSTANTS.ROUTES;

const BackButton = () => {
  const router = useRouter();

  const handleBack = () => {
    router.push(LOGIN);
  };

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={handleBack}
      className="absolute top-4 left-4 rounded-full"
    >
      <ArrowLeft className="h-5 w-5" />
    </Button>
  );
};

export default BackButton;
