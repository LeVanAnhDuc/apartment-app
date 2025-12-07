"use client";

// others
import { useRouter } from "@/i18n/navigation";
import CONSTANTS from "@/constants";

const { FORGOT_PASSWORD } = CONSTANTS.ROUTES;

const ForgotPasswordLink = ({
  email,
  label
}: {
  email: string;
  label: string;
}) => {
  const router = useRouter();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const encodedEmail = encodeURIComponent(email);
    router.push(`${FORGOT_PASSWORD}?email=${encodedEmail}`);
  };

  return (
    <div className="flex items-center justify-between text-sm">
      <a
        href={FORGOT_PASSWORD}
        onClick={handleClick}
        className="text-primary transition-colors duration-200 hover:underline"
      >
        {label}
      </a>
    </div>
  );
};

export default ForgotPasswordLink;
