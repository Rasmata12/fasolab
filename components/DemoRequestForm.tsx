"use client";

import { useState, FormEvent, ReactNode } from "react";
import { CheckCircle2 } from "lucide-react";
import { sendDemo } from "@/lib/api";

const POSTES = [
  "Directeur / Directrice",
  "Proviseur / Proviseure",
  "Enseignant(e)",
  "Responsable pédagogique",
  "Autre",
];

const TYPES_ETABLISSEMENT = ["Lycée", "Collège", "Université", "Centre de formation", "Autre"];

const PAYS = [
  "Burkina Faso",
  "Côte d'Ivoire",
  "Mali",
  "Niger",
  "Sénégal",
  "Togo",
  "Bénin",
  "Autre",
];

function Field({
  label,
  required,
  children,
}: {
  label: string;
  required?: boolean;
  children: ReactNode;
}) {
  return (
    <div>
      <label className="text-[12.5px] font-bold text-navy mb-1.5 block">
        {label} {required && <span className="text-primary">*</span>}
      </label>
      {children}
    </div>
  );
}

const inputClass =
  "w-full h-11 rounded-xl border border-gray-200 px-4 text-[14px] text-navy placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary/40 transition-colors bg-white";

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
        prenom: String(form.get("prenom") || ""),
        nom: String(form.get("nom") || ""),
        email: String(form.get("email") || ""),
        telephone: String(form.get("telephone") || ""),
        poste: String(form.get("poste") || ""),
        etablissement: String(form.get("etablissement") || ""),
        typeEtablissement: String(form.get("typeEtablissement") || ""),
        nbEleves: String(form.get("nbEleves") || ""),
        pays: String(form.get("pays") || ""),
        ville: String(form.get("ville") || ""),
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
      <div className="flex flex-col items-center gap-3 py-10 px-8">
        <span className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
          <CheckCircle2 className="w-7 h-7 text-primary" />
        </span>
        <p className="text-[16px] font-bold text-navy">Demande envoyée !</p>
        <p className="text-[13.5px] text-gray-500 font-light text-center max-w-xs">
          Notre équipe vous recontacte très vite pour organiser votre démonstration.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-7 text-left p-7 md:p-9">
      <div className="flex flex-col gap-4">
        <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-primary">
          Responsable
        </span>
        <div className="grid sm:grid-cols-2 gap-4">
          <Field label="Prénom" required>
            <input name="prenom" required placeholder="Aminata" className={inputClass} />
          </Field>
          <Field label="Nom" required>
            <input name="nom" required placeholder="Ouédraogo" className={inputClass} />
          </Field>
        </div>
        <div className="grid sm:grid-cols-2 gap-4">
          <Field label="Email" required>
            <input
              type="email"
              name="email"
              required
              placeholder="direction@lycee.bf"
              className={inputClass}
            />
          </Field>
          <Field label="Téléphone">
            <input name="telephone" placeholder="+226 XX XX XX XX" className={inputClass} />
          </Field>
        </div>
        <Field label="Poste / Fonction">
          <select name="poste" defaultValue="" className={inputClass}>
            <option value="" disabled>
              -- Choisir --
            </option>
            {POSTES.map((p) => (
              <option key={p} value={p}>
                {p}
              </option>
            ))}
          </select>
        </Field>
      </div>

      <div className="flex flex-col gap-4 pt-6 border-t border-gray-100">
        <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-primary">
          Établissement
        </span>
        <Field label="Nom de l'établissement" required>
          <input
            name="etablissement"
            required
            placeholder="Lycée Municipal de Ouagadougou"
            className={inputClass}
          />
        </Field>
        <div className="grid sm:grid-cols-2 gap-4">
          <Field label="Type">
            <select name="typeEtablissement" defaultValue="" className={inputClass}>
              <option value="" disabled>
                -- Choisir --
              </option>
              {TYPES_ETABLISSEMENT.map((t) => (
                <option key={t} value={t}>
                  {t}
                </option>
              ))}
            </select>
          </Field>
          <Field label="Nb élèves estimé">
            <input
              type="number"
              min={0}
              name="nbEleves"
              placeholder="500"
              className={inputClass}
            />
          </Field>
        </div>
        <div className="grid sm:grid-cols-2 gap-4">
          <Field label="Pays">
            <select name="pays" defaultValue="Burkina Faso" className={inputClass}>
              {PAYS.map((p) => (
                <option key={p} value={p}>
                  {p}
                </option>
              ))}
            </select>
          </Field>
          <Field label="Ville">
            <input name="ville" placeholder="Ouagadougou" className={inputClass} />
          </Field>
        </div>
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        className="h-12 rounded-xl bg-primary hover:bg-primary-dark text-white font-bold text-[14px] transition-all duration-200 teal-glow disabled:opacity-60"
      >
        {status === "sending" ? "Envoi en cours..." : "Réserver une démo"}
      </button>

      {status === "error" && (
        <p className="text-[13px] text-red-500 font-semibold text-center -mt-3">{error}</p>
      )}
    </form>
  );
}
