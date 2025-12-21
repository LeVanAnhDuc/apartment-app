// types
import type { LoginMessages } from "@/types/libs";
// components
import { FadeIn } from "@/components/Animated";

const MagicLinkInstructions = ({
  translations
}: {
  translations: LoginMessages;
}) => {
  const {
    instruction: { check, detail },
    hint: { title, description }
  } = translations.form.magicLink;

  return (
    <FadeIn delay={0.3} className="mb-6 space-y-4">
      <div className="bg-primary/5 rounded-lg p-4">
        <p className="text-foreground text-sm">
          <span className="mb-2 block">{check}</span>
          {detail}
        </p>
      </div>

      <div className="rounded-lg border border-yellow-200 bg-yellow-50 p-4 dark:border-yellow-800 dark:bg-yellow-950/30">
        <p className="text-foreground text-sm">
          <span className="font-medium">{title}</span> {description}
        </p>
      </div>
    </FadeIn>
  );
};

export default MagicLinkInstructions;
