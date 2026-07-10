import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen pt-[84px] flex items-center justify-center bg-white px-6">
      <div className="text-center">
        <p className="text-primary font-display font-extrabold text-6xl mb-4">404</p>
        <h1 className="text-[1.6rem] font-display font-extrabold text-navy mb-3">
          Page introuvable
        </h1>
        <p className="text-[14px] text-gray-500 font-light mb-8">
          Cette page n&apos;existe pas ou a été déplacée.
        </p>
        <Link
          href="/"
          className="inline-flex items-center justify-center h-11 px-6 bg-primary hover:bg-primary-dark text-navy font-bold text-[14px] rounded-xl transition-all duration-200"
        >
          Retour à l&apos;accueil
        </Link>
      </div>
    </main>
  );
}
