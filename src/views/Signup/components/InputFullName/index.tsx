// component
import { Input } from "@/components/ui/input";

const InputFullName = () => (
  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
    <Input type="text" placeholder="First Name" />
    <Input type="text" placeholder="Last Name" />
  </div>
);

export default InputFullName;
