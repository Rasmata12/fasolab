import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Connexion — FasoLab Virtuel",
};

export default function LoginPage() {
  return (
    <main className="min-h-screen bg-primary-tint">
      <div className="h-[100px] bg-navy" />
      <div className="flex items-center justify-center px-6 py-16">
      <div className="w-full max-w-md bg-white rounded-2xl border border-gray-100 shadow-[0_20px_60px_rgba(13,27,62,0.08)] p-8">
        <h1 className="text-[1.6rem] font-display font-extrabold text-navy mb-2">Se connecter</h1>
        <p className="text-[13px] text-gray-500 font-light mb-7">
          Accédez à votre espace personnel FasoLab.
        </p>

        <form className="flex flex-col gap-4">
          <div>
            <label className="text-[12px] font-bold text-navy mb-1.5 block">
              Email ou numéro de téléphone
            </label>
            <input
              required
              className="w-full h-11 rounded-xl border border-gray-200 px-4 text-[14px] focus:outline-none focus:ring-2 focus:ring-primary/40"
              placeholder="vous@exemple.com ou 70 00 00 00"
            />
          </div>
          <div>
            <label className="text-[12px] font-bold text-navy mb-1.5 block">Mot de passe</label>
            <input
              type="password"
              required
              className="w-full h-11 rounded-xl border border-gray-200 px-4 text-[14px] focus:outline-none focus:ring-2 focus:ring-primary/40"
              placeholder="••••••••"
            />
          </div>

          <button
            type="submit"
            className="mt-2 h-12 rounded-xl bg-primary hover:bg-primary-dark text-navy font-bold text-[14px] transition-all duration-200 teal-glow"
          >
            Se connecter
          </button>
        </form>

        <p className="text-[13px] text-gray-400 font-light text-center mt-6">
          Pas encore de compte ?{" "}
          <Link href="/signup" className="text-primary font-semibold hover:text-primary-dark">
            Créer un compte
          </Link>
        </p>
      </div>
      </div>
    </main>
  );
}
