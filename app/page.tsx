import Link from "next/link";
import { Hero } from "@/components/Hero";
import { Reveal } from "@/components/Reveal";
import { SUBJECTS } from "@/lib/constants";

/**
 * Page d'accueil (/) — RÉSERVÉE au contenu propre à l'accueil.
 *
 * Règle du projet : cette page ne doit JAMAIS pré-afficher le contenu
 * détaillé d'une autre page (Fonctionnalités, Packs, Tarifs, À propos,
 * Démo...). Chacune de ces pages a déjà son propre contenu complet —
 * l'accueil ne fait qu'orienter vers elles via la navigation (Navbar,
 * CTA, Footer), il ne les résume pas.
 *
 * Sections gardées ici, et seulement celles-ci :
 *   1. Hero — l'accroche de la marque
 *   2. Bandeau des matières — identité visuelle, propre à cette page
 *   3. Comment ça marche — vue d'ensemble générale, n'existe nulle
 *      part ailleurs sur le site
 *   4. CTA final — des liens vers /demo et /signup, pas du contenu
 *
 * Si un jour vous voulez remettre un aperçu de /features, /packs,
 * /pricing ou /about ici : ne le faites pas — enrichissez plutôt la
 * page cible elle-même, ou ajoutez un lien clair dans la Navbar.
 */
export default function HomePage() {
  return (
    <main className="w-full bg-white">
      <Hero />

      {/* Bandeau des matières — identité de marque, propre à l'accueil.
          Hauteur fixe (52px) : le Hero réserve exactement (100vh - 52px)
          pour que ce bandeau soit toujours visible avec lui sur le premier
          écran, sans qu'il faille défiler pour l'atteindre. */}
      <div className="h-[52px] bg-primary overflow-hidden flex items-center">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...SUBJECTS, ...SUBJECTS].map((w, i) => (
            <span key={i} className="inline-flex items-center gap-4 px-6">
              <span className="text-navy text-[12px] font-bold uppercase tracking-[0.22em]">{w}</span>
              <span className="w-1 h-1 rounded-full bg-navy/40 inline-block" />
            </span>
          ))}
        </div>
      </div>

      {/* Comment ça marche — vue d'ensemble générale, propre à l'accueil */}
      <section id="comment" className="py-24 md:py-36 bg-navy relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/3 w-[500px] h-[500px] rounded-full bg-primary/10 blur-[140px]" />
        </div>
        <div className="relative max-w-[1560px] mx-auto px-6 md:px-10 xl:px-16">
          <Reveal animation="fade-up">
            <div className="text-center max-w-3xl mx-auto mb-20">
              <span className="inline-block text-[11px] font-bold uppercase tracking-[0.22em] text-primary mb-3">
                Comment ça marche
              </span>
              <h2 className="text-[clamp(1.9rem,3.6vw,2.9rem)] font-display font-extrabold text-white leading-tight">
                Trois étapes, zéro friction
              </h2>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-7 xl:gap-9">
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
                <div className="rounded-3xl p-10 xl:p-12 bg-white/[0.04] border border-white/8 h-full card-hover">
                  <div className="text-[11px] font-bold text-primary mb-4 tracking-[0.2em]">{s.n}</div>
                  <h3 className="text-[19px] font-display font-bold text-white mb-4">{s.title}</h3>
                  <p className="text-[15px] text-white/55 font-light leading-relaxed">{s.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA final — uniquement des liens de navigation, pas du contenu */}
      <section id="contact" className="py-24 md:py-32 bg-primary-tint">
        <Reveal animation="fade-scale" className="max-w-4xl mx-auto px-6 md:px-10 text-center">
          <h2 className="text-[clamp(2rem,4vw,3.2rem)] font-display font-extrabold text-navy leading-tight mb-6">
            Prêt à transformer l&apos;enseignement des sciences dans votre établissement ?
          </h2>
          <p className="text-[16px] text-gray-500 font-light mb-10 max-w-xl mx-auto">
            Discutons de vos besoins et lançons une démonstration avec vos enseignants.
          </p>
          <div className="grid grid-cols-2 gap-2.5 sm:flex sm:flex-row items-center justify-center sm:gap-4 w-full max-w-xl mx-auto">
            <Link
              href="/demo"
              className="inline-flex w-full items-center justify-center gap-1.5 h-[52px] px-2 sm:px-8 bg-primary hover:bg-primary-dark text-navy text-[12px] sm:text-[15px] font-bold rounded-2xl transition-all duration-200 teal-glow hover:scale-[1.03] whitespace-nowrap"
            >
              Demander une démo
            </Link>
            <Link
              href="/signup"
              className="inline-flex w-full items-center justify-center gap-1.5 h-[52px] px-2 sm:px-8 border border-navy/15 text-navy text-[12px] sm:text-[15px] font-semibold rounded-2xl hover:bg-navy/5 transition-all duration-200 whitespace-nowrap"
            >
              Créer un compte
            </Link>
          </div>
        </Reveal>
      </section>
    </main>
  );
}
