// components
import { FadeIn } from "@/components/Animated";

const OtpInstruction = ({ label }: { label: string }) => (
  <FadeIn delay={0.4} className="mb-6">
    <div className="rounded-lg bg-green-50 p-4 dark:bg-green-900/20">
      <p className="text-muted-foreground text-center text-sm">{label}</p>
    </div>
  </FadeIn>
);

export default OtpInstruction;
