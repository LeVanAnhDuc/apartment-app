"use client";

// libs
import { useEffect } from "react";
import { useRouter } from "next/navigation";

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
  }, [email, redirectTo, router]);

  return { hasEmail: !!email };
};

export default useEmailGuard;
