// components
import { FadeIn } from "@/components/Animated";

const MagicLinkInstructions = ({
  labels
}: {
  labels: {
    checkEmail: string;
    clickLink: string;
    checkSpam: string;
  };
}) => (
  <FadeIn delay={0.3} className="mb-6 space-y-4">
    <div className="rounded-lg bg-blue-50 p-4">
      <p className="text-sm text-gray-700">
        <span className="mb-2 block">📧 {labels.checkEmail}</span>
        {labels.clickLink}
      </p>
    </div>

    <div className="rounded-lg border border-yellow-200 bg-yellow-50 p-4">
      <p className="text-sm text-gray-700">
        💡 <span>{labels.checkSpam}</span>
      </p>
    </div>
  </FadeIn>
);

export default MagicLinkInstructions;
