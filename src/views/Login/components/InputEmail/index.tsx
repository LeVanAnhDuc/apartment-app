// component
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const InputEmail = () => (
  <div className="grid gap-3">
    <Label htmlFor="email">Email</Label>
    <Input id="email" type="email" placeholder="m@example.com" required />
  </div>
);

export default InputEmail;
