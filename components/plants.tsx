"use client";

import { useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  leadOffice,
  onResidence,
  openDesign,
  stores,
  type Interest,
  type Store,
  type Typology,
} from "@/lib/site";
import { cn } from "cn";

type Segment = "residencial" | "escritorios" | "lojas";
type Tower = "open" | "on";
type Level = "terreo" | "mezanino";

const segments: { id: Segment; label: string }[] = [
  { id: "residencial", label: "Residencial" },
  { id: "escritorios", label: "Escritórios" },
  { id: "lojas", label: "Lojas" },
];

export function Plants() {
  const [segment, setSegment] = useState<Segment>("residencial");
  const [tower, setTower] = useState<Tower>("open");
  const [typeId, setTypeId] = useState(openDesign[0].id);
  const [storeId, setStoreId] = useState(stores[0].id);
  const [level, setLevel] = useState<Level>("terreo");
  const [zoom, setZoom] = useState(false);

  const types = tower === "open" ? openDesign : onResidence;
  const currentType =
    (segment === "escritorios" ? leadOffice : types).find((item) => item.id === typeId) ??
    (segment === "escritorios" ? leadOffice[0] : types[0]);
  const store = stores.find((item) => item.id === storeId) ?? stores[0];

  const plate =
    segment === "lojas"
      ? level === "terreo"
        ? "/media/planta-mall-terreo.webp"
        : "/media/planta-mall-mezanino.webp"
      : currentType.plate;

  const interest: Interest =
    segment === "residencial" ? "residencial" : segment === "escritorios" ? "escritorios" : "lojas";

  const alt = useMemo(() => {
    if (segment === "lojas") {
      return level === "terreo"
        ? "Planta humanizada do térreo do Nexus Mall"
        : "Planta humanizada do mezanino do Nexus Mall";
    }
    return `Planta humanizada de ${currentType.name}, ${currentType.area}`;
  }, [segment, level, currentType]);

  function chooseSegment(next: Segment) {
    setSegment(next);
    setZoom(false);
    if (next === "residencial") setTypeId((tower === "open" ? openDesign : onResidence)[0].id);
    if (next === "escritorios") setTypeId(leadOffice[0].id);
  }

  function chooseTower(next: Tower) {
    setTower(next);
    setTypeId((next === "open" ? openDesign : onResidence)[0].id);
  }

  function requestInfo() {
    window.dispatchEvent(new CustomEvent("nexus-interest", { detail: interest }));
    document.getElementById("contato")?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <section id="plantas" className="bg-[#0c0c0c] px-6 py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-6xl">
        <p className="kicker">Plantas</p>
        <h2 className="mt-5 max-w-3xl font-[family-name:var(--font-syne)] text-4xl leading-[0.95] font-semibold tracking-[-0.03em] md:text-6xl">
          Escolha uma tipologia.
        </h2>
        <p className="mt-6 max-w-xl text-base font-light text-[#c9c2b6]">
          Tudo acontece nesta página. Residências e escritórios usam a metragem da
          tabela de setembro de 2026. As lojas seguem a prancha do mall. Valores e
          disponibilidade ficam para o atendimento.
        </p>

        <div className="mt-12 flex flex-wrap gap-x-8 gap-y-3 border-b border-white/10">
          {segments.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => chooseSegment(item.id)}
              className={cn(
                "pb-4 text-[0.78rem] tracking-[0.22em] uppercase",
                segment === item.id
                  ? "border-b border-[#c4a574] text-[#f4f1ea]"
                  : "text-[#8d877c]",
              )}
            >
              {item.label}
            </button>
          ))}
        </div>

        {segment === "residencial" ? (
          <div className="mt-8 flex gap-3">
            {(
              [
                ["open", "Open Design"],
                ["on", "On Residence"],
              ] as const
            ).map(([id, label]) => (
              <button
                key={id}
                type="button"
                onClick={() => chooseTower(id)}
                className={cn(
                  "border px-4 py-2 text-[0.72rem] tracking-[0.16em] uppercase",
                  tower === id
                    ? "border-[#f4f1ea] text-[#f4f1ea]"
                    : "border-white/15 text-[#8d877c]",
                )}
              >
                {label}
              </button>
            ))}
          </div>
        ) : null}

        {segment === "lojas" ? (
          <div className="mt-8 flex gap-3">
            {(
              [
                ["terreo", "Térreo"],
                ["mezanino", "Mezanino"],
              ] as const
            ).map(([id, label]) => (
              <button
                key={id}
                type="button"
                onClick={() => setLevel(id)}
                className={cn(
                  "border px-4 py-2 text-[0.72rem] tracking-[0.16em] uppercase",
                  level === id
                    ? "border-[#f4f1ea] text-[#f4f1ea]"
                    : "border-white/15 text-[#8d877c]",
                )}
              >
                {label}
              </button>
            ))}
          </div>
        ) : null}

        <div className="mt-10 grid items-start gap-10 lg:grid-cols-[220px_1fr]">
          <div className="flex flex-col">
            {segment === "lojas"
              ? stores.map((item) => (
                  <TypeButton
                    key={item.id}
                    active={item.id === store.id}
                    label={`${item.name} · ${item.area}`}
                    onClick={() => setStoreId(item.id)}
                  />
                ))
              : (segment === "escritorios" ? leadOffice : types).map((item) => (
                  <TypeButton
                    key={item.id}
                    active={item.id === currentType.id}
                    label={`${item.name} · ${item.area}`}
                    onClick={() => setTypeId(item.id)}
                  />
                ))}
          </div>

          <div>
            <div className="relative overflow-hidden bg-[#f6f3ec]">
              <div className="relative aspect-[16/10] md:aspect-[16/9]">
                <img
                  src={plate}
                  alt={alt}
                  width={1600}
                  height={800}
                  loading="lazy"
                  decoding="async"
                  className="absolute inset-0 h-full w-full object-contain"
                />
              </div>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <Button
                type="button"
                variant="outline"
                className="h-11 rounded-none border-white/25 bg-transparent px-5 text-[0.7rem] tracking-[0.16em] text-[#f4f1ea] uppercase hover:bg-white hover:text-[#141414]"
                onClick={() => setZoom(true)}
              >
                Ampliar planta
              </Button>
              <Button
                type="button"
                className="h-11 rounded-none bg-[#f4f1ea] px-5 text-[0.7rem] tracking-[0.16em] text-[#141414] uppercase hover:bg-[#c4a574]"
                onClick={requestInfo}
              >
                Solicitar informações
              </Button>
            </div>

            <Ficha
              segment={segment}
              tower={tower}
              type={currentType}
              store={store}
              level={level}
            />
          </div>
        </div>

        <p className="mt-12 max-w-3xl text-xs leading-relaxed text-[#8d877c]">
          Plantas humanizadas ilustrativas, sujeitas ao memorial descritivo. Móveis e
          objetos não integram a unidade. Quando a prancha da fase de reserva grafa
          uma área diferente, a ficha usa a metragem da tabela de setembro de 2026.
        </p>
      </div>

      {zoom ? (
        <Dialog open={zoom} onOpenChange={setZoom}>
          <DialogContent className="max-h-[92svh] overflow-auto bg-[#f6f3ec] sm:max-w-6xl">
            <DialogTitle className="text-[#161616]">{alt}</DialogTitle>
            <DialogDescription className="text-[#5c574f]">
              Prancha em tamanho maior. A metragem comercial está na ficha.
            </DialogDescription>
            <img
              src={plate}
              alt={alt}
              width={1600}
              height={800}
              decoding="async"
              className="h-auto w-full"
            />
          </DialogContent>
        </Dialog>
      ) : null}
    </section>
  );
}

