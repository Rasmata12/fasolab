// Le client appelle les routes internes /api/contact et /api/lead
// (voir app/api/), qui proxient elles-mêmes vers le backend externe
// (NEXT_PUBLIC_API_URL). Ça évite tout problème de CORS depuis le navigateur.

export async function sendContact(data: Record<string, unknown>) {
  const res = await fetch("/api/contact", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  if (!res.ok) throw new Error("Erreur lors de l'envoi du message");
  return res.json();
}

export async function sendDemo(data: Record<string, unknown>) {
  const res = await fetch("/api/lead", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  if (!res.ok) throw new Error("Erreur lors de l'envoi de la demande de démo");
  return res.json();
}

// GET direct vers le backend externe (pas de proxy interne prévu dans
// l'architecture pour les packs) — voir README pour le brancher sur /packs
// dès que la forme de la réponse est connue.
const API = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:8001/api";

export async function getPacks() {
  const res = await fetch(`${API}/public/packs`, { next: { revalidate: 60 } });
  if (!res.ok) throw new Error("Erreur lors de la récupération des packs");
  return res.json();
}
