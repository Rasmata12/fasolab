import { ReactNode } from "react";
import { CircuitNetwork } from "@/components/TechPattern";

export function PageHero({
  eyebrow,
  title,
  description,
  children,
}: {
  eyebrow: string;
  title: ReactNode;
  description?: string;
  children?: ReactNode;
}) {
  return (
    <section className="relative pt-[148px] pb-20 md:pt-[176px] md:pb-28 bg-navy overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage: "radial-gradient(circle, #1AA89C 1.2px, transparent 1.2px)",
            backgroundSize: "38px 38px",
          }}
        />
        <div className="absolute top-0 left-1/4 w-[460px] h-[460px] rounded-full bg-primary/10 blur-[140px]" />
        <div className="absolute bottom-0 right-1/4 w-[360px] h-[360px] rounded-full bg-primary-light/10 blur-[120px]" />
        <CircuitNetwork className="hidden lg:block absolute -bottom-10 -right-10 w-[300px] h-[220px] opacity-70" />
      </div>

      <div className="relative max-w-5xl mx-auto px-6 md:px-10 text-center">
        <span className="inline-block text-[11px] font-bold uppercase tracking-[0.22em] text-primary mb-4">
          {eyebrow}
        </span>
        <h1 className="text-[clamp(2.2rem,4.5vw,3.5rem)] font-display font-black text-white leading-tight mb-5">
          {title}
        </h1>
        {description && (
          <p className="text-[16px] text-white/55 font-light leading-relaxed max-w-2xl mx-auto">
            {description}
          </p>
        )}
        {children}
      </div>
    </section>
  );
}
