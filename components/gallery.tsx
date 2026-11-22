import Image from "next/image";
import { gallery } from "@/lib/site";

export function Gallery() {
  return (
    <section id="galeria" aria-label="Galeria do Nexus Coupé">
      {gallery.map((frame) => (
        <article key={frame.src} className="relative min-h-[100svh] overflow-hidden">
          <Image
            src={frame.src}
            alt={`${frame.kicker}: ${frame.title}`}
            fill
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#090909] via-[#090909]/20 to-[#090909]/15" />
          <div className="relative z-10 flex min-h-[100svh] items-end px-6 pb-16 md:px-16 md:pb-20">
            <div className="reveal max-w-xl">
              <p className="kicker">{frame.kicker}</p>
              <h2 className="mt-4 font-[family-name:var(--font-syne)] text-4xl leading-none font-semibold tracking-[-0.03em] md:text-6xl">
                {frame.title}
              </h2>
              <p className="mt-5 max-w-md text-base font-light text-[#e7e1d6] md:text-lg">
                {frame.text}
              </p>
            </div>
          </div>
        </article>
      ))}
    </section>
  );
}
