"use client";
// libs
import { Eye, EyeOff } from "lucide-react";
import { useCallback, useState } from "react";
// component
import Input from "@/components/Input";

const InputPassword = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = useCallback(() => {
    setShowPassword((prev) => !prev);
  }, []);

  return (
    <main className="relative size-full">
      <Input
        type={showPassword ? "text" : "password"}
        placeholder="Password"
        className="h-12"
      />
      <span
        className="absolute top-4 right-4 hover:cursor-pointer"
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
  );
};

export default InputPassword;
