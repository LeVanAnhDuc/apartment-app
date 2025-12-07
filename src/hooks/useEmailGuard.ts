"use client";

// libs
import { useEffect } from "react";
// others
import { useRouter } from "@/i18n/navigation";

const useEmailGuard = ({
  email,
  redirectTo
}: {
  email: string;
  redirectTo: string;
}) => {
  const router = useRouter();

  useEffect(() => {
    if (!email) router.replace(redirectTo);
  }, []);

  return { hasEmail: !!email };
};

export default useEmailGuard;
