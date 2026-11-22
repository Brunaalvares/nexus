"use client";

import { useEffect, useRef, useState } from "react";

export function CityMap({ src, title }: { src: string; title: string }) {
  const frame = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const node = frame.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) return;
        setActive(true);
        observer.disconnect();
      },
      { rootMargin: "160px" },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={frame} className="h-[360px] w-full bg-[#141414] md:h-full md:min-h-[420px]">
      {active ? (
        <iframe
          title={title}
          src={src}
          className="h-full w-full border-0 grayscale"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      ) : (
        <div className="flex h-full items-end p-4 text-xs tracking-[0.14em] text-[#8d877c] uppercase">
          Mapa do Renascença
        </div>
      )}
    </div>
  );
}
