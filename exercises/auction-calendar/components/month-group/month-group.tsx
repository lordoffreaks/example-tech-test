import type { ReactNode } from "react";

export function MonthGroup({
  label,
  children,
}: {
  label: string;
  children: ReactNode;
}) {
  return (
    <section data-testid={`month-group-${label}`}>
      <h2>{label}</h2>
      {children}
    </section>
  );
}
