// component
import { Separator } from "@/components/ui/separator";

const OtherSignInWith = () => (
  <div className="flex items-center justify-center gap-2">
    <Separator className="flex-1 bg-gray-400" />
    <span className="flex-1 text-center text-sm font-medium text-gray-400 uppercase">
      Or Sign in with
    </span>
    <Separator className="flex-1 bg-gray-400" />
  </div>
);

export default OtherSignInWith;
