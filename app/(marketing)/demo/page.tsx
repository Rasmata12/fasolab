import type { Metadata } from "next";
import Image from "next/image";
import { Gant3D } from "@/components/Gant3D";
import { PageHero } from "@/components/PageHero";
import { DemoRequestForm } from "@/components/DemoRequestForm";
import { Reveal } from "@/components/Reveal";
import iconLight from "@/assets/images/fasolab-icon-light.png";
import demoVideoPoster from "@/assets/images/demo-video-poster.png";
import demoSession1 from "@/assets/images/demo-session-1.png";
import demoSession2 from "@/assets/images/demo-session-2.png";
import demoSession3 from "@/assets/images/demo-session-3.png";

export const metadata: Metadata = {
  title: "Démo — FasoLab Virtuel",
  description: "Découvrez FasoLab Virtuel en images et demandez une démonstration.",
};

const GALLERY = [
  { img: demoSession1, alt: "Séance de démonstration FasoLab, expérience sur le fer" },
  { img: demoSession2, alt: "Séance de démonstration FasoLab, réaction chimique Fe(OH)2" },
  { img: demoSession3, alt: "L'équipe FasoLab lors d'une rencontre partenaire" },
];

export default function DemoPage() {
  return (
    <main className="bg-white">
      <PageHero
        eyebrow="Démo"
        title="Voyez FasoLab en action"
        description="Un aperçu de l'interface, avant de réserver une démonstration en direct avec votre équipe pédagogique."
      />

      <section className="py-20 md:py-28">
        <div className="max-w-[1320px] mx-auto px-6 md:px-10">
          <Reveal animation="fade-scale">
            <div className="rounded-2xl overflow-hidden border border-gray-100 shadow-[0_30px_80px_rgba(13,27,62,0.15)]">
              <div className="flex items-center gap-1.5 px-4 py-3 bg-[#08132C] border-b border-white/8">
                <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
                <div className="flex-1 mx-4 h-5 rounded-full bg-white/6 flex items-center gap-1.5 px-3">
                  <Image src={iconLight} alt="" className="w-3.5 h-3.5 object-contain flex-shrink-0" />
                  <span className="text-[10px] text-white/30 font-mono">
                    app.fasolab.bf/chimie/dosage-acide-base
                  </span>
                </div>
              </div>
              <video
                src="/demo-video.mp4"
                controls
                playsInline
                poster={demoVideoPoster.src}
                className="w-full h-auto block bg-black"
              />
            </div>
          </Reveal>

          <Reveal animation="fade-up" className="mt-14">
            <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-primary mb-5 text-center">
              En conditions réelles
            </p>
            <div className="grid sm:grid-cols-3 gap-5">
              {GALLERY.map((g, i) => (
                <div
                  key={i}
                  className="rounded-2xl overflow-hidden border border-gray-100 shadow-[0_15px_40px_rgba(13,27,62,0.1)]"
                >
                  <Image src={g.img} alt={g.alt} className="w-full h-auto block" />
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <Gant3D />

      <section className="relative py-20 md:py-28 bg-navy overflow-hidden">
        <div className="relative z-10 max-w-2xl mx-auto px-6 md:px-10 text-center mb-12">
          <Reveal animation="fade-up">
            <span className="inline-block text-[11px] font-bold uppercase tracking-[0.22em] text-primary mb-4">
              Réservez votre créneau
            </span>
            <h2 className="text-[clamp(1.8rem,3.6vw,2.5rem)] font-display font-extrabold text-white leading-tight mb-5">
              Envie d&apos;une démonstration en direct ?
            </h2>
            <p className="text-[15px] text-white/60 font-light">
              Notre équipe vous montre la plateforme avec vos propres programmes
              scolaires, en visioconférence ou dans votre établissement.
            </p>
          </Reveal>
        </div>
        <Reveal animation="fade-scale" className="relative z-10 max-w-xl mx-auto px-6 md:px-10">
          <div className="rounded-3xl bg-white shadow-[0_40px_100px_rgba(0,0,0,0.35)] overflow-hidden">
            <DemoRequestForm />
          </div>
        </Reveal>
      </section>
    </main>
  );
}
