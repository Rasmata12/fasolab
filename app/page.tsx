import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle2, Trophy } from "lucide-react";
import { Hero } from "@/components/Hero";
import { Gant3D } from "@/components/Gant3D";
import { FeatureCard } from "@/components/FeatureCard";
import { PricingCard } from "@/components/PricingCard";
import { Reveal } from "@/components/Reveal";
import { SUBJECTS, FEATURES, LABS, PRICING_PLANS, AWARDS } from "@/lib/constants";
import labO2 from "@/assets/images/lab-o2.png";
import labPh from "@/assets/images/lab-ph.png";
import labCombustion from "@/assets/images/lab-combustion.png";

const IMAGES: Record<string, typeof labO2> = {
  "lab-o2": labO2,
  "lab-ph": labPh,
  "lab-combustion": labCombustion,
};

export default function HomePage() {
  return (
    <main className="w-full bg-white">
      <Hero />

      {/* Marquee band */}
      <div className="bg-primary py-3.5 overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...SUBJECTS, ...SUBJECTS].map((w, i) => (
            <span key={i} className="inline-flex items-center gap-4 px-6">
              <span className="text-navy text-[12px] font-bold uppercase tracking-[0.22em]">{w}</span>
              <span className="w-1 h-1 rounded-full bg-navy/40 inline-block" />
            </span>
          ))}
        </div>
      </div>

      {/* Features */}
      <section id="fonctionnalites" className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <Reveal animation="fade-up">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
              <div>
                <span className="inline-block text-[11px] font-bold uppercase tracking-[0.22em] text-primary mb-3">
                  Fonctionnalités
                </span>
                <h2 className="text-[clamp(2rem,4vw,3rem)] font-display font-extrabold text-navy leading-tight">
                  Tout ce dont une classe
                  <br />a besoin pour expérimenter
                </h2>
              </div>
              <p className="text-[15px] text-gray-500 font-light max-w-xs leading-relaxed md:text-right">
                Chaque fonctionnalité est pensée pour les établissements africains — pas
                pour des laboratoires de pointe occidentaux.
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {FEATURES.slice(0, 6).map((f, i) => (
              <FeatureCard
                key={f.title}
                icon={f.icon}
                title={f.title}
                desc={f.desc}
                index={i}
                variant={i === 0 ? "dark" : i === 4 ? "primary" : "light"}
              />
            ))}
          </div>

          <Reveal animation="fade-in" delay={150}>
            <div className="text-center mt-10">
              <Link
                href="/features"
                className="inline-flex items-center gap-2 text-[14px] font-bold text-primary hover:text-primary-dark transition-colors"
              >
                Voir toutes les fonctionnalités
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Hardware bracelet showcase (Gant3D) */}
      <Gant3D />

      {/* Labs teaser */}
      <section id="labos" className="py-24 md:py-36 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <Reveal animation="fade-up">
            <div className="text-center max-w-2xl mx-auto mb-20">
              <span className="inline-block text-[11px] font-bold uppercase tracking-[0.22em] text-primary mb-3">
                Le laboratoire en action
              </span>
              <h2 className="text-[clamp(2rem,4vw,3rem)] font-display font-extrabold text-navy leading-tight mb-4">
                Un vrai labo dans votre salle de classe
              </h2>
              <p className="text-[15px] text-gray-500 font-light leading-relaxed">
                Chaque simulation reproduit les protocoles officiels du programme scolaire
                — en 3D, en temps réel, guidé par l&apos;IA.
              </p>
            </div>
          </Reveal>

          <div className="flex flex-col gap-24">
            {LABS.map((item, i) => (
              <div
                key={item.title}
                className={`grid lg:grid-cols-2 gap-12 xl:gap-20 items-center`}
              >
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
                  <h3 className="text-[clamp(1.4rem,3vw,2rem)] font-display font-extrabold text-navy leading-tight mb-4">
                    {item.title}
                  </h3>
                  <p className="text-[15px] text-gray-500 font-light leading-relaxed mb-7">
                    {item.desc}
                  </p>
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
                href="/packs"
                className="inline-flex items-center gap-2 text-[14px] font-bold text-primary hover:text-primary-dark transition-colors"
              >
                Voir tous les labos disponibles
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* How it works */}
      <section id="comment" className="py-24 md:py-36 bg-navy relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/3 w-[500px] h-[500px] rounded-full bg-primary/10 blur-[140px]" />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 md:px-10">
          <Reveal animation="fade-up">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="inline-block text-[11px] font-bold uppercase tracking-[0.22em] text-primary mb-3">
                Comment ça marche
              </span>
              <h2 className="text-[clamp(2rem,4vw,3rem)] font-display font-extrabold text-white leading-tight">
                Trois étapes, zéro friction
              </h2>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                n: "01",
                title: "Choisissez une expérience",
                desc: "Sélectionnez un TP dans le catalogue aligné sur le programme officiel.",
              },
              {
                n: "02",
                title: "Manipulez en 3D",
                desc: "Réalisez le protocole avec ou sans le bracelet capteur, guidé par l'assistant IA.",
              },
              {
                n: "03",
                title: "Analysez les résultats",
                desc: "Consultez le rapport généré automatiquement et suivez la progression de la classe.",
              },
            ].map((s, i) => (
              <Reveal key={s.n} animation="fade-scale" delay={i * 110}>
                <div className="rounded-2xl p-8 bg-white/[0.04] border border-white/8">
                  <div className="text-[11px] font-bold text-primary mb-4 tracking-[0.2em]">{s.n}</div>
                  <h3 className="text-[17px] font-display font-bold text-white mb-3">{s.title}</h3>
                  <p className="text-[14px] text-white/55 font-light leading-relaxed">{s.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing teaser */}
      <section id="tarifs" className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <Reveal animation="fade-up">
            <div className="text-center max-w-xl mx-auto mb-14">
              <span className="inline-block text-[11px] font-bold uppercase tracking-[0.22em] text-primary mb-3">
                Tarifs
              </span>
              <h2 className="text-[clamp(2rem,4vw,3rem)] font-display font-extrabold text-navy leading-tight mb-4">
                Un plan adapté à chaque établissement
              </h2>
              <p className="text-[15px] text-gray-500 font-light">
                Commencez gratuitement, évoluez selon vos besoins. Aucun frais caché.
              </p>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-6 items-stretch">
            {PRICING_PLANS.map((plan, i) => (
              <PricingCard key={plan.name} {...plan} index={i} />
            ))}
          </div>

          <Reveal animation="fade-in">
            <div className="text-center mt-10">
              <Link
                href="/pricing"
                className="inline-flex items-center gap-2 text-[14px] font-bold text-primary hover:text-primary-dark transition-colors"
              >
                Voir le détail des offres
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="py-24 md:py-32 bg-primary-tint">
        <Reveal animation="fade-scale" className="max-w-3xl mx-auto px-6 md:px-10 text-center">
          <h2 className="text-[clamp(1.8rem,3.6vw,2.75rem)] font-display font-extrabold text-navy leading-tight mb-5">
            Prêt à transformer l&apos;enseignement des sciences dans votre établissement ?
          </h2>
          <p className="text-[15px] text-gray-500 font-light mb-9 max-w-lg mx-auto">
            Discutons de vos besoins et lançons une démonstration avec vos enseignants.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 h-[52px] px-8 bg-primary hover:bg-primary-dark text-navy text-[15px] font-bold rounded-2xl transition-all duration-200 teal-glow hover:scale-[1.03]"
            >
              Demander une démo
            </Link>
            <Link
              href="/signup"
              className="inline-flex items-center justify-center gap-2 h-[52px] px-8 border border-navy/15 text-navy text-[15px] font-semibold rounded-2xl hover:bg-navy/5 transition-all duration-200"
            >
              Créer un compte
            </Link>
          </div>
        </Reveal>
      </section>

      {/* Distinctions — mis en avant tout en bas de la page d'accueil */}
      <section className="bg-navy py-8 md:py-10">
        <Reveal animation="fade-in" className="max-w-7xl mx-auto px-6 md:px-10">
          <Link href="/about" className="flex flex-wrap items-center justify-center gap-x-10 gap-y-3 group">
            {AWARDS.map((award) => (
              <div key={award.title} className="inline-flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-primary/10 border border-primary/25 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/15 transition-colors">
                  <Trophy className="w-4 h-4 text-primary" />
                </span>
                <span className="text-[13.5px] font-semibold text-white/80">
                  {award.title}
                  <span className="text-[12px] text-primary/80 font-medium ml-2">{award.subtitle}</span>
                </span>
              </div>
            ))}
          </Link>
        </Reveal>
      </section>
    </main>
  );
}
