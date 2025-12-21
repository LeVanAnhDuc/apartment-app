// libs
import { Mail } from "lucide-react";
// types
import type { ContactAdminFormValues } from "@/types/ContactAdmin";
import type { ContactAdminMessages } from "@/types/libs";
// components
import { FadeSlideUp } from "@/components/Animated";
// dataSources
import { PRIORITIES } from "@/dataSources/ContactAdmin";

const TicketInfo = ({
  ticketNumber,
  formData,
  labels,
  categoryLabels,
  priorityLabels
}: {
  ticketNumber: string | null;
  formData: ContactAdminFormValues | null;
  labels: ContactAdminMessages["success"]["ticketInfo"];
  categoryLabels: ContactAdminMessages["form"]["category"];
  priorityLabels: ContactAdminMessages["form"]["priority"];
}) => {
  const { subject, category, priority } = formData || {};
  const priorityStyle = priority
    ? PRIORITIES[priority].styleClass
    : PRIORITIES.medium.styleClass;

  const categoryLabel = category
    ? categoryLabels[category as keyof typeof categoryLabels]
    : "";
  const priorityLabel = priority
    ? priorityLabels[priority as keyof typeof priorityLabels]
    : "";

  return (
    <FadeSlideUp
      delay={0.4}
      className="mb-8 rounded-xl border-2 border-blue-200 bg-gradient-to-br from-blue-50 to-indigo-50 p-6 dark:border-blue-800 dark:from-blue-950/30 dark:to-indigo-950/30"
    >
      <div className="mb-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Mail className="h-5 w-5 text-blue-600 dark:text-blue-400" />
          <span className="text-sm text-blue-900 dark:text-blue-100">
            {labels.title}
          </span>
        </div>
        <span className="rounded-full bg-blue-100 px-3 py-1 font-mono text-sm text-blue-700 dark:bg-blue-900/50 dark:text-blue-300">
          {ticketNumber}
        </span>
      </div>

      <div className="space-y-3">
        <div className="flex items-start justify-between">
          <span className="text-muted-foreground text-sm">
            {labels.labelSubject}
          </span>
          <span className="text-foreground ml-4 flex-1 text-right text-sm">
            {subject}
          </span>
        </div>

        <div className="flex items-start justify-between">
          <span className="text-muted-foreground text-sm">
            {labels.labelCategory}
          </span>
          <span className="text-foreground text-sm">{categoryLabel}</span>
        </div>

        <div className="flex items-start justify-between">
          <span className="text-muted-foreground text-sm">
            {labels.labelPriority}
          </span>
          <span className={`rounded-full px-2 py-0.5 text-sm ${priorityStyle}`}>
            {priorityLabel}
          </span>
        </div>
      </div>
    </FadeSlideUp>
  );
};

export default TicketInfo;
