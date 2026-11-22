"use client";

import { useEffect, useState, type FormEvent, type ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { interests, type Interest } from "@/lib/site";
import { cn } from "cn";

export function Contact({ whatsapp }: { whatsapp: string | null }) {
  const [interest, setInterest] = useState<Interest>("residencial");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    const onInterest = (event: Event) => {
      const detail = (event as CustomEvent<Interest>).detail;
      if (detail === "residencial" || detail === "escritorios" || detail === "lojas") {
        setInterest(detail);
      }
    };
    window.addEventListener("nexus-interest", onInterest);
    return () => window.removeEventListener("nexus-interest", onInterest);
  }, []);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    setStatus("loading");
    setMessage("");
    setErrors({});
    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          whatsapp: data.get("whatsapp"),
          email: data.get("email"),
          interest,
          website: data.get("website"),
        }),
      });
      const payload = (await response.json().catch(() => null)) as {
        ok?: boolean;
        message?: string;
        errors?: Record<string, string>;
      } | null;
      if (!response.ok || !payload?.ok) {
        setErrors(payload?.errors ?? {});
        setMessage(payload?.message || "Não foi possível enviar. Tente de novo.");
        setStatus("error");
        return;
      }
      form.reset();
      setStatus("success");
    } catch {
      setMessage("Sem conexão agora. Tente de novo em instantes.");
      setStatus("error");
    }
  }

  return (
    <section id="contato" className="bg-[#070707] px-6 py-24 md:px-10 md:py-32">
      <div className="mx-auto grid max-w-6xl gap-16 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <p className="kicker">Seu próximo endereço começa aqui</p>
          <h2 className="mt-5 font-[family-name:var(--font-syne)] text-4xl leading-[0.95] font-semibold tracking-[-0.03em] md:text-5xl">
            Descubra todas as possibilidades do Nexus Coupé.
          </h2>
          <p className="mt-6 text-base leading-relaxed font-light text-[#c9c2b6]">
            Marcelo Alvares Imóveis recebe o seu interesse e retorna com plantas,
            condições e a conversa sobre a unidade.
          </p>
          {whatsapp ? (
            <a
              href={whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex h-12 items-center border border-white/25 px-5 text-[0.7rem] tracking-[0.18em] uppercase hover:border-[#c4a574]"
            >
              Atendimento pelo WhatsApp
            </a>
          ) : null}
        </div>

        <div className="lg:col-span-6 lg:col-start-7">
          {status === "success" ? (
            <div className="border border-white/15 px-6 py-12">
              <p className="kicker">Mensagem recebida</p>
              <p className="mt-4 font-[family-name:var(--font-syne)] text-3xl">
                Marcelo Alvares retorna em breve.
              </p>
              <p className="mt-4 text-sm text-[#a39e94]">
                Seu interesse em{" "}
                {interests.find((item) => item.id === interest)?.label.toLowerCase()}{" "}
                ficou registrado.
              </p>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="space-y-6" noValidate>
              <Field label="Nome" error={errors.name}>
                <Input
                  name="name"
                  autoComplete="name"
                  required
                  aria-invalid={Boolean(errors.name)}
                  className="h-12 rounded-none border-0 border-b border-white/25 bg-transparent px-0 text-base text-[#f4f1ea]"
                />
              </Field>
              <Field label="WhatsApp" error={errors.whatsapp}>
                <Input
                  name="whatsapp"
                  inputMode="tel"
                  autoComplete="tel"
                  placeholder="(98) 90000-0000"
                  required
                  aria-invalid={Boolean(errors.whatsapp)}
                  className="h-12 rounded-none border-0 border-b border-white/25 bg-transparent px-0 text-base text-[#f4f1ea] placeholder:text-[#5c574f]"
                />
              </Field>
              <Field label="E-mail" error={errors.email}>
                <Input
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  aria-invalid={Boolean(errors.email)}
                  className="h-12 rounded-none border-0 border-b border-white/25 bg-transparent px-0 text-base text-[#f4f1ea]"
                />
              </Field>
              <fieldset>
                <legend className="text-[0.68rem] tracking-[0.22em] text-[#a39e94] uppercase">
                  Tenho interesse em
                </legend>
                <div className="mt-4 flex flex-wrap gap-2">
                  {interests.map((item) => (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setInterest(item.id)}
                      className={cn(
                        "border px-4 py-2 text-[0.72rem] tracking-[0.14em] uppercase",
                        interest === item.id
                          ? "border-[#f4f1ea] text-[#f4f1ea]"
                          : "border-white/15 text-[#8d877c]",
                      )}
                      aria-pressed={interest === item.id}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
                {errors.interest ? (
                  <p className="mt-2 text-sm text-[#e7b2a4]">{errors.interest}</p>
                ) : null}
              </fieldset>
              <div className="absolute -left-[9999px]" aria-hidden="true">
                <label>
                  Empresa
                  <input name="website" tabIndex={-1} autoComplete="off" />
                </label>
              </div>
              {status === "error" && message ? (
                <p className="text-sm text-[#e7b2a4]" role="alert">
                  {message}
                </p>
              ) : null}
              <Button
                type="submit"
                disabled={status === "loading"}
                className="h-12 rounded-none bg-[#f4f1ea] px-6 text-[0.72rem] tracking-[0.18em] text-[#141414] uppercase hover:bg-[#c4a574]"
              >
                {status === "loading" ? "Enviando…" : "Quero conhecer o Nexus Coupé"}
              </Button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: ReactNode;
}) {
  return (
    <div>
      <Label className="text-[0.68rem] tracking-[0.22em] text-[#a39e94] uppercase">
        {label}
      </Label>
      <div className="mt-2">{children}</div>
      {error ? <p className="mt-2 text-sm text-[#e7b2a4]">{error}</p> : null}
    </div>
  );
}
