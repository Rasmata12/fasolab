import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  metadataBase: new URL("https://fasolab.bf"),
  title: {
    default: `${SITE.name} — Laboratoires de sciences virtuels pour l'Afrique`,
    template: `%s`,
  },
  description: SITE.description,
  keywords: [
    "FasoLab",
    "laboratoire virtuel",
    "réalité virtuelle éducation",
    "sciences Afrique",
    "chimie virtuelle",
    "Burkina Faso",
    "EdTech",
  ],
  openGraph: {
    title: `${SITE.name} — Laboratoires de sciences virtuels pour l'Afrique`,
    description: SITE.description,
    url: "https://fasolab.bf",
    siteName: SITE.name,
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE.name} — Laboratoires de sciences virtuels pour l'Afrique`,
    description: SITE.description,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body className="font-sans overflow-x-hidden">
        <ScrollProgress />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
