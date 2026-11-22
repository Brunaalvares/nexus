import { NextResponse } from "next/server";
import { parseLead, rateLimit, storeLead } from "@/lib/leads";

export const runtime = "nodejs";

export async function POST(request: Request) {
  const origin = request.headers.get("origin");
  const host = request.headers.get("host");
  if (origin && host) {
    try {
      if (new URL(origin).host !== host) {
        return NextResponse.json({ ok: false }, { status: 403 });
      }
    } catch {
      return NextResponse.json({ ok: false }, { status: 400 });
    }
  }

  const type = request.headers.get("content-type") ?? "";
  if (!type.includes("application/json")) {
    return NextResponse.json({ ok: false }, { status: 415 });
  }

  const length = Number(request.headers.get("content-length") ?? "0");
  if (length > 8_000) {
    return NextResponse.json({ ok: false }, { status: 413 });
  }

  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    "local";
  if (!rateLimit(ip)) {
    return NextResponse.json(
      { ok: false, message: "Aguarde alguns minutos e tente de novo." },
      { status: 429 },
    );
  }

  let body: unknown;
  try {
    const text = await request.text();
    if (text.length > 8_000) {
      return NextResponse.json({ ok: false }, { status: 413 });
    }
    body = JSON.parse(text);
  } catch {
    return NextResponse.json({ ok: false }, { status: 400 });
  }

  const parsed = parseLead(body);
  if (!parsed.lead || parsed.errors) {
    return NextResponse.json({ ok: false, errors: parsed.errors }, { status: 422 });
  }
  if (parsed.lead.website) {
    return NextResponse.json({ ok: true });
  }

  try {
    await storeLead(parsed.lead);
  } catch {
    return NextResponse.json(
      {
        ok: false,
        message: "Não foi possível registrar agora. Use o WhatsApp ou tente de novo.",
      },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
