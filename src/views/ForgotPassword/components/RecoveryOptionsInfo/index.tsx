// components
import { FadeIn } from "@/components/Animated";

const RecoveryOptionsInfo = ({ hint }: { hint: string }) => (
  <FadeIn
    delay={0.4}
    y={10}
    className="mt-6 rounded-lg border border-amber-200 bg-amber-50 p-4"
  >
    <p className="text-center text-sm text-gray-700">💡 {hint}</p>
  </FadeIn>
);

export default RecoveryOptionsInfo;
