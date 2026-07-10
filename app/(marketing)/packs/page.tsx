import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { LABS } from "@/lib/constants";
import labO2 from "@/assets/images/lab-o2.png";
import labPh from "@/assets/images/lab-ph.png";
import labCombustion from "@/assets/images/lab-combustion.png";

const IMAGES: Record<string, typeof labO2> = {
  "lab-o2": labO2,
  "lab-ph": labPh,
  "lab-combustion": labCombustion,
};

export const metadata: Metadata = {
  title: "Labos — FasoLab Virtuel",
  description: "Le catalogue des expériences virtuelles disponibles sur FasoLab.",
};

export default function PacksPage() {
  return (
    <main className="pt-[84px] bg-white">
      <PageHero
        eyebrow="Le laboratoire en action"
        title="Un vrai labo dans votre salle de classe"
        description="Chaque simulation reproduit fidèlement les protocoles officiels du programme scolaire — en 3D, en temps réel, guidée par l'IA."
      />

      <section className="py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="flex flex-col gap-24">
            {LABS.map((item, i) => (
              <div key={item.title} className="grid lg:grid-cols-2 gap-12 xl:gap-20 items-center">
                <Reveal
                  animation={i % 2 === 1 ? "slide-left" : "slide-right"}
                  className={`relative ${i % 2 === 1 ? "lg:order-2" : ""}`}
                >
                  <div className="rounded-2xl overflow-hidden shadow-[0_20px_60px_rgba(13,27,62,0.12)] border border-gray-100 relative">
                    <Image src={IMAGES[item.img]} alt={item.title} className="w-full h-auto block" />
                    <div className="absolute top-4 left-4 w-16 h-1 bg-primary rounded-full" />
                  </div>
                  <div className="absolute -bottom-4 -right-4 bg-navy text-primary text-[11px] font-bold uppercase tracking-widest px-4 py-2 rounded-xl shadow-lg">
                    {item.tag}
                  </div>
                </Reveal>

                <Reveal
                  animation={i % 2 === 1 ? "slide-right" : "slide-left"}
                  delay={120}
                  className={i % 2 === 1 ? "lg:order-1" : ""}
                >
                  <div className="w-8 h-1 bg-primary rounded-full mb-6" />
                  <h2 className="text-[clamp(1.4rem,3vw,2rem)] font-display font-extrabold text-navy leading-tight mb-4">
                    {item.title}
                  </h2>
                  <p className="text-[15px] text-gray-500 font-light leading-relaxed mb-7">{item.desc}</p>
                  <ul className="flex flex-col gap-3">
                    {item.checks.map((c) => (
                      <li key={c} className="flex items-center gap-3">
                        <span className="w-5 h-5 rounded-full bg-primary/12 flex items-center justify-center flex-shrink-0">
                          <CheckCircle2 className="w-3.5 h-3.5 text-primary" />
                        </span>
                        <span className="text-[14px] text-gray-600 font-medium">{c}</span>
                      </li>
                    ))}
                  </ul>
                </Reveal>
              </div>
            ))}
          </div>

          <Reveal animation="fade-in">
            <div className="text-center mt-16">
              <Link
                href="/demo"
                className="inline-flex items-center gap-2 h-[52px] px-8 bg-primary hover:bg-primary-dark text-navy text-[15px] font-bold rounded-2xl transition-all duration-200 teal-glow"
              >
                Voir une démo interactive
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
