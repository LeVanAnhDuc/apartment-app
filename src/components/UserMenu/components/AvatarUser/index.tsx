// libs
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
// others
import { cn } from "@/libs/utils";

const AvatarUser = ({ className }: { className?: string }) => (
  <Avatar className={cn("size-9 cursor-pointer", className)}>
    <AvatarImage src="" alt="User Avatar" />
    <AvatarFallback className="font-semibold">DC</AvatarFallback>
  </Avatar>
);

export default AvatarUser;
