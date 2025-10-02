// libs
import { DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { LogOut } from "lucide-react";

const SignoutItem = () => (
  <DropdownMenuItem className="group cursor-pointer rounded-lg px-3 py-2 transition-colors focus:bg-red-50">
    <div className="flex w-full items-center gap-3 text-red-600">
      <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-red-100">
        <LogOut className="size4" />
      </div>
      <div className="flex-1">
        <p className="text-sm font-semibold">Sign Out</p>
        <p className="text-xs text-red-500">Logout from account</p>
      </div>
    </div>
  </DropdownMenuItem>
);

export default SignoutItem;
