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
    <section className="relative pt-[124px] pb-16 sm:pt-[140px] sm:pb-20 md:pt-[176px] md:pb-28 bg-navy overflow-hidden">
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

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 md:px-10 text-center">
        <span className="inline-block max-w-full text-[9px] sm:text-[11px] font-bold uppercase tracking-[0.16em] sm:tracking-[0.22em] text-primary mb-3 sm:mb-4">
          {eyebrow}
        </span>
        <h1 className="mx-auto max-w-4xl text-[clamp(2rem,9vw,3.5rem)] md:text-[clamp(2.2rem,4.5vw,3.5rem)] font-display font-black text-white leading-[1.08] mb-4 sm:mb-5 [text-wrap:balance]">
          {title}
        </h1>
        {description && (
          <p className="text-[14px] sm:text-[16px] text-white/55 font-light leading-[1.6] sm:leading-relaxed max-w-2xl mx-auto [text-wrap:balance]">
            {description}
          </p>
        )}
        {children}
      </div>
    </section>
  );
}
