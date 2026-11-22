import { FilmStrip } from "@/components/film-strip";

export function Reel() {
  return (
    <>
      <article id="conceito" className="shot bg-[#070707]">
        <div className="flex h-full flex-col justify-end px-6 pb-20 md:px-16 md:pb-24">
          <p className="kicker">Um novo conceito de viver a cidade</p>
          <h2 className="mt-5 max-w-3xl font-[family-name:var(--font-syne)] text-4xl leading-[0.95] font-semibold tracking-[-0.03em] md:text-6xl">
            Um endereço.
            <span className="block">Múltiplas possibilidades.</span>
          </h2>
          <p className="mt-6 max-w-xl text-base leading-relaxed font-light text-[#d8d2c7] md:text-lg">
            O Nexus Coupé conecta diferentes formas de viver a cidade em um só
            lugar. Residências contemporâneas, espaços corporativos e comércio
            integrado se encontram em um projeto que transforma a relação entre
            arquitetura, trabalho e cotidiano.
          </p>
        </div>
      </article>

      <FilmStrip />
    </>
  );
}
