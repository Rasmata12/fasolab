"use client";

import { useState, FormEvent } from "react";
import { Mail, MapPin, Phone, CheckCircle2, Facebook } from "lucide-react";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";
import { TikTokIcon } from "@/components/icons/TikTokIcon";
import { sendContact } from "@/lib/api";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { SITE, SOCIAL_LINKS } from "@/lib/constants";

const SOCIAL_ICONS = { Facebook, WhatsApp: WhatsAppIcon, TikTok: TikTokIcon } as const;

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [error, setError] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setError("");

    const form = new FormData(e.currentTarget);
    try {
      await sendContact({
        name: String(form.get("name") || ""),
        email: String(form.get("email") || ""),
        organisation: String(form.get("organisation") || ""),
        message: String(form.get("message") || ""),
      });
      setStatus("sent");
      e.currentTarget.reset();
    } catch (err) {
      setStatus("error");
      setError("Une erreur est survenue. Merci de réessayer dans un instant.");
    }
  }

  return (
    <main className="bg-white">
      <PageHero
        eyebrow="Contact"
        title="Parlons de votre établissement"
        description="Une question, une démonstration à organiser, un devis à demander ? Écrivez-nous."
      />

      <section className="py-20 md:py-28">
        <div className="max-w-[1240px] mx-auto px-6 md:px-10 grid md:grid-cols-[1fr_1.35fr] gap-16 xl:gap-24">
          <Reveal animation="slide-right">
            <h2 className="text-[1.4rem] font-display font-extrabold text-navy mb-6">
              Nos coordonnées
            </h2>
            <ul className="flex flex-col gap-4">
              <li className="flex items-start gap-3">
                <span className="w-9 h-9 rounded-lg bg-primary-tint flex items-center justify-center flex-shrink-0">
                  <Mail className="w-4 h-4 text-primary" />
                </span>
                <div>
                  <p className="text-[13px] font-bold text-navy">Email</p>
                  <a href={`mailto:${SITE.email}`} className="text-[13px] text-gray-500 hover:text-primary">
                    {SITE.email}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-9 h-9 rounded-lg bg-primary-tint flex items-center justify-center flex-shrink-0">
                  <Phone className="w-4 h-4 text-primary" />
                </span>
                <div>
                  <p className="text-[13px] font-bold text-navy">Téléphone</p>
                  <a
                    href={`tel:${SITE.phone.replace(/\s/g, "")}`}
                    className="text-[13px] text-gray-500 hover:text-primary"
                  >
                    {SITE.phone}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-9 h-9 rounded-lg bg-primary-tint flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-4 h-4 text-primary" />
                </span>
                <div>
                  <p className="text-[13px] font-bold text-navy">Localisation</p>
                  <p className="text-[13px] text-gray-500">{SITE.location}</p>
                </div>
              </li>
            </ul>

            {/* Réseaux sociaux — chaque lien pointe vers le compte officiel */}
            <h3 className="text-[13px] font-bold text-navy mt-9 mb-4">Suivez-nous</h3>
            <div className="flex flex-col gap-2.5">
              {SOCIAL_LINKS.map(({ label, href, icon }) => {
                const Icon = SOCIAL_ICONS[icon as keyof typeof SOCIAL_ICONS];
                return (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 group"
                  >
                    <span className="w-9 h-9 rounded-lg bg-primary-tint flex items-center justify-center flex-shrink-0 group-hover:bg-primary/15 transition-colors">
                      <Icon className="w-4 h-4 text-primary" />
                    </span>
                    <span className="text-[13px] text-gray-500 group-hover:text-primary transition-colors">
                      {label}
                    </span>
                  </a>
                );
              })}
            </div>
          </Reveal>

          <Reveal animation="slide-left" delay={100}>
          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="text-[12px] font-bold text-navy mb-1.5 block">Nom complet</label>
                <input
                  name="name"
                  required
                  className="w-full h-11 rounded-xl border border-gray-200 px-4 text-[14px] focus:outline-none focus:ring-2 focus:ring-primary/40"
                  placeholder="Aïcha Traoré"
                />
              </div>
              <div>
                <label className="text-[12px] font-bold text-navy mb-1.5 block">Email</label>
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full h-11 rounded-xl border border-gray-200 px-4 text-[14px] focus:outline-none focus:ring-2 focus:ring-primary/40"
                  placeholder="vous@etablissement.bf"
                />
              </div>
            </div>
            <div>
              <label className="text-[12px] font-bold text-navy mb-1.5 block">Établissement (optionnel)</label>
              <input
                name="organisation"
                className="w-full h-11 rounded-xl border border-gray-200 px-4 text-[14px] focus:outline-none focus:ring-2 focus:ring-primary/40"
                placeholder="Lycée, collège, ministère..."
              />
            </div>
            <div>
              <label className="text-[12px] font-bold text-navy mb-1.5 block">Message</label>
              <textarea
                name="message"
                required
                rows={5}
                className="w-full rounded-xl border border-gray-200 px-4 py-3 text-[14px] focus:outline-none focus:ring-2 focus:ring-primary/40"
                placeholder="Décrivez votre besoin..."
              />
            </div>

            <button
              type="submit"
              disabled={status === "sending"}
              className="inline-flex items-center justify-center gap-2 h-12 rounded-xl bg-primary hover:bg-primary-dark text-navy font-bold text-[14px] transition-all duration-200 teal-glow disabled:opacity-60"
            >
              {status === "sending" ? "Envoi en cours..." : "Envoyer le message"}
            </button>

            {status === "sent" && (
              <p className="flex items-center gap-2 text-[13px] text-primary font-semibold">
                <CheckCircle2 className="w-4 h-4" /> Message envoyé, nous vous répondons rapidement.
              </p>
            )}
            {status === "error" && <p className="text-[13px] text-red-500 font-semibold">{error}</p>}
          </form>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
