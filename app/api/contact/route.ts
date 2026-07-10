import { NextRequest, NextResponse } from "next/server";

const API = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:8001/api";

export async function POST(req: NextRequest) {
  const body = await req.json().catch(() => null);

  if (!body || !body.name || !body.email || !body.message) {
    return NextResponse.json(
      { ok: false, error: "Nom, email et message sont requis." },
      { status: 400 }
    );
  }

  try {
    const res = await fetch(`${API}/public/contact`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...body, type: "contact" }),
    });

    if (!res.ok) {
      return NextResponse.json(
        { ok: false, error: "Le backend a refusé la demande." },
        { status: res.status }
      );
    }

    const data = await res.json().catch(() => ({}));
    return NextResponse.json({ ok: true, ...data });
  } catch (err) {
    return NextResponse.json(
      { ok: false, error: "Impossible de joindre le backend FasoLab." },
      { status: 502 }
    );
  }
}
