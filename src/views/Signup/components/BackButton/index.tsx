// libs
import { ChevronLeft } from "lucide-react";
// components
import { Button } from "@/components/ui/button";

const BackButton = ({
  onClick,
  disabled = false
}: {
  onClick: () => void;
  disabled?: boolean;
}) => (
  <Button
    onClick={onClick}
    variant="ghost"
    size="icon"
    disabled={disabled}
    className="hover:bg-accent absolute top-6 left-6 rounded-full transition-all duration-200 md:top-8 md:left-8"
    type="button"
  >
    <ChevronLeft className="text-muted-foreground h-5 w-5" />
  </Button>
);

export default BackButton;
