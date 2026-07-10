import type { Metadata } from "next";
import Image from "next/image";
import { Gant3D } from "@/components/Gant3D";
import { PageHero } from "@/components/PageHero";
import { DemoRequestForm } from "@/components/DemoRequestForm";
import { Reveal } from "@/components/Reveal";
import labO2 from "@/assets/images/lab-o2.png";
import logo from "@/assets/images/fasolab-logo.png";

export const metadata: Metadata = {
  title: "Démo — FasoLab Virtuel",
  description: "Découvrez FasoLab Virtuel en images et demandez une démonstration.",
};

export default function DemoPage() {
  return (
    <main className="pt-[84px] bg-white">
      <PageHero
        eyebrow="Démo"
        title="Voyez FasoLab en action"
        description="Un aperçu de l'interface, avant de réserver une démonstration en direct avec votre équipe pédagogique."
      />

      <section className="py-20 md:py-28">
        <div className="max-w-5xl mx-auto px-6 md:px-10">
          <Reveal animation="fade-scale">
            <div className="rounded-2xl overflow-hidden border border-gray-100 shadow-[0_30px_80px_rgba(13,27,62,0.15)]">
              <div className="flex items-center gap-1.5 px-4 py-3 bg-[#08132C] border-b border-white/8">
                <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
                <div className="flex-1 mx-4 h-5 rounded-full bg-white/6 flex items-center gap-1.5 px-3">
                  <Image src={logo} alt="" className="w-3.5 h-3.5 object-contain flex-shrink-0" />
                  <span className="text-[10px] text-white/30 font-mono">
                    app.fasolab.bf/chimie/dosage-acide-base
                  </span>
                </div>
              </div>
              <Image src={labO2} alt="Aperçu de la plateforme FasoLab" className="w-full h-auto block" />
            </div>
          </Reveal>
        </div>
      </section>

      <Gant3D />

      <section className="py-20 md:py-28 bg-primary-tint">
        <Reveal animation="fade-up" className="max-w-2xl mx-auto px-6 md:px-10 text-center">
          <h2 className="text-[clamp(1.8rem,3.6vw,2.5rem)] font-display font-extrabold text-navy leading-tight mb-5">
            Envie d&apos;une démonstration en direct ?
          </h2>
          <p className="text-[15px] text-gray-500 font-light mb-9">
            Notre équipe vous montre la plateforme avec vos propres programmes
            scolaires, en visioconférence ou dans votre établissement.
          </p>
          <DemoRequestForm />
        </Reveal>
      </section>
    </main>
  );
}
