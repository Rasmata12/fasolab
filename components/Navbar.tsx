"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Box } from "lucide-react";
import { Logo } from "@/components/Logo";

/**
 * Barre de navigation — répartition sur toute la largeur de l'écran :
 *
 *   [Logo]  Fonctionnalités · Packs · Tarifs   ((Demander une démo))   Contact · Connexion · À propos
 *    fond gauche      3 liens                     CTA centré                    3 liens, fond droit
 *
 * Au repos (avant tout défilement), la barre porte un léger dégradé sombre
 * ET une fine bordure basse claire (border-b) : le dégradé seul se fondait
 * dans le Hero (les deux étant sombres), donc rien ne délimitait la barre.
 * La bordure crée un vrai bord visible, même sur fond sombre — la barre se
 * sent "posée" au-dessus du contenu, pas fondue dedans. Dès qu'on défile,
 * elle passe à un blanc plein (pas de flou — le logo a des détails fins
 * que le flou brouillait).
 *
 * Barre encore un peu plus haute (108px) pour que le logo ne soit jamais
 * collé au tout premier pixel du haut de l'écran.
 */

const LEFT_LINKS = [
  { label: "Fonctionnalités", href: "/features" },
  { label: "Packs", href: "/packs" },
  { label: "Tarifs", href: "/pricing" },
];

const RIGHT_LINKS = [
  { label: "Contact", href: "/contact" },
  { label: "Connexion", href: "/login" },
  { label: "À propos", href: "/about" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const linkClass = `text-[14.5px] font-medium whitespace-nowrap transition-colors duration-200 ${
    scrolled ? "text-navy/70 hover:text-primary" : "text-white/75 hover:text-white"
  }`;

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-300 ${
        scrolled
          ? "bg-white border-black/[0.06] shadow-[0_4px_24px_rgba(0,0,0,0.08)]"
          : "bg-gradient-to-b from-black/40 via-black/15 to-black/[0.02] border-white/[0.14]"
      }`}
    >
      <div className="h-[108px] w-full px-5 pt-4 md:px-8 xl:px-12 flex items-center gap-6">
        {/* ---- Bloc gauche : logo collé au bord + 3 liens ---- */}
        <div className="flex items-center gap-8 xl:gap-10 flex-shrink-0">
          <Link href="/" aria-label="Accueil FasoLab">
            <Logo variant={scrolled ? "dark" : "light"} size="md" />
          </Link>

          <nav className="hidden lg:flex items-center gap-7 xl:gap-9">
            {LEFT_LINKS.map(({ label, href }) => (
              <Link key={label} href={href} className={linkClass}>
                {label}
              </Link>
            ))}
          </nav>
        </div>

        {/* ---- CTA centré, qui absorbe l'espace restant des deux côtés ---- */}
        <div className="hidden lg:flex flex-1 justify-center">
          <Link
            href="/demo"
            className="navbar-demo-pulse inline-flex items-center gap-2 h-10 px-6 bg-primary hover:bg-primary-dark text-white text-[13px] font-bold uppercase tracking-wide rounded-full whitespace-nowrap transition-colors duration-200"
          >
            <Box className="w-3.5 h-3.5" />
            Demander une démo
          </Link>
        </div>

        {/* ---- Bloc droit : 3 liens collés au bord ---- */}
        <nav className="hidden lg:flex items-center gap-7 xl:gap-9 flex-shrink-0">
          {RIGHT_LINKS.map(({ label, href }) => (
            <Link key={label} href={href} className={linkClass}>
              {label}
            </Link>
          ))}
        </nav>

        {/* ---- Mobile ---- */}
        <button
          className={`lg:hidden ml-auto flex-shrink-0 p-2 ${scrolled ? "text-navy" : "text-white"}`}
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-gray-100 overflow-hidden"
          >
            <div className="px-6 py-6 flex flex-col gap-1">
              {[...LEFT_LINKS, ...RIGHT_LINKS].map(({ label, href }) => (
                <Link
                  key={label}
                  href={href}
                  onClick={() => setOpen(false)}
                  className="py-2.5 text-[15.5px] font-medium text-navy/80 hover:text-primary transition-colors"
                >
                  {label}
                </Link>
              ))}
              <Link
                href="/demo"
                onClick={() => setOpen(false)}
                className="btn-shine mt-4 flex items-center justify-center gap-2 h-12 bg-primary text-white font-bold rounded-full text-sm"
              >
                <Box className="w-4 h-4" />
                Demander une démo
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
