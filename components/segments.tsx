import Image from "next/image";

const bands = [
  {
    index: "01",
    kicker: "Residencial",
    title: "Ergus Open Design e Ergus On Residence",
    text: "Apartamentos com diferentes metragens e configurações, atendendo a diversos estilos de vida.",
    extra:
      "Open Design, de 30,79 a 59,30 m²: studios, um e dois quartos. On Residence, de 80,38 a 95,84 m²: três quartos, com suítes conforme a planta.",
    image: "/media/on-residence.webp",
    alt: "Torre residencial On Residence, com varandas e jardineiras",
  },
  {
    index: "02",
    kicker: "Corporativo",
    title: "Ergus Lead Office",
    text: "Salas comerciais e espaços corporativos flexíveis.",
    extra:
      "Laje de 175,15 m², ocupada inteira ou dividida em até cinco salas de 29,32, 35,33 e 45,85 m². Foyer, sala de reunião, auditório e refeitório apoiam a rotina.",
    image: "/media/corporativo.webp",
    alt: "Volume do Lead Office e do Open Design no mesmo conjunto",
  },
  {
    index: "03",
    kicker: "Comercial",
    title: "Nexus Mall",
    text: "Lojas e espaços comerciais integrados ao empreendimento.",
    extra:
      "Lojas térreas com mezanino e uma unidade de restaurante. O comércio participa do mesmo chão de quem mora e de quem trabalha.",
    image: "/media/mall.webp",
    alt: "Térreo comercial do Nexus Mall, com vitrine contínua e palmeiras",
  },
];

export function Segments() {
  return (
    <section id="complexo" className="bg-[#090909]">
      <div className="mx-auto max-w-6xl px-6 pt-28 md:px-10">
        <p className="kicker reveal">Conheça o Nexus Coupé</p>
      </div>
      {bands.map((band, i) => (
        <article
          key={band.index}
          className="mx-auto grid max-w-6xl items-end gap-8 px-6 py-16 md:grid-cols-12 md:gap-12 md:px-10 md:py-24"
        >
          <div className={i % 2 === 1 ? "md:order-2 md:col-span-7" : "md:col-span-7"}>
            <div className="relative aspect-[16/11] overflow-hidden">
              <Image
                src={band.image}
                alt={band.alt}
                fill
                sizes="(min-width: 768px) 60vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>
          <div className={i % 2 === 1 ? "reveal md:order-1 md:col-span-5" : "reveal md:col-span-5"}>
            <p className="text-[0.72rem] tracking-[0.28em] text-[#8d877c]">{band.index}</p>
            <p className="kicker mt-4">{band.kicker}</p>
            <h2 className="mt-4 font-[family-name:var(--font-syne)] text-3xl leading-tight font-semibold tracking-[-0.03em] md:text-4xl">
              {band.title}
            </h2>
            <p className="mt-5 text-lg font-light text-[#f4f1ea]">{band.text}</p>
            <p className="mt-4 text-sm leading-relaxed text-[#a39e94]">{band.extra}</p>
          </div>
        </article>
      ))}
    </section>
  );
}
