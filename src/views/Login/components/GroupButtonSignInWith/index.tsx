// libs
import { Facebook, Apple } from "lucide-react";
// component
import { Separator } from "@/components/ui/separator";
import ButtonSignInWith from "../ButtonSignInWith";

const GroupButtonSignInWith = () => (
  <main className="flex flex-col gap-5">
    <div className="flex items-center justify-center gap-2 overflow-hidden">
      <Separator className="bg-tertiary" />
      <span className="text-sm font-medium text-black">Or</span>
      <Separator className="bg-tertiary" />
    </div>

    <div className="grid grid-cols-3 gap-5">
      <ButtonSignInWith
        icon={
          <svg
            viewBox="0 0 24 24"
            fill="#000000"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            xmlns="http://www.w3.org/2000/svg"
            className="size-5"
          >
            <path d="M21.35 11.1H12v2.9h5.4c-.7 2.3-2.8 3.6-5.4 3.6-3.3 0-6-2.7-6-6s2.7-6 6-6c1.4 0 2.6.5 3.6 1.3l2.1-2.1C16.6 3.4 14.4 2.5 12 2.5 6.8 2.5 2.5 6.8 2.5 12S6.8 21.5 12 21.5c5 0 9.5-3.7 9.5-9 0-.4 0-.9-.1-1.4z" />
          </svg>
        }
      >
        Google
      </ButtonSignInWith>
      <ButtonSignInWith icon={<Facebook className="size-5" fill="#000000" />}>
        Facebook
      </ButtonSignInWith>
      <ButtonSignInWith icon={<Apple className="size-5" fill="#000000" />}>
        Apple
      </ButtonSignInWith>
    </div>
  </main>
);

export default GroupButtonSignInWith;
