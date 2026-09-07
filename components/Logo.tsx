import Image from "next/image";
import logoDark from "@/assets/images/fasolab-logo.png";
import logoLight from "@/assets/images/fasolab-logo-light.png";

/**
 * The real FasoLab logo, used exactly as designed (icon + FASOLAB VIRTUEL +
 * tagline, stacked) — never redrawn or recomposed.
 *
 * variant="dark"  -> original navy/teal artwork, for WHITE backgrounds
 * variant="light" -> teal/white recolor of the SAME artwork, for NAVY backgrounds
 */
export function Logo({
  variant = "dark",
  size = "md",
  className = "",
}: {
  variant?: "dark" | "light";
  size?: "sm" | "md" | "lg";
  className?: string;
}) {
  const src = variant === "light" ? logoLight : logoDark;

  const heights = {
    sm: "h-16",
    md: "h-20 md:h-[92px]",
    lg: "h-28 md:h-32",
  }[size];

  return (
    <Image
      src={src}
      alt="FasoLab Virtuel"
      className={`${heights} w-auto object-contain ${className}`}
      priority
    />
  );
}
