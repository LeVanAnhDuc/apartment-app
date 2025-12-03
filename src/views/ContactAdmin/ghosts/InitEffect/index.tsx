"use client";

// libs
import { useEffect } from "react";
import { useSearchParams } from "next/navigation";
// stores
import { useContactAdminStore } from "@/stores";

const InitEffect = ({
  onEmailInit
}: {
  onEmailInit: (email: string, isFromRedirect: boolean) => void;
}) => {
  const searchParams = useSearchParams();
  const setReferrerPath = useContactAdminStore(
    (state) => state.setReferrerPath
  );

  useEffect(() => {
    const emailParam = searchParams.get("email");
    const fromParam = searchParams.get("from");

    if (emailParam) {
      onEmailInit(emailParam, true);
    }

    if (fromParam) {
      setReferrerPath(fromParam);
    }
  }, [searchParams, onEmailInit, setReferrerPath]);

  return null;
};

export default InitEffect;