function TypeButton({
  active,
  label,
  onClick,
}: {
  active: boolean;
  label: string;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "shrink-0 px-1 py-3 text-left text-sm lg:border-l lg:px-4",
        active
          ? "text-[#f4f1ea] lg:border-[#c4a574]"
          : "text-[#8d877c] lg:border-white/10",
      )}
    >
      {label}
    </button>
  );
}

function Ficha({
  segment,
  tower,
  type,
  store,
  level,
}: {
  segment: Segment;
  tower: Tower;
  type: Typology;
  store: Store;
  level: Level;
}) {
  if (segment === "lojas") {
    return (
      <div className="mt-8 max-w-xl">
        <p className="kicker">Nexus Mall</p>
        <h3 className="mt-3 font-[family-name:var(--font-syne)] text-3xl">
          {store.name} · {store.area}
        </h3>
        <p className="mt-3 text-[#d8d2c7]">
          Loja térrea com mezanino
          {store.name === "Restaurante" ? ", na unidade de maior porte" : ""}.
        </p>
        <dl className="mt-6 grid grid-cols-2 gap-6 text-sm">
          <div>
            <dt className="text-[#8d877c]">Térreo</dt>
            <dd className="mt-1 text-lg">{store.terreo}</dd>
          </div>
          <div>
            <dt className="text-[#8d877c]">Mezanino</dt>
            <dd className="mt-1 text-lg">{store.mezanino}</dd>
          </div>
        </dl>
        <p className="mt-4 text-sm text-[#a39e94]">
          Planta em tela: {level === "terreo" ? "térreo" : "mezanino"}. Uma vaga por
          loja, conforme a configuração apresentada.
        </p>
      </div>
    );
  }

  const product =
    segment === "escritorios"
      ? "Ergus Lead Office"
      : tower === "open"
        ? "Ergus Open Design"
        : "Ergus On Residence";

  return (
    <div className="mt-8 max-w-xl">
      <p className="kicker">{product}</p>
      <h3 className="mt-3 font-[family-name:var(--font-syne)] text-3xl">
        {type.area}
      </h3>
      <p className="mt-3 text-lg font-light text-[#f4f1ea]">{type.configuration}</p>
      <ul className="mt-5 space-y-2 text-sm text-[#c9c2b6]">
        {type.details.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      {type.note ? <p className="mt-4 text-sm text-[#8d877c]">{type.note}</p> : null}
    </div>
  );
}
