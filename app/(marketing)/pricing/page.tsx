import type { Metadata } from "next";
import { PricingCard } from "@/components/PricingCard";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { FaqAccordion } from "@/components/FaqAccordion";
import { PRICING_PLANS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Tarifs — FasoLab Virtuel",
  description: "Des offres adaptées à chaque établissement scolaire.",
};

const faqs = [
  {
    q: "Puis-je changer d'offre à tout moment ?",
    a: "Oui, vous pouvez passer d'une offre à une autre à tout moment depuis votre tableau de bord ou en contactant notre équipe.",
  },
  {
    q: "Le bracelet capteur est-il inclus ?",
    a: "Le bracelet capteur est un accessoire optionnel disponible en complément des offres Établissement et Réseau. Contactez-nous pour connaître les conditions de mise à disposition.",
  },
  {
    q: "Proposez-vous des tarifs pour les écoles publiques ?",
    a: "Oui, l'offre Réseau est spécialement conçue pour les ministères et réseaux d'écoles publiques, avec des conditions adaptées.",
  },
];

export default function PricingPage() {
  return (
    <main className="bg-white">
      <PageHero
        eyebrow="Tarifs"
        title="Un plan adapté à chaque établissement"
        description="Commencez gratuitement, évoluez selon vos besoins. Aucun frais caché."
      />

      <section className="pb-20 md:pb-28">
        <div className="max-w-[1560px] mx-auto px-6 md:px-10 xl:px-16">
          <div className="grid md:grid-cols-3 gap-6 items-stretch">
            {PRICING_PLANS.map((plan, i) => (
              <PricingCard key={plan.name} {...plan} index={i} />
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-20 md:py-28 bg-white overflow-hidden">
        <div className="relative max-w-3xl mx-auto px-6 md:px-10">
          <Reveal animation="fade-up">
            <span className="inline-block text-[11px] font-bold uppercase tracking-[0.22em] text-primary mb-3 text-center w-full">
              Vous vous demandez peut-être
            </span>
            <h2 className="text-[clamp(1.6rem,3vw,2.2rem)] font-display font-extrabold text-navy text-center mb-12">
              Questions fréquentes
            </h2>
          </Reveal>
          <Reveal animation="fade-up" delay={100}>
            <FaqAccordion items={faqs} />
          </Reveal>
        </div>
      </section>
    </main>
  );
}
