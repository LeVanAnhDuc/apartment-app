// libs
import { LogOut } from "lucide-react";
import { useTranslations } from "next-intl";
// components
import { DropdownMenuItem } from "@/components/ui/dropdown-menu";
// hooks
import { useLogoutMutation } from "@/services/auths";
// i18n
import { useRouter } from "@/i18n/navigation";

const SignoutItem = () => {
  const router = useRouter();
  const t = useTranslations("common");
  const { mutate, isPending } = useLogoutMutation();

  const handleLogout = () => {
    mutate(undefined, {
      onSuccess: () => {
        router.push("/login");
      }
    });
  };

  return (
    <DropdownMenuItem
      className="group focus:bg-destructive/10 dark:focus:bg-destructive/20 cursor-pointer rounded-lg px-3 py-2 transition-colors duration-300"
      onClick={handleLogout}
      disabled={isPending}
    >
      <div className="text-destructive flex w-full items-center gap-3">
        <div className="bg-destructive/10 dark:bg-destructive/20 flex h-9 w-9 items-center justify-center rounded-lg transition-colors duration-300">
          <LogOut className="size-4" />
        </div>
        <div className="flex-1">
          <p className="text-destructive text-sm font-semibold transition-colors duration-300">
            {t("avatarDropdown.signOut")}
          </p>
          <p className="text-destructive/70 text-xs transition-colors duration-300">
            {t("avatarDropdown.logoutDescription")}
          </p>
        </div>
      </div>
    </DropdownMenuItem>
  );
};

export default SignoutItem;
