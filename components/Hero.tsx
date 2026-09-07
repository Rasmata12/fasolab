"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle2, ChevronDown } from "lucide-react";
import { CircuitNetwork } from "@/components/TechPattern";
import { WaveBackground } from "@/components/WaveBackground";
import { Logo } from "@/components/Logo";
import lab1 from "@/assets/images/lab-o2.png";
import lab2 from "@/assets/images/lab-ph.png";
import lab3 from "@/assets/images/lab-combustion.png";
import iconLight from "@/assets/images/fasolab-icon-light.png";

export function Hero() {
  return (
    <section className="relative h-[calc(100svh-52px)] min-h-[600px] lg:h-[calc(100vh-52px)] lg:min-h-[620px] bg-navy flex flex-col justify-center pt-[96px] pb-8 lg:pt-[108px] lg:pb-0 overflow-hidden">
      <WaveBackground />
      <div className="absolute inset-0 pointer-events-none">
        <CircuitNetwork className="absolute -bottom-10 -right-10 w-[260px] h-[200px] md:w-[320px] md:h-[240px]" />
      </div>

      <div className="relative z-10 max-w-[1560px] mx-auto px-4 sm:px-6 md:px-10 xl:px-16 py-4 md:py-12 w-full">
        <div className="grid lg:grid-cols-[1fr_1.25fr] gap-8 xl:gap-24 items-center">
          <div className="flex flex-col">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex max-w-full items-center gap-2 self-start mb-3 sm:mb-5 pl-2.5 pr-3.5 sm:pr-5 py-2 rounded-full border border-primary/25 bg-primary/8 backdrop-blur-sm"
            >
              <span className="text-[9px] sm:text-[11px] font-bold uppercase tracking-[0.12em] sm:tracking-[0.18em] text-primary whitespace-nowrap">
                Conçu et lancé au Burkina Faso
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.08 }}
              className="text-[clamp(2rem,9.5vw,4.4rem)] lg:text-[clamp(2.4rem,4.8vw,4.4rem)] font-display font-black text-white leading-[1.03] tracking-tight mb-3 sm:mb-5 [text-shadow:0_4px_24px_rgba(0,0,0,0.55)]"
            >
              Votre labo
              <br />
              de sciences
              <br />
              <span className="relative inline-block">
                <span className="shimmer-teal">virtuel</span>
                <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 8" fill="none">
                  <path
                    d="M2 6 C50 2, 150 2, 198 6"
                    stroke="#1AA89C"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    opacity="0.5"
                  />
                </svg>
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.18 }}
              className="text-[14px] sm:text-[17.5px] text-white/70 font-light leading-[1.5] sm:leading-[1.78] max-w-xl mb-4 sm:mb-7 [text-shadow:0_2px_12px_rgba(0,0,0,0.5)]"
            >
              FasoLab permet à vos élèves de réaliser des expériences de chimie et de
              physique en 3D immersive, assistées par un bracelet capteur — sans
              équipement de laboratoire physique, depuis n&apos;importe quel appareil.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.26 }}
              className="grid grid-cols-2 gap-2 sm:flex sm:flex-row sm:gap-4 mb-0 w-full max-w-xl"
            >
              <Link
                href="/demo"
                className="btn-shine group inline-flex w-full items-center justify-center gap-1.5 h-[52px] px-2 sm:px-6 bg-primary hover:bg-primary-dark text-white text-[12px] sm:text-[15px] font-bold rounded-2xl transition-all duration-200 teal-glow hover:scale-[1.03] whitespace-nowrap"
              >
                Demander une démo
              </Link>
              <Link
                href="/packs"
                className="inline-flex w-full items-center justify-center gap-1.5 h-[52px] px-2 sm:px-6 border border-white/15 text-white/80 text-[12px] sm:text-[15px] font-semibold rounded-2xl hover:bg-white/6 hover:border-white/25 transition-all duration-200 whitespace-nowrap"
              >
                Voir les expériences
              </Link>
            </motion.div>

          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="relative hidden lg:block select-none"
            style={{ height: 560 }}
          >
            <div className="absolute inset-x-6 top-2 rounded-2xl overflow-hidden border border-white/10 shadow-[0_30px_80px_rgba(0,0,0,0.5)] animate-float-b">
              <div className="flex items-center gap-1.5 px-4 py-3 bg-[#08132C] border-b border-white/8">
                <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
                <div className="flex-1 mx-4 h-5 rounded-full bg-white/6 flex items-center gap-1.5 px-3">
                  <Image src={iconLight} alt="" className="w-3.5 h-3.5 object-contain flex-shrink-0" />
                  <span className="text-[10px] text-white/30 font-mono">
                    app.fasolab.bf/chimie/dosage-acide-base
                  </span>
                </div>
              </div>
              <Image src={lab1} alt="FasoLab labo O₂" className="w-full h-auto block" />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/30 to-transparent pointer-events-none" />
            </div>

            <div className="absolute bottom-0 -left-4 w-[270px] rounded-xl overflow-hidden border border-primary/20 shadow-xl animate-float-a">
              <Image src={lab3} alt="Combustion" className="w-full h-auto block" />
            </div>

            <div
              className="absolute bottom-20 -right-6 w-[235px] rounded-xl overflow-hidden border border-white/8 shadow-xl animate-float-b"
              style={{ animationDelay: "1.5s" }}
            >
              <Image src={lab2} alt="pH dosage" className="w-full h-auto block" />
            </div>

            {/* Real feature callout badge, bottom-right corner */}
            <div className="absolute bottom-0 right-6 bg-white rounded-xl px-3.5 py-2.5 shadow-xl flex items-center gap-2.5 z-20">
              <span className="w-7 h-7 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <CheckCircle2 className="w-3.5 h-3.5 text-primary" />
              </span>
              <span className="text-[11px] font-bold text-navy leading-tight">
                50+ expériences
                <br />
                <span className="text-[10px] font-normal text-muted">disponibles</span>
              </span>
            </div>

            <div className="absolute top-32 left-1/2 -translate-x-1/2 w-80 h-20 bg-primary/15 blur-[50px] pointer-events-none rounded-full" />
          </motion.div>
        </div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
      >
        <ChevronDown className="w-7 h-7 text-white/70" />
      </motion.div>

    </section>
  );
}
