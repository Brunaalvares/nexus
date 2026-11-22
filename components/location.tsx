import Image from "next/image";
import { address } from "@/lib/site";

export function Location() {
  const mapSrc = `https://www.openstreetmap.org/export/embed.html?bbox=${encodeURIComponent(address.mapBbox)}&layer=mapnik`;

  return (
    <section id="local" className="bg-[#090909] px-6 py-24 md:px-10 md:py-32">
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-12">
        <div className="reveal lg:col-span-5">
          <p className="kicker">Localização</p>
          <h2 className="mt-5 font-[family-name:var(--font-syne)] text-4xl leading-[0.95] font-semibold tracking-[-0.03em] md:text-6xl">
            Conectado ao ritmo da cidade.
          </h2>
          <p className="mt-8 text-lg leading-relaxed font-light text-[#d8d2c7]">
            O Nexus Coupé fica na {address.street}, no {address.neighborhood}. A
            implantação do complexo se abre para essa avenida, num trecho em que
            moradia, empresas, escolas e comércio já compartilham o mesmo dia.
          </p>
          <p className="mt-5 text-base leading-relaxed text-[#a39e94]">
            Tropical Shopping e o comércio do Renascença estão no entorno. A
            Avenida Litorânea fica a cerca de cinco minutos, pelas avenidas dos
            Holandeses, Colares Moreira, Ana Jansen e Jerônimo de Albuquerque.
          </p>
          <p className="mt-8 text-sm tracking-[0.14em] text-[#f4f1ea] uppercase">
            {address.street}
            <span className="mt-2 block tracking-[0.08em] text-[#c4a574] normal-case">
              {address.neighborhood} — {address.city}, {address.state}
            </span>
          </p>
        </div>
        <div className="lg:col-span-7">
          <figure className="relative aspect-[4/3] overflow-hidden">
            <Image
              src="/media/aerea.webp"
              alt="Fotografia aérea do Renascença, no eixo da Avenida Coronel Colares Moreira"
              fill
              sizes="(min-width: 1024px) 55vw, 100vw"
              className="object-cover"
            />
            <figcaption className="absolute right-0 bottom-0 left-0 bg-[#090909]/75 px-4 py-3 text-xs text-[#d8d2c7]">
              Vista aérea do Renascença. Imagem: Esri, Maxar, Earthstar Geographics.
            </figcaption>
          </figure>
        </div>
      </div>

      <div className="mx-auto mt-8 grid max-w-6xl gap-8 lg:grid-cols-2">
        <figure>
          <div className="relative aspect-[16/10] bg-[#111]">
            <Image
              src="/media/implantacao.webp"
              alt="Implantação do Nexus Coupé com frente para a Avenida Colares Moreira, indicando Lead Office, Open Design, On Residence e Nexus Mall"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-contain"
            />
          </div>
          <figcaption className="mt-3 text-xs text-[#8d877c]">
            Implantação do conjunto, com frente para a Avenida Colares Moreira.
          </figcaption>
        </figure>
        <div>
          <iframe
            title="Mapa da Avenida Coronel Colares Moreira no Renascença, São Luís"
            src={mapSrc}
            className="h-[360px] w-full border-0 grayscale md:h-full md:min-h-[420px]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
          <p className="mt-3 text-xs leading-relaxed text-[#8d877c]">
            O mapa situa a avenida no Renascença. O número do lote é confirmado no
            atendimento, junto com a matrícula do terreno.{" "}
            <a
              href={address.mapLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#c4a574] underline-offset-4 hover:underline"
            >
              Abrir o mapa
            </a>
            . © OpenStreetMap
          </p>
        </div>
      </div>
    </section>
  );
}
