import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { FeatureCard } from "@/components/FeatureCard";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { FEATURES } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Fonctionnalités — FasoLab Virtuel",
  description: "Découvrez toutes les fonctionnalités de la plateforme FasoLab Virtuel.",
};

export default function FeaturesPage() {
  return (
    <main className="pt-[84px] bg-white">
      <PageHero
        eyebrow="Fonctionnalités"
        title="Tout ce dont une classe a besoin pour expérimenter"
        description="Chaque fonctionnalité a été pensée pour les contraintes réelles des établissements africains — connexion limitée, matériel restreint, classes nombreuses."
      />

      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {FEATURES.map((f, i) => (
              <FeatureCard
                key={f.title}
                icon={f.icon}
                title={f.title}
                desc={f.desc}
                index={i}
                variant={i % 5 === 0 ? "dark" : i % 5 === 4 ? "primary" : "light"}
              />
            ))}
          </div>

          <Reveal animation="fade-in">
            <div className="text-center mt-16">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 h-[52px] px-8 bg-primary hover:bg-primary-dark text-navy text-[15px] font-bold rounded-2xl transition-all duration-200 teal-glow"
              >
                Demander une démo
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
