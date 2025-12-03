"use client";

// libs
import { useEffect } from "react";
import { useRouter } from "next/navigation";
// others
import CONSTANTS from "@/constants";

const { LOGIN } = CONSTANTS.ROUTES;

/**
 * Hook to guard pages that require email in store.
 * Redirects to login page if email is not present.
 */
const useEmailGuard = ({
  email,
  redirectTo = LOGIN
}: {
  email: string;
  redirectTo?: string;
}) => {
  const router = useRouter();

  useEffect(() => {
    if (!email) router.replace(redirectTo);
  }, [email, redirectTo, router]);

  return { hasEmail: !!email };
};

export default useEmailGuard;
