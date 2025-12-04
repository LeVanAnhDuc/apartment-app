// libs
import { ChevronLeft } from "lucide-react";
// components
import CustomButton from "@/components/CustomButton";

const BackButton = ({
  onClick,
  disabled = false
}: {
  onClick: () => void;
  disabled?: boolean;
}) => (
  <CustomButton
    onClick={onClick}
    variant="ghost"
    disabled={disabled}
    className="hover:bg-accent absolute top-6 left-6 h-10 w-10 rounded-full p-0 transition-all duration-200 md:top-8 md:left-8"
    type="button"
  >
    <ChevronLeft className="text-muted-foreground h-5 w-5" />
  </CustomButton>
);

export default BackButton;
