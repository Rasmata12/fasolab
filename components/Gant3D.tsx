"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle2, Cpu } from "lucide-react";
import device from "@/assets/images/capteur-bracelet.png";
import inUse from "@/assets/images/capteur-en-situation.png";

const points = [
  "Capte les gestes de la main en temps réel",
  "Se connecte en USB, aucune configuration complexe",
  "Retour visuel instantané dans l'expérience virtuelle",
  "Léger, réglable, pensé pour un usage prolongé en classe",
];

export function Gant3D() {
  return (
    <section id="bracelet" className="py-24 md:py-32 bg-navy relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-primary/10 blur-[140px]" />
      </div>

      <div className="relative max-w-[1560px] mx-auto px-6 md:px-10 xl:px-16">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 mb-5 px-3.5 py-1.5 rounded-full border border-primary/25 bg-primary/8">
              <Cpu className="w-3.5 h-3.5 text-primary" />
              <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-primary">
                Le bracelet capteur FasoLab
              </span>
            </div>

            <h2 className="text-[clamp(1.8rem,3.6vw,2.75rem)] font-display font-extrabold text-white leading-tight mb-5">
              Sentez l&apos;expérience,
              <br />
              ne vous contentez pas de la regarder
            </h2>

            <p className="text-[15px] text-white/55 font-light leading-relaxed mb-8 max-w-md">
              En complément de la plateforme 3D, notre prototype de bracelet capteur
              traduit les mouvements de la main de l&apos;élève en actions dans le
              laboratoire virtuel — verser, agiter, ajuster un dosage — pour une
              manipulation qui se rapproche d&apos;un vrai geste de laboratoire.
            </p>

            <ul className="flex flex-col gap-3">
              {points.map((p) => (
                <li key={p} className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-primary/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-primary" />
                  </span>
                  <span className="text-[14px] text-white/70 font-light">{p}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-[0_30px_80px_rgba(0,0,0,0.4)]">
              <Image src={inUse} alt="Bracelet capteur FasoLab en situation d'utilisation" className="w-full h-auto block" />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/40 to-transparent pointer-events-none" />
            </div>

            <motion.div
              className="absolute -bottom-8 -left-8 w-[190px] rounded-xl overflow-hidden border border-primary/25 shadow-2xl bg-navy"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            >
              <Image src={device} alt="Bracelet capteur FasoLab" className="w-full h-auto block" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
