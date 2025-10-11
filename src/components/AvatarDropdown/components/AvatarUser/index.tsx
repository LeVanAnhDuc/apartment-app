// libs
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
// others
import { cn } from "@/libs/utils";

const AvatarUser = ({ className }: { className?: string }) => (
  <Avatar
    className={cn(
      "size-9 cursor-pointer shadow-lg transition-all duration-300 hover:shadow-xl dark:shadow-slate-800 dark:hover:shadow-slate-700",
      className
    )}
  >
    <AvatarImage src="https://github.com/shadcn.png" alt="User Avatar" />
    <AvatarFallback className="bg-gradient-to-br from-blue-500 to-purple-600 font-semibold text-white dark:from-slate-600 dark:to-slate-700 dark:text-slate-200">
      DC
    </AvatarFallback>
  </Avatar>
);

export default AvatarUser;
