export type ColorVariant = "orange" | "blue" | "green" | "purple";

export const COLOR_VARIANT_CLASSES: Record<ColorVariant, string> = {
  orange: "bg-orange-100 group-hover:bg-orange-200 text-orange-600",
  blue: "bg-blue-100 group-hover:bg-blue-200 text-blue-600",
  green: "bg-green-100 group-hover:bg-green-200 text-green-600",
  purple: "bg-purple-100 group-hover:bg-purple-200 text-purple-600"
};

export const DISABLED_CLASSES = "bg-gray-200 text-gray-400";
