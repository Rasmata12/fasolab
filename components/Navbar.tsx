"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { NAV_LINKS } from "@/lib/constants";
import logo from "@/assets/images/fasolab-logo.png";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-xl shadow-[0_1px_0_rgba(0,0,0,0.06)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 h-[84px] flex items-center justify-between gap-6">
        <Link href="/" className="flex-shrink-0">
          <Image
            src={logo}
            alt="FasoLab Virtuel"
            className="h-16 md:h-[68px] w-auto object-contain"
            priority
          />
        </Link>

        {/* Nav links + CTA grouped together on the right, so the header reads
           as two clear zones: brand on the far left, everything actionable
           on the far right — instead of nav links floating in a dead middle. */}
        <div className="hidden lg:flex items-center gap-10">
          <nav className="flex items-center gap-8">
            {NAV_LINKS.map((l) => (
              <Link
                key={l.label}
                href={l.href}
                className={`text-[13px] font-semibold tracking-wide whitespace-nowrap transition-colors duration-200 ${
                  scrolled
                    ? "text-navy/65 hover:text-primary"
                    : "text-white/70 hover:text-white"
                }`}
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Link
              href="/login"
              className={`text-[13px] font-semibold px-4 py-2 whitespace-nowrap transition-colors ${
                scrolled ? "text-navy" : "text-white"
              }`}
            >
              Se connecter
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center h-10 px-6 bg-primary hover:bg-primary-dark text-white text-[13px] font-bold rounded-full whitespace-nowrap transition-all duration-200 teal-glow hover:scale-105"
            >
              Demander une démo
            </Link>
          </div>
        </div>

        <button
          className={`lg:hidden flex-shrink-0 p-2 ${scrolled ? "text-navy" : "text-white"}`}
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
            <div className="px-6 py-6 flex flex-col gap-4">
              {NAV_LINKS.map((l) => (
                <Link
                  key={l.label}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="text-base font-semibold text-navy hover:text-primary transition-colors"
                >
                  {l.label}
                </Link>
              ))}
              <Link
                href="/login"
                onClick={() => setOpen(false)}
                className="text-base font-semibold text-navy/70"
              >
                Se connecter
              </Link>
              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="mt-2 flex items-center justify-center h-12 bg-primary text-navy font-bold rounded-full text-sm"
              >
                Obtenir une démo
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
