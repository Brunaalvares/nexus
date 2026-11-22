"use client";

import { useEffect, useRef, type CSSProperties } from "react";
import { gallery } from "@/lib/site";

export function FilmStrip() {
  const pin = useRef<HTMLElement>(null);
  const track = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = pin.current;
    const row = track.current;
    if (!node || !row) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let frame = 0;
    const onScroll = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(() => {
        frame = 0;
        const total = node.offsetHeight - window.innerHeight;
        const passed = Math.min(Math.max(-node.getBoundingClientRect().top, 0), Math.max(total, 0));
        const progress = total > 0 ? passed / total : 0;
        const shift = progress * (100 - 100 / gallery.length);
        row.style.transform = `translate3d(-${shift}%, 0, 0)`;
      });
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <section
      id="galeria"
      ref={pin}
      className="pin"
      style={{ "--frames": gallery.length } as CSSProperties}
    >
      <div className="pin-stage">
        <div ref={track} className="pin-track">
          {gallery.map((frame) => (
            <article key={frame.src} className="pin-frame">
              <img
                src={frame.src}
                alt={`${frame.kicker}: ${frame.title}`}
                width={1500}
                height={900}
                loading="lazy"
                decoding="async"
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#090909]/70 via-transparent to-[#090909]/15" />
              <div className="relative z-10 flex h-full items-end px-6 pb-14 md:px-16 md:pb-16">
                <div>
                  <p className="kicker">{frame.kicker}</p>
                  <h2 className="mt-2 text-lg font-light tracking-wide text-[#f4f1ea] md:text-2xl">
                    {frame.title}
                  </h2>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
