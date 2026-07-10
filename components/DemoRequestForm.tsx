"use client";

import { useState, FormEvent } from "react";
import { CheckCircle2 } from "lucide-react";
import { sendDemo } from "@/lib/api";

export function DemoRequestForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [error, setError] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setError("");

    const form = new FormData(e.currentTarget);
    try {
      await sendDemo({
        name: String(form.get("name") || ""),
        email: String(form.get("email") || ""),
        organisation: String(form.get("organisation") || ""),
        phone: String(form.get("phone") || ""),
      });
      setStatus("sent");
      e.currentTarget.reset();
    } catch (err) {
      setStatus("error");
      setError("Une erreur est survenue. Merci de réessayer dans un instant.");
    }
  }

  if (status === "sent") {
    return (
      <div className="flex flex-col items-center gap-3 py-4">
        <span className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
          <CheckCircle2 className="w-6 h-6 text-primary" />
        </span>
        <p className="text-[15px] font-bold text-navy">Demande envoyée !</p>
        <p className="text-[13px] text-gray-500 font-light text-center max-w-xs">
          Notre équipe vous recontacte très vite pour organiser votre démonstration.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 text-left max-w-md mx-auto">
      <div className="grid sm:grid-cols-2 gap-4">
        <input
          name="name"
          required
          placeholder="Nom complet"
          className="w-full h-11 rounded-xl border border-gray-200 px-4 text-[14px] focus:outline-none focus:ring-2 focus:ring-primary/40"
        />
        <input
          type="email"
          name="email"
          required
          placeholder="Email"
          className="w-full h-11 rounded-xl border border-gray-200 px-4 text-[14px] focus:outline-none focus:ring-2 focus:ring-primary/40"
        />
      </div>
      <div className="grid sm:grid-cols-2 gap-4">
        <input
          name="organisation"
          placeholder="Établissement"
          className="w-full h-11 rounded-xl border border-gray-200 px-4 text-[14px] focus:outline-none focus:ring-2 focus:ring-primary/40"
        />
        <input
          name="phone"
          placeholder="Téléphone (optionnel)"
          className="w-full h-11 rounded-xl border border-gray-200 px-4 text-[14px] focus:outline-none focus:ring-2 focus:ring-primary/40"
        />
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        className="h-12 rounded-xl bg-primary hover:bg-primary-dark text-white font-bold text-[14px] transition-all duration-200 teal-glow disabled:opacity-60"
      >
        {status === "sending" ? "Envoi en cours..." : "Réserver une démo"}
      </button>

      {status === "error" && <p className="text-[13px] text-red-500 font-semibold text-center">{error}</p>}
    </form>
  );
}
