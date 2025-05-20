// component
import Input from "@/components/Input";

const InputFullName = () => (
  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
    <Input type="text" placeholder="First Name" className="h-13" />
    <Input type="text" placeholder="Last Name" className="h-13" />
  </div>
);

export default InputFullName;
