import type { ReactNode } from "react";

export function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <h2 className="inline-flex min-h-8 items-center border border-dashed border-zinc-700 px-2.5 font-mono text-xs font-normal leading-none text-zinc-400">
      {children}
    </h2>
  );
}
