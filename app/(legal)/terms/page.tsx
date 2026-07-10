import type { Metadata } from "next";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Conditions d'utilisation — FasoLab Virtuel",
};

export default function TermsPage() {
  return (
    <main className="pt-[84px] bg-white">
      <section className="py-20 md:py-28">
        <div className="max-w-3xl mx-auto px-6 md:px-10">
          <h1 className="text-[clamp(2rem,4vw,2.75rem)] font-display font-extrabold text-navy leading-tight mb-4">
            Conditions d&apos;utilisation
          </h1>
          <p className="text-[13px] text-gray-400 mb-10">Dernière mise à jour : juillet 2026</p>

          <div className="prose prose-neutral max-w-none text-[15px] text-gray-500 font-light leading-relaxed space-y-6">
            <p>
              En utilisant {SITE.name}, vous acceptez les présentes conditions
              d&apos;utilisation. Merci de les lire attentivement.
            </p>

            <h2 className="text-navy font-display font-bold text-[1.2rem]">Utilisation du service</h2>
            <p>
              La plateforme est destinée à un usage pédagogique par des enseignants,
              élèves et établissements scolaires. Toute utilisation frauduleuse ou
              détournée est interdite.
            </p>

            <h2 className="text-navy font-display font-bold text-[1.2rem]">Comptes utilisateurs</h2>
            <p>
              Chaque utilisateur est responsable de la confidentialité de ses
              identifiants et des actions réalisées depuis son compte.
            </p>

            <h2 className="text-navy font-display font-bold text-[1.2rem]">Abonnements et facturation</h2>
            <p>
              Les offres payantes (Établissement, Réseau) sont facturées selon les
              modalités convenues lors de la souscription. L&apos;offre Découverte est
              gratuite pendant 30 jours, sans engagement.
            </p>

            <h2 className="text-navy font-display font-bold text-[1.2rem]">Propriété intellectuelle</h2>
            <p>
              L&apos;ensemble du contenu pédagogique, du code et des visuels de la
              plateforme reste la propriété exclusive de {SITE.name}.
            </p>

            <h2 className="text-navy font-display font-bold text-[1.2rem]">Contact</h2>
            <p>
              Pour toute question relative à ces conditions, contactez-nous à{" "}
              <a href={`mailto:${SITE.email}`} className="text-primary font-medium">
                {SITE.email}
              </a>
              .
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
