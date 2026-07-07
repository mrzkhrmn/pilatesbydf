import { type ReactNode } from "react";

export function Container({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`px-gutter max-w-container-max mx-auto ${className}`}>
      {children}
    </div>
  );
}
