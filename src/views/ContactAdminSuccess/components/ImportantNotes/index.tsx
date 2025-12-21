// types
import type { ContactAdminMessages } from "@/types/libs";
// components
import { FadeSlideUp } from "@/components/Animated";

const ImportantNotes = ({
  ticketNumber,
  labels
}: {
  ticketNumber: string | null;
  labels: ContactAdminMessages["success"]["importantNotes"];
}) => (
  <FadeSlideUp
    delay={0.9}
    className="mb-8 rounded-xl border border-amber-200 bg-amber-50 p-4 dark:border-amber-800 dark:bg-amber-950/30"
  >
    <p className="mb-2 text-sm text-amber-900 dark:text-amber-100">
      {labels.title}
    </p>
    <ul className="list-inside list-disc space-y-1 text-xs text-amber-800 dark:text-amber-200">
      {ticketNumber && (
        <li>{labels.note1.replace("{ticketNumber}", ticketNumber)}</li>
      )}
      <li>{labels.note2}</li>
      <li>{labels.note3}</li>
    </ul>
  </FadeSlideUp>
);

export default ImportantNotes;
