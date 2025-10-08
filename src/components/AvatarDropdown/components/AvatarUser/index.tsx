// libs
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
// others
import { cn } from "@/libs/utils";

const AvatarUser = ({ className }: { className?: string }) => (
  <Avatar
    className={cn(
      "size-9 cursor-pointer shadow-lg transition-all duration-300 hover:shadow-xl",
      className
    )}
  >
    <AvatarImage src="https://github.com/shadcn.png" alt="User Avatar" />
    <AvatarFallback className="bg-gradient-to-br from-blue-500 to-purple-600 font-semibold text-white">
      DC
    </AvatarFallback>
  </Avatar>
);

export default AvatarUser;
