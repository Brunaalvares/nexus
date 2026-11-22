import { gallery } from "@/lib/site";

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

      {gallery.map((frame, index) => (
          <article key={frame.src} id={index === 0 ? "galeria" : undefined} className="shot">
            <img
              src={frame.src}
              alt={`${frame.kicker}: ${frame.title}`}
              width={1500}
              height={900}
              loading="lazy"
              decoding="async"
              className="shot-photo absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#090909]/80 via-transparent to-[#090909]/25" />
            <div className="relative z-10 flex h-full items-end px-6 pb-16 md:px-16 md:pb-20">
              <div className="max-w-md">
                <p className="kicker">{frame.kicker}</p>
                <h2 className="mt-3 font-[family-name:var(--font-syne)] text-3xl leading-none font-semibold tracking-[-0.03em] md:text-5xl">
                  {frame.title}
                </h2>
                <p className="mt-4 text-sm leading-relaxed font-light text-[#f4f1ea]/90 md:text-base">
                  {frame.text}
                </p>
              </div>
            </div>
          </article>
      ))}
    </>
  );
}
