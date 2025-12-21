// libs
import { CheckCircle2 } from "lucide-react";
// components
import { ScaleSpring, PulseRipple } from "@/components/Animated";

const SuccessIcon = () => (
  <ScaleSpring
    stiffness={200}
    damping={15}
    className="relative mb-6 inline-flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-green-500 to-emerald-600"
  >
    <CheckCircle2 className="h-14 w-14 text-white" />
    <PulseRipple />
  </ScaleSpring>
);

export default SuccessIcon;
