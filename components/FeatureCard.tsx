"use client";

import { motion } from "framer-motion";
import {
  Beaker,
  Hand,
  Brain,
  WifiOff,
  Shield,
  Rocket,
  GraduationCap,
  Users,
  type LucideIcon,
} from "lucide-react";

const ICONS: Record<string, LucideIcon> = {
  Beaker,
  Hand,
  Brain,
  WifiOff,
  Shield,
  Rocket,
  GraduationCap,
  Users,
};

export type FeatureCardProps = {
  icon: string;
  title: string;
  desc: string;
  index?: number;
  variant?: "light" | "dark" | "primary";
};

export function FeatureCard({ icon, title, desc, index = 0, variant = "light" }: FeatureCardProps) {
  const Icon = ICONS[icon] ?? Beaker;

  const bg =
    variant === "dark"
      ? "bg-navy"
      : variant === "primary"
      ? "bg-primary"
      : "bg-primary-tint";

  const titleColor = variant === "light" ? "text-navy" : "text-white";
  const descColor =
    variant === "primary" ? "text-navy/75" : variant === "dark" ? "text-white/60" : "text-gray-500";
  const iconWrap =
    variant === "dark"
      ? "bg-primary/15 border border-primary/20"
      : variant === "primary"
      ? "bg-navy/15"
      : "bg-navy";
  const iconColor = variant === "primary" ? "text-navy" : "text-primary";

  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className={`${bg} rounded-2xl p-8 card-hover overflow-hidden relative group`}
    >
      <div
        className={`absolute -top-10 -right-10 w-40 h-40 rounded-full opacity-10 ${
          variant === "light" ? "bg-primary" : "bg-white"
        }`}
      />

      <div className={`w-11 h-11 rounded-xl flex items-center justify-center mb-6 ${iconWrap}`}>
        <Icon className={`w-5 h-5 ${iconColor}`} />
      </div>

      <h3 className={`text-[17px] font-display font-bold mb-3 leading-snug ${titleColor}`}>
        {title}
      </h3>
      <p className={`text-[14px] font-light leading-relaxed ${descColor}`}>{desc}</p>
    </motion.div>
  );
}
