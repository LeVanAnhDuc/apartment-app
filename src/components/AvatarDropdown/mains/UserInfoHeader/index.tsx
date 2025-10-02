// libs
import { Mail } from "lucide-react";
// components
import AvatarUser from "../../components/AvatarUser";

const UserInfoHeader = () => (
  <div className="flex items-center gap-3 p-3">
    <AvatarUser className="size-10" />
    <div className="min-w-0 flex-1">
      <p className="truncate font-semibold">John Doe</p>
      <div className="mt-0.5 flex items-center gap-1 text-sm text-slate-500">
        <Mail className="size-4" />
        <span className="truncate">John.doe@email.com</span>
      </div>
    </div>
  </div>
);

export default UserInfoHeader;
