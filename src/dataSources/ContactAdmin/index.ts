export const CATEGORIES = [
  "account",
  "technical",
  "feature",
  "billing",
  "security",
  "other"
] as const;

export const PRIORITIES = [
  { value: "low", colorClass: "text-green-600 dark:text-green-400" },
  { value: "medium", colorClass: "text-amber-600 dark:text-amber-400" },
  { value: "high", colorClass: "text-red-600 dark:text-red-400" }
] as const;

export const PRIORITY_STYLES = {
  low: "bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400",
  medium:
    "bg-amber-100 text-amber-600 dark:bg-amber-900/30 dark:text-amber-400",
  high: "bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-400"
} as const;

export const NEXT_STEPS = [
  { key: "step1", color: "from-blue-500 to-blue-600" },
  { key: "step2", color: "from-purple-500 to-purple-600" },
  { key: "step3", color: "from-green-500 to-green-600" }
] as const;
