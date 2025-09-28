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
  <Button
    variant="outline"
    className="border-primary text-primary hover:!bg-primary bg-white hover:text-white"
  >
    {icon}
    {children}
  </Button>
);

export default ButtonSignInWith;
