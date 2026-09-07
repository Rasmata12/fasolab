// Fond animé du hero, calqué sur rpcs3.net : dégradé diagonal sombre,
// particules qui flottent doucement, halo qui respire, et deux vagues à la
// même silhouette qui se suivent EXACTEMENT (même mouvement, même durée),
// dans un simple va-et-vient contenu — pas de défilement infini avec une
// portion cachée hors-écran.

const PARTICLES = [
  { x: "4%", y: "12%", size: 3 },
  { x: "15%", y: "38%", size: 4 },
  { x: "9%", y: "64%", size: 3 },
  { x: "24%", y: "18%", size: 3 },
  { x: "30%", y: "52%", size: 5 },
  { x: "38%", y: "10%", size: 3 },
  { x: "44%", y: "70%", size: 3 },
  { x: "55%", y: "6%", size: 4 },
  { x: "61%", y: "44%", size: 3 },
  { x: "68%", y: "24%", size: 3 },
  { x: "74%", y: "58%", size: 5 },
  { x: "82%", y: "13%", size: 3 },
  { x: "89%", y: "46%", size: 3 },
  { x: "94%", y: "70%", size: 4 },
  { x: "7%", y: "82%", size: 3 },
  { x: "50%", y: "84%", size: 3 },
  { x: "20%", y: "4%", size: 3 },
  { x: "65%", y: "78%", size: 3 },
  { x: "85%", y: "80%", size: 3 },
];

// Deux vagues sinusoïdales, même amplitude d'ordre de grandeur, mais dont
// les crêtes sont décalées horizontalement l'une par rapport à l'autre
// (comme la vidéo de référence : les deux courbes ne culminent pas au même
// endroit, elles se chevauchent en glissant ensemble).
const WAVE_BACK =
  "M0.0,164.9 30.0,160.6 60.0,156.2 90.0,151.6 120.0,147.1 150.0,142.5 180.0,138.1 210.0,133.9 240.0,130.0 270.0,126.4 300.0,123.3 330.0,120.5 360.0,118.3 390.0,116.7 420.0,115.6 450.0,115.0 480.0,115.1 510.0,115.8 540.0,117.1 570.0,118.9 600.0,121.3 630.0,124.1 660.0,127.4 690.0,131.1 720.0,135.1 750.0,139.4 780.0,143.8 810.0,148.4 840.0,152.9 870.0,157.5 900.0,161.9 930.0,166.1 960.0,170.0 990.0,173.6 1020.0,176.7 1050.0,179.5 1080.0,181.7 1110.0,183.3 1140.0,184.4 1170.0,185.0 1200.0,184.9 1230.0,184.2 1260.0,182.9 1290.0,181.1 1320.0,178.7 1350.0,175.9 1380.0,172.6 1410.0,168.9 1440.0,164.9 1470.0,160.6 1500.0,156.2 1530.0,151.6 1560.0,147.1 1590.0,142.5 1620.0,138.1 1650.0,133.9 1680.0,130.0 1710.0,126.4 1740.0,123.3 1770.0,120.5 1800.0,118.3 1830.0,116.7 1860.0,115.6 1890.0,115.0 1920.0,115.1 1950.0,115.8 1980.0,117.1 2010.0,118.9 2040.0,121.3 2070.0,124.1 2100.0,127.4 2130.0,131.1 2160.0,135.1 2190.0,139.4 2220.0,143.8 2250.0,148.4 2280.0,152.9 2310.0,157.5 2340.0,161.9 2370.0,166.1 2400.0,170.0 2430.0,173.6 2460.0,176.7 2490.0,179.5 2520.0,181.7 2550.0,183.3 2580.0,184.4 2610.0,185.0 2640.0,184.9 2670.0,184.2 2700.0,182.9 2730.0,181.1 2760.0,178.7 2790.0,175.9 2820.0,172.6 2850.0,168.9 2880.0,164.9 L2880,260 L0,260 Z";
