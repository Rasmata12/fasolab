import { HTMLAttributes } from "react";

export function Badge({ className = "", children, ...props }: HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-[0.18em] bg-primary/10 text-primary border border-primary/20 ${className}`}
      {...props}
    >
      {children}
    </span>
  );
}
