import type { ReactNode } from "react";

export function Section({
  id,
  className = "",
  children,
  container = true,
}: {
  id?: string;
  className?: string;
  children: ReactNode;
  container?: boolean;
}) {
  return (
    <section id={id} className={`relative py-24 md:py-32 ${className}`}>
      {container ? <div className="mx-auto max-w-none px-10 md:px-16">{children}</div> : children}
    </section>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-white/[0.02] px-3 py-1 text-[11px] font-medium uppercase tracking-[0.25em] text-silver-dim">
      <span className="h-1 w-1 rounded-full bg-silver animate-pulse-glow" />
      {children}
    </div>
  );
}
