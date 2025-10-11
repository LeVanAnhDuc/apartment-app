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
      className="group cursor-pointer rounded-lg px-3 py-2 transition-colors focus:bg-red-50"
      onClick={handleLogout}
      disabled={isPending}
    >
      <div className="flex w-full items-center gap-3 text-red-600">
        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-red-100">
          <LogOut className="size-4" />
        </div>
        <div className="flex-1">
          <p className="text-sm font-semibold">{t("avatarDropdown.signOut")}</p>
          <p className="text-xs text-red-500">
            {t("avatarDropdown.logoutDescription")}
          </p>
        </div>
      </div>
    </DropdownMenuItem>
  );
};

export default SignoutItem;
