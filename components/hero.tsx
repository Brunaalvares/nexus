export function Hero() {
  return (
    <section id="topo" className="shot bg-[#090909]">
      <img
        src="/media/hero.webp"
        alt="Perspectiva do Nexus Coupé ao entardecer, com as torres, o mall e a avenida à frente"
        width={1800}
        height={1229}
        fetchPriority="high"
        decoding="async"
        className="hero-still absolute inset-0 h-full w-full object-cover object-[center_40%]"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#090909]/75 via-transparent to-[#090909]/30" />
      <div className="absolute top-24 right-5 z-10 hidden rounded-2xl border border-white/15 bg-[#090909]/45 px-4 py-3 backdrop-blur-md md:block">
        <p className="text-[0.62rem] tracking-[0.28em] text-[#c4a574] uppercase">Renascença</p>
        <p className="mt-1 text-sm text-[#f4f1ea]">São Luís, MA</p>
      </div>
      <div className="relative z-10 flex h-full flex-col justify-end px-6 pb-16 md:px-16 md:pb-20">
        <p className="kicker">Ergus Engenharia</p>
        <h1 className="mt-4 font-[family-name:var(--font-syne)] text-4xl leading-[0.9] font-semibold tracking-[-0.04em] md:text-6xl">
          Nexus <span className="metal">Coupé</span>
        </h1>
        <p className="mt-4 max-w-sm text-base font-light text-[#f4f1ea] md:text-lg">
          Onde a cidade se conecta ao futuro.
        </p>
      </div>
    </section>
  );
}
