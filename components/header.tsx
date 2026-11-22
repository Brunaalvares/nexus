"use client";

import { cn } from "cn";

const links = [
  { href: "#conceito", label: "Empreendimento" },
  { href: "#plantas", label: "Plantas" },
  { href: "#galeria", label: "Galeria" },
];

export function Header({ whatsapp }: { whatsapp: string | null }) {
  return (
    <header className="fixed inset-x-0 top-0 z-40 px-4 py-4 md:px-8">
      <div className="flex items-center justify-between gap-3">
        <a href="#topo" className="leading-none">
          <span className="font-[family-name:var(--font-syne)] text-[0.78rem] tracking-[0.32em]">
            NEXUS
          </span>
          <span className="mt-1 block text-[0.58rem] tracking-[0.42em] text-[#c4a574]">
            COUPÉ
          </span>
        </a>
        <nav className="hidden items-center gap-1 rounded-full border border-white/15 bg-[#090909]/40 px-2 py-1 backdrop-blur-md md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-full px-3 py-1.5 text-[0.72rem] text-[#f4f1ea]/85 hover:bg-white/10"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <a
          href="#contato"
          className={cn(
            "rounded-full border border-white/50 bg-[#090909]/30 px-4 py-2 text-[0.68rem] tracking-[0.14em] text-[#f4f1ea] uppercase backdrop-blur-md hover:bg-[#f4f1ea] hover:text-[#141414]",
          )}
        >
          Agende uma visita
        </a>
      </div>
      {whatsapp ? (
        <a
          href={whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="fixed right-4 bottom-4 z-40 rounded-full border border-white/20 bg-[#090909]/80 px-4 py-3 text-[0.68rem] tracking-[0.16em] text-[#f4f1ea] uppercase backdrop-blur-md hover:border-[#c4a574] md:right-8 md:bottom-8"
        >
          WhatsApp
        </a>
      ) : null}
    </header>
  );
}