const WAVE_FRONT =
  "M0.0,204.2 30.0,209.3 60.0,214.0 90.0,218.3 120.0,222.0 150.0,225.0 180.0,227.3 210.0,229.0 240.0,229.8 270.0,230.0 300.0,229.3 330.0,227.9 360.0,225.7 390.0,222.9 420.0,219.4 450.0,215.3 480.0,210.7 510.0,205.6 540.0,200.2 570.0,194.6 600.0,188.8 630.0,182.9 660.0,177.0 690.0,171.3 720.0,165.8 750.0,160.7 780.0,156.0 810.0,151.7 840.0,148.0 870.0,145.0 900.0,142.7 930.0,141.0 960.0,140.2 990.0,140.0 1020.0,140.7 1050.0,142.1 1080.0,144.3 1110.0,147.1 1140.0,150.6 1170.0,154.7 1200.0,159.3 1230.0,164.4 1260.0,169.8 1290.0,175.4 1320.0,181.2 1350.0,187.1 1380.0,193.0 1410.0,198.7 1440.0,204.2 1470.0,209.3 1500.0,214.0 1530.0,218.3 1560.0,222.0 1590.0,225.0 1620.0,227.3 1650.0,229.0 1680.0,229.8 1710.0,230.0 1740.0,229.3 1770.0,227.9 1800.0,225.7 1830.0,222.9 1860.0,219.4 1890.0,215.3 1920.0,210.7 1950.0,205.6 1980.0,200.2 2010.0,194.6 2040.0,188.8 2070.0,182.9 2100.0,177.0 2130.0,171.3 2160.0,165.8 2190.0,160.7 2220.0,156.0 2250.0,151.7 2280.0,148.0 2310.0,145.0 2340.0,142.7 2370.0,141.0 2400.0,140.2 2430.0,140.0 2460.0,140.7 2490.0,142.1 2520.0,144.3 2550.0,147.1 2580.0,150.6 2610.0,154.7 2640.0,159.3 2670.0,164.4 2700.0,169.8 2730.0,175.4 2760.0,181.2 2790.0,187.1 2820.0,193.0 2850.0,198.7 2880.0,204.2 L2880,260 L0,260 Z";

export function WaveBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Dégradé diagonal sombre : teal profond en bas à gauche vers navy en haut à droite */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(150deg, #0F4A45 0%, #123A52 22%, #17295C 50%, #0C1B3F 78%, #081029 100%)",
        }}
      />

      {/* Halo lumineux teal qui respire lentement */}
      <div className="absolute bottom-0 left-0 w-[560px] h-[560px] rounded-full bg-primary/30 blur-[150px] -translate-x-1/4 translate-y-1/4 animate-glow-pulse" />

      {/* Particules éparses qui flottent doucement, scintillement variable */}
      {PARTICLES.map((p, i) => (
        <span
          key={i}
          className="absolute rounded-full bg-white/60 animate-particle-float"
          style={{
            left: p.x,
            top: p.y,
            width: p.size,
            height: p.size,
            animationDuration: `${3 + (i % 4)}s`,
            animationDelay: `${i * 0.3}s`,
          }}
        />
      ))}

      {/* Deux vagues qui se suivent exactement, dans un défilement continu
          et lent (comme la référence) : même animation, même durée, aucun
          décalage — elles glissent ensemble, juste dessinées avec une
          amplitude différente. */}
      <div className="absolute inset-x-0 bottom-0 h-[30%] min-h-[150px]">
        <svg
          className="absolute bottom-0 left-0 w-[200%] h-full animate-wave-swim fill-primary-light/[0.12]"
          viewBox="0 0 2880 260"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d={WAVE_BACK} />
        </svg>
        <svg
          className="absolute bottom-0 left-0 w-[200%] h-full animate-wave-swim fill-primary/[0.22]"
          viewBox="0 0 2880 260"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d={WAVE_FRONT} />
        </svg>
      </div>
    </div>
  );
}
