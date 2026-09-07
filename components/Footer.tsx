import Link from "next/link";
import { Mail, Facebook } from "lucide-react";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";
import { TikTokIcon } from "@/components/icons/TikTokIcon";
import { SITE, FOOTER_LINKS, SOCIAL_LINKS } from "@/lib/constants";

// Associe le nom d'icône stocké dans constants.ts au vrai composant :
// Facebook vient de lucide-react, WhatsApp et TikTok sont des logos de
// marque dessinés à la main dans components/icons/ (lucide ne les a pas).
const SOCIAL_ICONS = { Facebook, WhatsApp: WhatsAppIcon, TikTok: TikTokIcon } as const;
import { Logo } from "@/components/Logo";

export function Footer() {
  return (
    <footer className="bg-navy">
      <div className="h-[1.5px] bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div className="max-w-[1560px] mx-auto px-4 sm:px-6 md:px-10 xl:px-16 py-12 sm:py-14 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-6 mb-12">
          <div className="md:col-span-5 min-w-0">
            <Logo variant="light" size="lg" className="mb-5" />
            <p className="text-[13px] text-white/40 font-light leading-relaxed max-w-[280px]">
              {SITE.description}
            </p>
            <p className="text-[10px] text-primary/60 uppercase tracking-[0.24em] mt-4 font-medium">
              {SITE.tagline}
            </p>
            <div className="flex gap-2.5 mt-6">
              <a
                href={`mailto:${SITE.email}`}
                aria-label="Nous écrire par email"
                title={SITE.email}
                className="w-9 h-9 rounded-lg border border-white/8 bg-white/[0.04] flex items-center justify-center hover:border-primary/30 hover:bg-primary/8 transition-all duration-200"
              >
                <Mail className="w-4 h-4 text-white/45" />
              </a>
              {SOCIAL_LINKS.map(({ label, href, icon }) => {
                const Icon = SOCIAL_ICONS[icon as keyof typeof SOCIAL_ICONS];
                return (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    title={label}
                    className="w-9 h-9 rounded-lg border border-white/8 bg-white/[0.04] flex items-center justify-center hover:border-primary/30 hover:bg-primary/8 transition-all duration-200"
                  >
                    <Icon className="w-4 h-4 text-white/45" />
                  </a>
                );
              })}
            </div>
          </div>

          <div className="md:col-span-3 md:col-start-7">
            <h4 className="text-[10px] font-bold uppercase tracking-[0.22em] text-white/35 mb-5">
              Navigation
            </h4>
            <ul className="flex flex-col gap-2.5">
              {FOOTER_LINKS.navigation.map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    className="text-[13px] text-white/40 hover:text-primary transition-colors font-light"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3">
            <h4 className="text-[10px] font-bold uppercase tracking-[0.22em] text-white/35 mb-5">
              Contact
            </h4>
            <ul className="flex flex-col gap-2.5">
              <li>
                <a
                  href={`mailto:${SITE.email}`}
                  className="text-[13px] text-white/40 hover:text-primary transition-colors font-light break-words"
                >
                  {SITE.email}
                </a>
              </li>
              <li className="text-[13px] text-white/25 font-light">{SITE.location}</li>
              <li>
                <a
                  href={`tel:${SITE.phone.replace(/\s/g, "")}`}
                  className="text-[13px] text-white/40 hover:text-primary transition-colors font-light"
                >
                  {SITE.phone}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/[0.06] pt-7 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[12px] text-white/20 font-light">
            © {new Date().getFullYear()} {SITE.name}. Tous droits réservés.
          </p>
          <div className="flex gap-5">
            {FOOTER_LINKS.legal.map((l) => (
              <Link
                key={l.label}
                href={l.href}
                    className="text-[12px] text-white/20 hover:text-white/45 transition-colors font-light"
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
