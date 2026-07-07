import { createElement } from "react";
import { iconMap, resolveIcon } from "@/components/ui/icon-map";

export function Icon({
  name,
  className = "",
  filled = false,
  size,
}: {
  name: string;
  className?: string;
  filled?: boolean;
  size?: number;
}) {
  if (process.env.NODE_ENV === "development" && !(name in iconMap)) {
    console.warn(`Icon "${name}" not found in icon map`);
  }

  return createElement(resolveIcon(name), {
    className: `inline-block shrink-0 ${className}`,
    size,
    strokeWidth: filled ? 0 : 1.5,
    fill: filled ? "currentColor" : "none",
    "aria-hidden": true,
  });
}
