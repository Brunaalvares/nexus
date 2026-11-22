export function Finale() {
  return (
    <section className="relative min-h-[100svh] overflow-hidden bg-[#090909]">
      <img
        src="/media/noite.webp"
        alt="Perspectiva noturna da torre On Residence no Nexus Coupé"
        width={1500}
        height={768}
        loading="lazy"
        decoding="async"
        fetchPriority="low"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-[#090909]/45" />
      <div className="relative z-10 flex min-h-[100svh] flex-col items-center justify-center px-6 text-center">
        <p className="font-[family-name:var(--font-syne)] text-[clamp(2.8rem,9vw,7rem)] leading-[0.86] font-semibold tracking-[-0.04em]">
          NEXUS
          <span className="metal block">COUPÉ</span>
        </p>
        <p className="mt-8 text-lg font-light">Onde a cidade se conecta ao futuro.</p>
        <p className="mt-10 text-[0.72rem] tracking-[0.32em] text-[#c4a574] uppercase">
          Marcelo Alvares Imóveis
        </p>
      </div>
      <footer className="relative z-10 px-6 pb-8 text-center text-[0.68rem] leading-relaxed text-[#c9c2b6]">
        Perspectivas ilustrativas. Construção e incorporação: Ergus Engenharia.
        Gestão e planejamento dos processos de construção: Porsche Consulting.
        Comercialização: Marcelo Alvares Imóveis. Valores e disponibilidade sob
        consulta.
      </footer>
    </section>
  );
}
