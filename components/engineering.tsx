export function Engineering() {
  return (
    <section id="engenharia" className="border-t border-white/10 bg-[#090909] px-6 py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-6xl">
        <p className="kicker">Engenharia e inovação</p>
        <h2 className="mt-5 max-w-3xl font-[family-name:var(--font-syne)] text-4xl leading-[0.95] font-semibold tracking-[-0.03em] md:text-6xl">
          Quem constrói. Quem planeja.
        </h2>
        <div className="mt-16 grid gap-16 md:grid-cols-2">
          <article>
            <p className="text-[0.72rem] tracking-[0.28em] text-[#8d877c] uppercase">
              Construção e incorporação
            </p>
            <h3 className="mt-4 font-[family-name:var(--font-syne)] text-3xl">
              Ergus Engenharia
            </h3>
            <p className="mt-5 max-w-md text-base leading-relaxed font-light text-[#d8d2c7]">
              Construtora e incorporadora do Nexus Coupé. A Ergus responde pela
              obra e pelo empreendimento, num terreno de cerca de 10,5 mil m² no
              Renascença, no ano em que completa 25 anos. A previsão de entrega
              apresentada para o complexo é dezembro de 2030.
            </p>
          </article>
          <article>
            <p className="text-[0.72rem] tracking-[0.28em] text-[#8d877c] uppercase">
              Gestão e planejamento dos processos
            </p>
            <h3 className="mt-4 font-[family-name:var(--font-syne)] text-3xl">
              Porsche Consulting
            </h3>
            <p className="mt-5 max-w-md text-base leading-relaxed font-light text-[#d8d2c7]">
              Consultoria do Grupo Porsche. Atua na gestão e no planejamento dos
              processos de construção: método, previsibilidade e eficiência de
              obra. A assinatura de construção e de incorporação permanece com a
              Ergus Engenharia.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
