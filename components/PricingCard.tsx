"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight, Zap } from "lucide-react";

export type PricingCardProps = {
  id: string;
  name: string;
  desc: string;
  price: number | null;
  period: string;
  highlight?: boolean;
  features: string[];
  cta: string;
  index?: number;
};

export function PricingCard({
  id,
  name,
  desc,
  price,
  period,
  highlight = false,
  features,
  cta,
  index = 0,
}: PricingCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`relative flex flex-col rounded-2xl p-8 transition-all duration-300 ${
        highlight
          ? "bg-navy shadow-[0_20px_60px_rgba(13,27,62,0.25)] scale-[1.02]"
          : "bg-white border border-gray-100 hover:shadow-lg hover:border-primary/20"
      }`}
    >
      {highlight && (
        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 flex items-center gap-1.5 bg-primary text-white text-[11px] font-black px-4 py-1.5 rounded-full uppercase tracking-[0.15em] whitespace-nowrap teal-glow">
          <Zap className="w-3 h-3 fill-current" />
          Recommandé
        </div>
      )}

      <div className="mb-7">
        <p className="text-[11px] font-bold uppercase tracking-[0.18em] mb-1 text-primary">{name}</p>
        <p className={`text-[13px] font-light mb-5 ${highlight ? "text-white/50" : "text-gray-400"}`}>
          {desc}
        </p>
        <div
          className={`font-display font-extrabold leading-none ${
            highlight ? "text-white" : "text-navy"
          } ${price ? "text-[2.4rem]" : "text-[1.9rem]"}`}
        >
          {price ? (
            <>
              {price.toLocaleString("fr-FR")}
              <span className={`text-[0.9rem] font-sans font-medium ${highlight ? "text-white/50" : "text-gray-400"}`}>
                {" "}FCFA
              </span>
            </>
          ) : (
            "Sur devis"
          )}
        </div>
        {price && period && (
          <p className={`text-[12px] mt-1.5 ${highlight ? "text-white/35" : "text-gray-400"}`}>par {period}</p>
        )}
      </div>

      <div className={`h-px mb-7 ${highlight ? "bg-white/10" : "bg-gray-100"}`} />

      <ul className="flex-1 flex flex-col gap-3 mb-8">
        {features.map((f) => (
          <li key={f} className="flex items-start gap-2.5">
            <CheckCircle2 className={`w-4 h-4 flex-shrink-0 mt-0.5 ${highlight ? "text-primary-light" : "text-primary"}`} />
            <span className={`text-[13px] font-light leading-snug ${highlight ? "text-white/70" : "text-gray-600"}`}>
              {f}
            </span>
          </li>
        ))}
      </ul>

      <Link
        href={id === "institution" ? "/contact" : "/demo"}
        className={`group inline-flex items-center justify-center gap-2 h-12 rounded-xl font-bold text-[14px] transition-all duration-200 ${
          highlight
            ? "bg-primary hover:bg-primary-dark text-white teal-glow"
            : "bg-navy hover:bg-navy/85 text-white"
        }`}
      >
        {cta}
        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
      </Link>
    </motion.div>
  );
}
