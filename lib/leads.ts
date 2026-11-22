import { appendFile, mkdir } from "node:fs/promises";
import path from "node:path";
import { Pool } from "pg";
import type { Interest } from "@/lib/site";

export type LeadInput = {
  name: string;
  whatsapp: string;
  email: string;
  interest: Interest;
  website?: string;
};

export type Lead = LeadInput & { createdAt: string };

const interests = new Set<Interest>(["residencial", "escritorios", "lojas"]);

let pool: Pool | null = null;

function database() {
  const url = process.env.DATABASE_URL;
  if (!url) return null;
  if (!pool) {
    pool = new Pool({ connectionString: url, max: 3, ssl: sslOption(url) });
  }
  return pool;
}

function sslOption(url: string) {
  if (url.includes("localhost") || url.includes("127.0.0.1")) return undefined;
  return { rejectUnauthorized: true };
}

export function parseLead(body: unknown): { lead?: LeadInput; errors?: Record<string, string> } {
  if (!body || typeof body !== "object") {
    return { errors: { form: "Envie os dados do formulário." } };
  }
  const raw = body as Record<string, unknown>;
  const errors: Record<string, string> = {};
  const name = clean(raw.name, 80);
  const email = clean(raw.email, 120).toLowerCase();
  const whatsapp = clean(raw.whatsapp, 24).replace(/[^\d+]/g, "");
  const digits = whatsapp.replace(/\D/g, "");
  const interest = raw.interest;
  const website = typeof raw.website === "string" ? raw.website : "";

  if (name.length < 2) errors.name = "Informe seu nome.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errors.email = "Informe um e-mail válido.";
  if (digits.length < 10 || digits.length > 13) {
    errors.whatsapp = "Informe um WhatsApp com DDD.";
  }
  if (typeof interest !== "string" || !interests.has(interest as Interest)) {
    errors.interest = "Escolha Residencial, Escritórios ou Lojas.";
  }
  if (Object.keys(errors).length) return { errors };
  return {
    lead: {
      name,
      email,
      whatsapp: digits,
      interest: interest as Interest,
      website,
    },
  };
}

function clean(value: unknown, max: number) {
  if (typeof value !== "string") return "";
  return value.replace(/[\u0000-\u001F]/g, "").trim().slice(0, max);
}

export async function storeLead(lead: LeadInput) {
  const record: Lead = { ...lead, website: undefined, createdAt: new Date().toISOString() };
  const stored = await Promise.allSettled([
    writeDatabase(record),
    writeFile(record),
    postWebhook(record),
  ]);
  const saved = stored.some(
    (item) => item.status === "fulfilled" && item.value === true,
  );
  if (!saved) {
    throw new Error("lead-not-stored");
  }
}

async function writeDatabase(lead: Lead) {
  const db = database();
  if (!db) return false;
  await db.query(
    `insert into leads (name, whatsapp, email, interest, created_at)
     values ($1, $2, $3, $4, $5)`,
    [lead.name, lead.whatsapp, lead.email, lead.interest, lead.createdAt],
  );
  return true;
}

async function writeFile(lead: Lead) {
  const dir = path.join(process.cwd(), "data");
  await mkdir(dir, { recursive: true });
  await appendFile(path.join(dir, "leads.jsonl"), `${JSON.stringify(lead)}\n`, "utf8");
  return true;
}

async function postWebhook(lead: Lead) {
  const url = process.env.LEAD_WEBHOOK_URL;
  if (!url) return false;
  const response = await fetch(url, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(lead),
    signal: AbortSignal.timeout(8000),
  });
  if (!response.ok) throw new Error("webhook");
  return true;
}

const hits = new Map<string, number[]>();

export function rateLimit(key: string) {
  const now = Date.now();
  const recent = (hits.get(key) ?? []).filter((time) => now - time < 10 * 60 * 1000);
  if (recent.length >= 6) return false;
  recent.push(now);
  hits.set(key, recent);
  return true;
}
