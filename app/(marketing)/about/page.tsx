import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { MapPin, GraduationCap, Trophy, ArrowRight, Target, HeartHandshake } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { SITE } from "@/lib/constants";
import capteurSituation from "@/assets/images/capteur-en-situation.png";
import capteurBracelet from "@/assets/images/capteur-bracelet.png";
import hackathonAnnonce from "@/assets/images/hackathon-annonce.png";

export const metadata: Metadata = {
  title: "À propos — FasoLab Virtuel",
  description: "L'histoire et la mission de FasoLab Virtuel.",
};

export default function AboutPage() {
  return (
    <main className="pt-[84px] bg-white">
      <PageHero
        eyebrow="À propos"
        title="Rendre la science accessible, partout en Afrique"
        description={SITE.description}
      />

      {/* Mission — texte + vraie photo du bracelet en situation */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="grid lg:grid-cols-2 gap-14 xl:gap-20 items-center mb-28">
            <Reveal animation="slide-right">
              <span className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.22em] text-primary mb-5">
                <Target className="w-3.5 h-3.5" />
                Notre mission
              </span>
              <h2 className="text-[clamp(1.7rem,3.2vw,2.4rem)] font-display font-extrabold text-navy leading-tight mb-5">
                Un laboratoire pour chaque élève, même sans équipement
              </h2>
              <p className="text-[15px] text-gray-500 font-light leading-relaxed mb-4">
                Dans de nombreux établissements scolaires africains, l&apos;accès à un
                laboratoire équipé reste un luxe. Réactifs coûteux, matériel fragile,
                classes surchargées : les élèves passent parfois tout leur cursus sans
                jamais réaliser une seule expérience pratique de chimie ou de physique.
              </p>
              <p className="text-[15px] text-gray-500 font-light leading-relaxed">
                FasoLab Virtuel est né d&apos;un constat simple : la 3D et
                l&apos;intelligence artificielle permettent aujourd&apos;hui de
                reproduire fidèlement un protocole de laboratoire, sans les contraintes
                matérielles. Nous y ajoutons un bracelet capteur, pour que le geste de
                l&apos;élève reste au centre de l&apos;apprentissage.
              </p>
            </Reveal>

            <Reveal animation="slide-left" delay={120} className="relative">
              <div className="rounded-3xl overflow-hidden shadow-[0_30px_80px_rgba(13,27,62,0.14)] border border-gray-100">
                <Image src={capteurSituation} alt="Élève utilisant le bracelet capteur FasoLab" className="w-full h-auto block" />
              </div>
              <div className="absolute -bottom-6 -left-6 hidden sm:flex items-center gap-3 bg-navy rounded-2xl px-5 py-4 shadow-xl">
                <div className="w-11 h-11 rounded-xl overflow-hidden border border-primary/30 flex-shrink-0">
                  <Image src={capteurBracelet} alt="Bracelet capteur FasoLab" className="w-full h-full object-cover" />
                </div>
                <div>
                  <p className="text-[12.5px] font-bold text-white leading-tight">Bracelet capteur</p>
                  <p className="text-[11px] text-white/40 font-light">Retour haptique BLE</p>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Engagement */}
          <div className="grid lg:grid-cols-2 gap-14 xl:gap-20 items-center mb-28">
            <Reveal animation="slide-right" className="lg:order-2">
              <span className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.22em] text-primary mb-5">
                <HeartHandshake className="w-3.5 h-3.5" />
                Notre engagement
              </span>
              <h2 className="text-[clamp(1.7rem,3.2vw,2.4rem)] font-display font-extrabold text-navy leading-tight mb-5">
                Pensé pour les réalités du terrain africain
              </h2>
              <p className="text-[15px] text-gray-500 font-light leading-relaxed mb-7">
                Nous concevons chaque expérience pour qu&apos;elle reste utilisable avec
                une connexion internet limitée, sur un simple smartphone si nécessaire,
                et toujours alignée sur les programmes officiels des systèmes éducatifs
                d&apos;Afrique subsaharienne.
              </p>
              <ul className="flex flex-col gap-3">
                {[
                  "Fonctionne hors-ligne, une fois le TP téléchargé",
                  "Alignée sur les programmes officiels",
                  "Accessible dès un smartphone d'entrée de gamme",
                ].map((c) => (
                  <li key={c} className="flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-primary/12 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                    </span>
                    <span className="text-[14px] text-gray-600 font-medium leading-relaxed">{c}</span>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal animation="slide-left" delay={120} className="lg:order-1">
              <div className="rounded-3xl bg-navy p-10 md:p-12 relative overflow-hidden">
                <div className="absolute top-0 left-1/3 w-[280px] h-[280px] rounded-full bg-primary/15 blur-[100px] pointer-events-none" />
                <p className="relative font-display text-[22px] md:text-[26px] text-white leading-snug">
                  &ldquo;La 3D et l&apos;IA permettent de reproduire fidèlement un
                  protocole de laboratoire, sans les contraintes matérielles.&rdquo;
                </p>
                <div className="relative mt-8 flex items-center gap-3">
                  <span className="w-8 h-[2px] bg-primary" />
                  <span className="text-[12px] text-white/50 font-medium uppercase tracking-wider">
                    Équipe FasoLab
                  </span>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Repères clés — Burkina Faso + ISGE-BF */}
          <Reveal animation="fade-up">
            <div className="text-center max-w-xl mx-auto mb-10">
              <h2 className="text-[clamp(1.5rem,3vw,2rem)] font-display font-extrabold text-navy leading-tight">
                Nos repères
              </h2>
            </div>
          </Reveal>
          <div className="grid sm:grid-cols-2 gap-5 mb-28">
            <Reveal animation="fade-up" delay={0}>
              <div className="rounded-2xl border border-gray-100 p-7 text-center h-full card-hover">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <p className="text-[14.5px] font-bold text-navy">{SITE.location}</p>
                <p className="text-[12px] text-gray-400 mt-1">Notre ancrage</p>
              </div>
            </Reveal>
            <Reveal animation="fade-up" delay={90}>
              <div className="rounded-2xl border border-gray-100 p-7 text-center h-full card-hover">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <GraduationCap className="w-5 h-5 text-primary" />
                </div>
                <p className="text-[14.5px] font-bold text-navy">{SITE.org}</p>
                <p className="text-[12px] text-gray-400 mt-1">Origine du projet</p>
              </div>
            </Reveal>
          </div>

          {/* Distinctions — met en avant le Hackathon des Grandes Écoles.
             Section pensée pour accueillir d'autres prix au même format
             (ajoutez simplement une carte supplémentaire dans cette grille). */}
          <Reveal animation="fade-up">
            <div className="text-center max-w-xl mx-auto mb-10">
              <span className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.22em] text-primary mb-3">
                <Trophy className="w-3.5 h-3.5" />
                Distinctions
              </span>
              <h2 className="text-[clamp(1.5rem,3vw,2rem)] font-display font-extrabold text-navy leading-tight">
                Reconnu dès nos débuts
              </h2>
            </div>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            <Reveal animation="fade-up" delay={0} className="sm:col-span-2 lg:col-span-1">
              <div className="rounded-2xl border border-primary/20 bg-primary/[0.03] overflow-hidden h-full card-hover">
                <div className="relative">
                  <Image
                    src={hackathonAnnonce}
                    alt="Annonce des projets retenus — Hackathon des Grandes Écoles, FasoLab classé n°1"
                    className="w-full h-auto block"
                  />
                </div>
                <div className="p-6 text-center">
                  <p className="text-[14.5px] font-bold text-navy">Hackathon des Grandes Écoles</p>
                  <p className="text-[12px] text-primary font-medium mt-1">Projet lauréat — 1er du classement</p>
                </div>
              </div>
            </Reveal>
            <Reveal animation="fade-up" delay={90} className="rounded-2xl border border-dashed border-gray-200 flex items-center justify-center p-7 text-center h-full min-h-[180px]">
              <div>
                <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center mx-auto mb-4">
                  <Trophy className="w-5 h-5 text-gray-300" />
                </div>
                <p className="text-[13px] text-gray-400 font-medium">Prochaines distinctions à venir</p>
              </div>
            </Reveal>
          </div>

          <Reveal animation="fade-in">
            <div className="text-center mt-16">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 h-[52px] px-8 bg-primary hover:bg-primary-dark text-white text-[15px] font-bold rounded-2xl transition-all duration-200 teal-glow"
              >
                Discuter avec l&apos;équipe
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
