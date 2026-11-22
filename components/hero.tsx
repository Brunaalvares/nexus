import { buttonVariants } from "@/components/ui/button";
import { cn } from "cn";

export function Hero() {
  return (
    <section id="topo" className="relative min-h-[100svh] overflow-hidden bg-[#090909]">
      <img
        src="/media/hero.webp"
        alt="Perspectiva do Nexus Coupé ao entardecer, com as torres, o mall e a avenida à frente"
        width={1800}
        height={1229}
        fetchPriority="high"
        decoding="async"
        className="hero-still absolute inset-0 h-full w-full object-cover object-center"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#090909] via-[#090909]/35 to-[#090909]/25" />
      <div className="relative z-10 flex min-h-[100svh] flex-col justify-end px-6 pt-28 pb-16 md:px-14 md:pb-20">
        <p className="kicker">Ergus Engenharia · Renascença</p>
        <h1 className="mt-6 max-w-5xl font-[family-name:var(--font-syne)] text-[clamp(3.4rem,11vw,8.4rem)] leading-[0.86] font-semibold tracking-[-0.04em]">
          NEXUS
          <span className="metal block">COUPÉ</span>
        </h1>
        <p className="mt-8 max-w-md text-lg font-light text-[#f4f1ea] md:text-xl">
          Onde a cidade se conecta ao futuro.
        </p>
        <p className="mt-3 text-sm tracking-[0.16em] text-[#d9d3c8] uppercase">
          Renascença — São Luís, MA
        </p>
        <a
          href="#conceito"
          className={cn(
            buttonVariants({ size: "lg" }),
            "mt-10 h-12 w-fit rounded-none bg-[#f4f1ea] px-7 text-[0.72rem] tracking-[0.2em] text-[#141414] uppercase hover:bg-[#c4a574]",
          )}
        >
          Explore o empreendimento
        </a>
      </div>
    </section>
  );
}
