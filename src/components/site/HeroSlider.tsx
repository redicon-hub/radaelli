import { useEffect, useState, useCallback, useId } from "react";
import { Link } from "@tanstack/react-router";
import { Reveal } from "./Reveal";
import { Arrow, Eyebrow } from "./ui";

export type HeroSlide = {
  id: string;
  eyebrow: string;
  title: React.ReactNode;
  description: string;
  image: string;
  imageAlt: string;
  primaryCta: { label: string; to: string };
  secondaryCta?: { label: string; to: string };
  badges?: string[];
};

export function HeroSlider({ slides, intervalMs = 7000 }: { slides: HeroSlide[]; intervalMs?: number }) {
  const [active, setActive] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [direction, setDirection] = useState<"next" | "prev">("next");
  const labelId = useId();

  const go = useCallback(
    (index: number, dir: "next" | "prev" = "next") => {
      setDirection(dir);
      setActive((prev) => {
        let next = index;
        if (next < 0) next = slides.length - 1;
        if (next >= slides.length) next = 0;
        return next;
      });
    },
    [slides.length],
  );

  useEffect(() => {
    if (slides.length <= 1 || isPaused) return;
    const timer = setInterval(() => go(active + 1, "next"), intervalMs);
    return () => clearInterval(timer);
  }, [active, go, intervalMs, isPaused, slides.length]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") go(active + 1, "next");
      if (e.key === "ArrowLeft") go(active - 1, "prev");
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [active, go]);

  const current = slides[active];

  return (
    <section
      aria-roledescription="carosello"
      aria-label="Hero principale"
      className="surface-dark relative isolate flex min-h-[92svh] items-end overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Slides */}
      {slides.map((slide, i) => {
        const isActive = i === active;
        const isPrev = i === active - 1 || (active === 0 && i === slides.length - 1);
        const isNext = i === active + 1 || (active === slides.length - 1 && i === 0);

        let transform = "translateX(100%)";
        let opacity = 0;
        let zIndex = 0;

        if (isActive) {
          transform = "translateX(0%)";
          opacity = 1;
          zIndex = 10;
        } else if (direction === "next" && isPrev) {
          transform = "translateX(-100%)";
          opacity = 0;
          zIndex = 0;
        } else if (direction === "prev" && isNext) {
          transform = "translateX(100%)";
          opacity = 0;
          zIndex = 0;
        } else if (direction === "next" && isNext) {
          transform = "translateX(100%)";
          opacity = 0;
          zIndex = 5;
        } else if (direction === "prev" && isPrev) {
          transform = "translateX(-100%)";
          opacity = 0;
          zIndex = 5;
        }

        return (
          <div
            key={slide.id}
            role="group"
            aria-roledescription="diapositiva"
            aria-hidden={!isActive}
            aria-labelledby={`${labelId}-${slide.id}`}
            className="absolute inset-0 transition-all duration-700 ease-out"
            style={{ transform, opacity, zIndex, transitionProperty: "transform, opacity" }}
          >
            <img
              src={slide.image}
              alt={slide.imageAlt}
              fetchPriority={i === 0 ? "high" : "auto"}
              className="absolute inset-0 -z-20 h-full w-full object-cover"
            />
            <div
              aria-hidden
              className="absolute inset-0 -z-10"
              style={{ background: "var(--gradient-hero)" }}
            />
          </div>
        );
      })}

      {/* Content */}
      <div className="container-x relative z-20 pb-16 pt-36 lg:pb-24">
        <div key={current.id} className="animate-fade-in-up">
          <Reveal>
            <Eyebrow>{current.eyebrow}</Eyebrow>
          </Reveal>
          <Reveal delay={80}>
            <h1
              id={`${labelId}-${current.id}`}
              className="h-hero mt-6 max-w-5xl text-offwhite"
            >
              {current.title}
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-7 max-w-2xl text-lg leading-relaxed text-softgrey">
              {current.description}
            </p>
          </Reveal>
          <Reveal delay={240}>
            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                to={current.primaryCta.to}
                className="inline-flex h-14 items-center justify-center bg-brand px-8 text-[0.82rem] font-extrabold uppercase tracking-[0.14em] text-carbon transition-colors hover:bg-brand-bright"
              >
                {current.primaryCta.label}
              </Link>
              {current.secondaryCta && (
                <Link
                  to={current.secondaryCta.to}
                  className="inline-flex h-14 items-center gap-3 px-8 text-[0.82rem] font-extrabold uppercase tracking-[0.14em] text-offwhite ring-1 ring-white/25 transition-colors hover:text-brand-bright hover:ring-brand"
                >
                  {current.secondaryCta.label}
                  <Arrow />
                </Link>
              )}
            </div>
          </Reveal>
          {current.badges && (
            <Reveal delay={320}>
              <ul className="mt-12 flex flex-wrap gap-x-10 gap-y-3 border-t border-white/15 pt-6 text-[0.72rem] font-extrabold uppercase tracking-[0.2em] text-softgrey">
                {current.badges.map((t) => (
                  <li key={t} className="flex items-center gap-2">
                    <span aria-hidden className="h-1.5 w-1.5 bg-brand" />
                    {t}
                  </li>
                ))}
              </ul>
            </Reveal>
          )}
        </div>

        {/* Controls */}
        {slides.length > 1 && (
          <div className="mt-10 flex items-center gap-6">
            <button
              type="button"
              aria-label="Diapositiva precedente"
              onClick={() => go(active - 1, "prev")}
              className="inline-flex h-12 w-12 items-center justify-center ring-1 ring-white/25 text-offwhite transition-colors hover:text-brand-bright hover:ring-brand"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                <path d="M19 12H5M12 19l-7-7 7-7" />
              </svg>
            </button>

            <div className="flex items-center gap-3" role="tablist" aria-label="Seleziona diapositiva">
              {slides.map((slide, i) => (
                <button
                  key={slide.id}
                  type="button"
                  role="tab"
                  aria-selected={i === active}
                  aria-label={`Vai a ${slide.eyebrow}`}
                  onClick={() => go(i, i > active ? "next" : "prev")}
                  className={
                    "h-2 transition-all duration-300 " +
                    (i === active
                      ? "w-10 bg-brand"
                      : "w-2 bg-white/40 hover:bg-white/70")
                  }
                />
              ))}
            </div>

            <button
              type="button"
              aria-label="Diapositiva successiva"
              onClick={() => go(active + 1, "next")}
              className="inline-flex h-12 w-12 items-center justify-center ring-1 ring-white/25 text-offwhite transition-colors hover:text-brand-bright hover:ring-brand"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
