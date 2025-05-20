// types
import type { ReactNode } from "react";
// components
import Button from "@/components/Button";

const ButtonSignInWith = ({
  icon,
  children
}: {
  icon: ReactNode;
  children: ReactNode;
}) => (
  <Button className="text-primary border-primary hover:bg-background flex h-10 w-full items-center justify-center gap-2 border-1 bg-transparent hover:border-black">
    {icon}
    {children}
  </Button>
);

export default ButtonSignInWith;
