"use client";

import { useEffect, useState } from "react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "cn";

export function Header({ whatsapp }: { whatsapp: string | null }) {
  const [solid, setSolid] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let frame = 0;
    const onScroll = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(() => {
        frame = 0;
        const height = document.documentElement.scrollHeight - window.innerHeight;
        const y = window.scrollY;
        setSolid(y > 24);
        setProgress(height > 0 ? y / height : 0);
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-40 transition-colors duration-500",
        solid ? "bg-[#090909]/88 backdrop-blur-md" : "bg-transparent",
      )}
    >
      <div className="flex items-center justify-between px-5 py-4 md:px-10">
        <a href="#topo" className="group flex flex-col leading-none">
          <span className="font-[family-name:var(--font-syne)] text-[0.95rem] tracking-[0.28em]">
            NEXUS
          </span>
          <span className="mt-1 text-[0.62rem] tracking-[0.42em] text-[#c4a574]">
            COUPÉ
          </span>
        </a>
        <a
          href="#contato"
          className={cn(
            buttonVariants({ variant: "outline", size: "lg" }),
            "h-10 rounded-none border-white/25 bg-transparent px-4 text-[0.68rem] tracking-[0.22em] text-[#f4f1ea] uppercase hover:bg-white hover:text-[#141414]",
          )}
        >
          Contato
        </a>
      </div>
      <div className="h-px bg-white/10">
        <div
          className="h-px bg-[#c4a574]"
          style={{ width: `${Math.min(100, progress * 100)}%` }}
        />
      </div>
      {whatsapp ? (
        <a
          href={whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="fixed right-4 bottom-4 z-40 border border-white/20 bg-[#090909]/90 px-4 py-3 text-[0.68rem] tracking-[0.18em] text-[#f4f1ea] uppercase backdrop-blur-md hover:border-[#c4a574] md:right-8 md:bottom-8"
        >
          WhatsApp
        </a>
      ) : null}
    </header>
  );
}
