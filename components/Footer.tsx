import Link from "next/link";
import Image from "next/image";
import { Mail, Linkedin, Facebook } from "lucide-react";
import { SITE, FOOTER_LINKS } from "@/lib/constants";
import logo from "@/assets/images/fasolab-logo.png";

export function Footer() {
  return (
    <footer className="bg-navy">
      <div className="h-[1.5px] bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 md:px-10 py-14 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-6 mb-12">
          <div className="md:col-span-5">
            <Image src={logo} alt="FasoLab Virtuel" className="h-14 object-contain mb-5" />
            <p className="text-[13px] text-white/40 font-light leading-relaxed max-w-[280px]">
              {SITE.description}
            </p>
            <p className="text-[10px] text-primary/60 uppercase tracking-[0.24em] mt-4 font-medium">
              {SITE.tagline}
            </p>
            <div className="flex gap-2.5 mt-6">
              {[
                { icon: Mail, href: `mailto:${SITE.email}`, label: "Email" },
                { icon: Linkedin, href: "#", label: "LinkedIn" },
                { icon: Facebook, href: "#", label: "Facebook" },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-8 h-8 rounded-lg border border-white/8 bg-white/[0.04] flex items-center justify-center hover:border-primary/30 hover:bg-primary/8 transition-all duration-200"
                >
                  <Icon className="w-3.5 h-3.5 text-white/40" />
                </a>
              ))}
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
                  className="text-[13px] text-white/40 hover:text-primary transition-colors font-light"
                >
                  {SITE.email}
                </a>
              </li>
              <li className="text-[13px] text-white/25 font-light">{SITE.location}</li>
              <li className="text-[13px] text-white/25 font-light">{SITE.org}</li>
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
