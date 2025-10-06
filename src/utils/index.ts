// libs
import { toast } from "sonner";

export const confirmErrorToast = (message: string) => {
  toast.error(message, {
    duration: Infinity,
    action: {
      label: "OK",
      onClick: () => {}
    }
  });
};
