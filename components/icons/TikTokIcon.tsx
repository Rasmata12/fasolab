import type { SVGProps } from "react";

/**
 * Logo TikTok officiel (note de musique stylisée).
 * lucide-react ne fournit pas de logos de marque — ce tracé vient du jeu
 * d'icônes open-source Simple Icons (CC0) et reproduit fidèlement le logo.
 * S'utilise comme une icône lucide : <TikTokIcon className="w-4 h-4" />
 */
export function TikTokIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M16.6 5.82s.51.5 0 0A4.278 4.278 0 0 1 15.54 3h-3.09v12.4a2.592 2.592 0 0 1-2.59 2.5c-1.42 0-2.6-1.16-2.6-2.6 0-1.72 1.66-3.01 3.37-2.48V9.66c-3.45-.46-6.47 2.22-6.47 5.64 0 3.33 2.76 5.7 5.69 5.7 3.13 0 5.69-2.55 5.69-5.7V9.01a7.35 7.35 0 0 0 4.31 1.38V7.3s-1.88.09-3.24-1.48z" />
    </svg>
  );
}
