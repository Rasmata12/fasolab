import type { Metadata } from "next";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Politique de confidentialité — FasoLab Virtuel",
};

export default function PrivacyPage() {
  return (
    <main className="pt-[100px] bg-white">
      <section className="py-20 md:py-28">
        <div className="max-w-3xl mx-auto px-6 md:px-10">
          <h1 className="mx-auto max-w-3xl text-center text-[clamp(2rem,9vw,2.75rem)] md:text-[clamp(2rem,4vw,2.75rem)] font-display font-extrabold text-navy leading-[1.08] mb-4 [text-wrap:balance]">
            Politique de confidentialité
          </h1>
          <p className="text-[13px] text-gray-400 mb-10">Dernière mise à jour : juillet 2026</p>

          <div className="prose prose-neutral max-w-none text-[15px] text-gray-500 font-light leading-relaxed space-y-6">
            <p>
              {SITE.name} accorde une grande importance à la protection des données
              personnelles des enseignants, élèves et établissements qui utilisent la
              plateforme.
            </p>

            <h2 className="text-navy font-display font-bold text-[1.2rem]">Données collectées</h2>
            <p>
              Nous collectons les informations nécessaires à la création de votre
              compte (nom, email, établissement), ainsi que les données de progression
              pédagogique générées lors de l&apos;utilisation des laboratoires
              virtuels.
            </p>

            <h2 className="text-navy font-display font-bold text-[1.2rem]">Utilisation des données</h2>
            <p>
              Ces données servent uniquement à faire fonctionner la plateforme, générer
              vos rapports de progression et améliorer nos expériences pédagogiques.
              Elles ne sont jamais vendues à des tiers.
            </p>

            <h2 className="text-navy font-display font-bold text-[1.2rem]">Vos droits</h2>
            <p>
              Vous pouvez à tout moment demander l&apos;accès, la correction ou la
              suppression de vos données en écrivant à{" "}
              <a href={`mailto:${SITE.email}`} className="text-primary font-medium">
                {SITE.email}
              </a>
              .
            </p>

            <h2 className="text-navy font-display font-bold text-[1.2rem]">Contact</h2>
            <p>
              Pour toute question relative à cette politique, contactez-nous à{" "}
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
