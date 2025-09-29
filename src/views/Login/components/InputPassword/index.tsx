"use client";
// libs
import { Eye, EyeOff } from "lucide-react";
import { useCallback, useState } from "react";
// component
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

const InputPassword = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = useCallback(() => {
    setShowPassword((prev) => !prev);
  }, []);

  return (
    <div className="grid gap-3">
      <Label htmlFor="password">Password</Label>
      <main className="relative size-full">
        <Input
          type={showPassword ? "text" : "password"}
          placeholder="Password"
          id="password"
        />
        <span
          className="absolute top-1/2 right-4 -translate-y-1/2 transform hover:cursor-pointer"
          onClick={togglePasswordVisibility}
          onMouseDown={(e) => e.preventDefault()}
        >
          {showPassword ? (
            <EyeOff className="text-primary size-5" />
          ) : (
            <Eye className="text-primary size-5" />
          )}
        </span>
      </main>
    </div>
  );
};

export default InputPassword;
