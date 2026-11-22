export function Story() {
  return (
    <section id="conceito" className="bg-[#090909]">
      <div className="mx-auto max-w-6xl px-6 py-28 md:px-10 md:py-36">
        <div className="reveal max-w-3xl">
          <p className="kicker">Um novo conceito de viver a cidade</p>
          <h2 className="mt-6 font-[family-name:var(--font-syne)] text-[clamp(2.4rem,6vw,4.6rem)] leading-[0.95] font-semibold tracking-[-0.03em]">
            Um endereço.
            <span className="block">Múltiplas possibilidades.</span>
          </h2>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed font-light text-[#d8d2c7] md:text-xl">
            O Nexus Coupé conecta diferentes formas de viver a cidade em um só
            lugar. Residências contemporâneas, espaços corporativos e comércio
            integrado se encontram em um projeto que transforma a relação entre
            arquitetura, trabalho e cotidiano.
          </p>
        </div>
      </div>
      <div className="relative h-[78svh] overflow-hidden md:h-[88svh]">
        <img
          src="/media/conjunto.webp"
          alt="Fachada ampla do Nexus Coupé, com as duas torres sobre o mall e o paisagismo da avenida"
          width={1600}
          height={1092}
          loading="lazy"
          decoding="async"
          className="parallax-photo absolute inset-0 h-full w-full object-cover object-center"
        />
      </div>
    </section>
  );
}
