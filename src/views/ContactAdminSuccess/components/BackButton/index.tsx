"use client";

// libs
import { ArrowLeft } from "lucide-react";
// components
import CustomButton from "@/components/CustomButton";

const BackButton = ({
  label,
  onClick
}: {
  label: string;
  onClick: () => void;
}) => (
  <CustomButton
    onClick={onClick}
    iconLeft={<ArrowLeft className="mr-2 h-5 w-5" />}
    className="h-12 flex-1 bg-blue-600 transition-all duration-200 hover:bg-blue-700 hover:shadow-lg"
  >
    {label}
  </CustomButton>
);

export default BackButton;
