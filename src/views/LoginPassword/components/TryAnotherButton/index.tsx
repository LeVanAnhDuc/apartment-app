"use client";

// components
import CustomButton from "@/components/CustomButton";
// others
import { useRouter } from "@/i18n/navigation";
import CONSTANTS from "@/constants";

const { LOGIN_ALTERNATIVE } = CONSTANTS.ROUTES;

const TryAnotherButton = ({
  email,
  disabled = false,
  label
}: {
  email: string;
  disabled?: boolean;
  label: string;
}) => {
  const router = useRouter();

  const handleClick = () => {
    const encodedEmail = encodeURIComponent(email);
    router.push(`${LOGIN_ALTERNATIVE}?email=${encodedEmail}`);
  };

  return (
    <CustomButton
      type="button"
      variant="outline"
      onClick={handleClick}
      disabled={disabled}
      className="border-input hover:bg-accent h-12 flex-1 rounded-lg transition-all duration-200 disabled:cursor-not-allowed disabled:opacity-50"
    >
      {label}
    </CustomButton>
  );
};

export default TryAnotherButton;
