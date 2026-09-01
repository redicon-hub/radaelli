/**
 * RADAELLI — "PRECISIONE INVISIBILE"
 * Sistema di componenti firma: scanner, linee di riflessione PDR,
 * tipografia XXL, storytelling sticky, before/after, timeline segnale.
 * Tutte le animazioni usano solo transform/opacity + IntersectionObserver.
 */
import { Link } from "@tanstack/react-router";
import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type ReactNode,
  type RefObject,
} from "react";
import { business } from "@/lib/site";
import { cn } from "@/lib/utils";
import { Arrow } from "./ui";

/* ------------------------------------------------------------------ */
/* Utilities                                                           */
/* ------------------------------------------------------------------ */

/** Progresso 0→1 dell'elemento mentre attraversa la viewport. */
export function useScrollProgress<T extends HTMLElement>(ref: RefObject<T | null>) {
  const [p, setP] = useState(0);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let raf = 0;
    const compute = () => {
      raf = 0;
      const r = el.getBoundingClientRect();
      const vh = window.innerHeight || 1;
      const total = r.height + vh;
      const value = (vh - r.top) / total;
      setP(Math.min(1, Math.max(0, value)));
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(compute);
    };
    compute();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [ref]);
  return p;
}

/** Micro annotazione tecnica editoriale. */
export function TechLabel({
  children,
  className,
  tick = true,
}: {
  children: ReactNode;
  className?: string;
  tick?: boolean;
}) {
  return (
    <span className={cn("tech-label", className)}>
      {tick && <span aria-hidden className="tech-tick" />}
      {children}
    </span>
  );
}

/** Griglia tecnica di fondo (linee di coordinate). */
export function TechGrid({ className }: { className?: string }) {
  return <div aria-hidden className={cn("tech-grid pointer-events-none absolute inset-0", className)} />;
}

/** Linee di riflessione PDR: deformate → perfettamente parallele in scroll. */
export function ReflectionLines({
  progress = 1,
  count = 7,
  className,
}: {
  progress?: number;
  count?: number;
  className?: string;
}) {
  const lines = Array.from({ length: count });
  return (
    <svg
      aria-hidden
      viewBox="0 0 1200 700"
      preserveAspectRatio="none"
      className={cn("pointer-events-none absolute inset-0 h-full w-full", className)}
    >
      {lines.map((_, i) => {
        const y = ((i + 1) / (count + 1)) * 700;
        // ampiezza deformazione che si annulla con il progresso
        const amp = (1 - progress) * (34 + (i % 3) * 12);
        const dir = i % 2 === 0 ? 1 : -1;
        const d = `M -20 ${y} C 300 ${y + amp * dir}, 520 ${y - amp * dir}, 760 ${y + amp * 0.6 * dir} S 1080 ${y}, 1220 ${y}`;
        return (
          <path
            key={i}
            d={d}
            fill="none"
            stroke="white"
            strokeWidth={1}
            opacity={0.14 + (i === Math.floor(count / 2) ? 0.14 : 0)}
          />
        );
      })}
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/* HERO — scanner di superficie                                        */
/* ------------------------------------------------------------------ */

export function LabHero({
  image,
  imageAlt,
  index,
  title,
  intro,
  labels,
  primary,
  secondary,
  height = "min-h-[100svh]",
  ghost,
}: {
  image: string;
  imageAlt: string;
  index: string;
  title: ReactNode;
  intro?: string;
  labels: string[];
  primary?: { label: string; to: string };
  secondary?: { label: string; to: string };
  height?: string;
  ghost?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const p = useScrollProgress(ref);

  return (
    <section
      ref={ref}
      className={cn(
        "surface-dark relative isolate flex flex-col justify-end overflow-hidden",
        height,
      )}
    >
      <img
        src={image}
        alt={imageAlt}
        fetchPriority="high"
        className="absolute inset-0 -z-30 h-full w-full object-cover"
        style={{ transform: `scale(${1.06 - p * 0.06})` }}
      />
      <div
        aria-hidden
        className="absolute inset-0 -z-20"
        style={{ background: "var(--gradient-hero)" }}
      />
      <TechGrid className="-z-10 opacity-40" />
      <ReflectionLines progress={Math.min(1, p * 2.6)} className="-z-10" />
      <div aria-hidden className="scanline -z-10" />

      {ghost && (
        <span aria-hidden className="ghost-word -z-10 bottom-[8%] left-[-2%]">
          {ghost}
        </span>
      )}

      {/* micro-UI engineering */}
      <div className="container-x pointer-events-none absolute inset-x-0 top-24 z-10 hidden justify-between lg:flex">
        <TechLabel>{labels[0]}</TechLabel>
        <TechLabel>{labels[1]}</TechLabel>
      </div>

      <div className="container-x relative z-10 pb-14 pt-40 lg:pb-20">
        <div className="flex items-start gap-6">
          <span
            aria-hidden
            className="hidden shrink-0 pt-3 font-[family-name:var(--font-display)] text-sm font-extrabold tracking-[0.3em] text-brand lg:block"
          >
            {index}
          </span>
          <div className="min-w-0">
            <h1 className="h-xxl text-offwhite">{title}</h1>
            {intro && (
              <p className="mt-8 max-w-xl text-[1.05rem] leading-relaxed text-softgrey">
                {intro}
              </p>
            )}
            {(primary || secondary) && (
              <div className="mt-10 flex flex-wrap items-center gap-3">
                {primary && (
                  <Link to={primary.to} className="btn-signal">
                    {primary.label}
                    <Arrow className="h-3.5 w-3.5" />
                  </Link>
                )}
                {secondary && (
                  <Link to={secondary.to} className="btn-wire">
                    {secondary.label}
                  </Link>
                )}
              </div>
            )}
          </div>
        </div>

        <div className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-3 border-t border-white/12 pt-5">
          {labels.slice(2).map((l) => (
            <TechLabel key={l}>{l}</TechLabel>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Statement fullscreen — outline → filled                             */
/* ------------------------------------------------------------------ */

export function Statement({
  lines,
  kicker,
  note,
  image,
  imageAlt,
  cta,
  dark = true,
}: {
  lines: string[];
  kicker?: string;
  note?: ReactNode;
  image?: string;
  imageAlt?: string;
  cta?: { label: string; to: string };
  dark?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const p = useScrollProgress(ref);

  return (
    <section
      ref={ref}
      className={cn(
        "relative isolate flex min-h-[92svh] items-center overflow-hidden",
        dark && "surface-dark",
      )}
    >
      {image && (
        <>
          <img
            src={image}
            alt={imageAlt ?? ""}
            loading="lazy"
            className="absolute inset-0 -z-20 h-full w-full object-cover"
            style={{
              opacity: 0.15 + Math.min(0.55, p * 0.9),
              transform: `scale(${1.12 - p * 0.1})`,
            }}
          />
          <div
            aria-hidden
            className="absolute inset-0 -z-10"
            style={{ background: "var(--gradient-hero)" }}
          />
        </>
      )}
      <TechGrid className="-z-10 opacity-30" />

      <div className="container-x relative z-10 py-28">
        {kicker && <TechLabel className="mb-10">{kicker}</TechLabel>}
        <h2 className="h-xxl max-w-6xl">
          {lines.map((l, i) => {
            const shown = p > 0.18 + i * 0.07;
            return (
              <span
                key={l}
                className={cn(
                  "block transition-all duration-700",
                  shown ? "text-outline-fill" : "text-outline",
                )}
                style={{
                  transform: shown ? "none" : "translate3d(0,14px,0)",
                  transitionDelay: `${i * 70}ms`,
                }}
              >
                {l}
              </span>
            );
          })}
        </h2>
        {note && (
          <div className="mt-12 max-w-md border-l-2 border-brand pl-6 text-sm leading-relaxed text-softgrey">
            {note}
          </div>
        )}
        {cta && (
          <Link to={cta.to} className="btn-signal mt-12">
            {cta.label}
            <Arrow className="h-3.5 w-3.5" />
          </Link>
        )}
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* THE PDR METHOD — diagramma di superficie                            */
/* ------------------------------------------------------------------ */

const pdrStates = [
  {
    code: "01",
    label: "Deformation",
    it: "La grandine deforma la lamiera: la vernice resta integra, la superficie no.",
    amp: 1,
    tool: 0,
  },
  {
    code: "02",
    label: "Analysis",
    it: "Le linee di riflessione rivelano profondità, diametro e tensione di ogni bollo.",
    amp: 0.85,
    tool: 0.2,
  },
  {
    code: "03",
    label: "Pressure",
    it: "Leve dedicate agiscono dal retro del pannello con micro-pressioni calibrate.",
    amp: 0.35,
    tool: 1,
  },
  {
    code: "04",
    label: "Restored surface",
    it: "La superficie torna planare. Vernice originale preservata, nessuno stucco.",
    amp: 0,
    tool: 0.15,
  },
];

export function PdrMethod() {
  const ref = useRef<HTMLDivElement>(null);
  const p = useScrollProgress(ref);
  const [manual, setManual] = useState<number | null>(null);
  const auto = Math.min(3, Math.floor(Math.max(0, (p - 0.18) / 0.16)));
  const active = manual ?? Math.max(0, auto);
  const state = pdrStates[active]!;

  return (
    <section ref={ref} className="surface-dark relative overflow-hidden py-24 lg:py-36">
      <TechGrid className="opacity-40" />
      <div className="container-x relative">
        <div className="flex flex-col gap-6 border-b border-white/12 pb-8 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <TechLabel>Method / paintless dent repair</TechLabel>
            <h2 className="h-section mt-6 text-offwhite">
              Dent <span className="text-brand">→</span> Zero
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-mutedgrey">
            Quattro stati della stessa superficie. Nessuno stucco, nessuna
            riverniciatura quando la tecnica è applicabile.
          </p>
        </div>

        <div className="mt-14 grid gap-12 lg:grid-cols-[1.25fr_0.75fr] lg:gap-16">
          {/* diagramma */}
          <div className="relative">
            <svg
              viewBox="0 0 640 360"
              className="w-full"
              role="img"
              aria-label={`Stato ${state.code}: ${state.label}`}
            >
              <defs>
                <linearGradient id="panel" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="oklch(0.30 0.008 152)" />
                  <stop offset="100%" stopColor="oklch(0.20 0.006 152)" />
                </linearGradient>
              </defs>
              <rect x="0" y="0" width="640" height="360" fill="url(#panel)" />
              {Array.from({ length: 9 }).map((_, i) => {
                const y = 40 + i * 35;
                const a = state.amp * (26 - Math.abs(i - 4) * 4);
                const d = `M 0 ${y} C 180 ${y}, 240 ${y + a}, 320 ${y + a} S 460 ${y}, 640 ${y}`;
                return (
                  <path
                    key={i}
                    d={d}
                    fill="none"
                    stroke={i === 4 ? "var(--brand-bright)" : "white"}
                    strokeWidth={i === 4 ? 1.6 : 1}
                    opacity={i === 4 ? 0.9 : 0.22}
                    style={{ transition: "d 600ms cubic-bezier(.16,1,.3,1)" }}
                  />
                );
              })}
              {/* utensile PDR */}
              <g
                style={{
                  opacity: state.tool,
                  transition: "opacity 500ms ease, transform 600ms cubic-bezier(.16,1,.3,1)",
                  transform: `translate(0px, ${(1 - state.tool) * 18}px)`,
                }}
              >
                <line x1="320" y1="360" x2="320" y2="180" stroke="var(--brand-bright)" strokeWidth="2" />
                <circle cx="320" cy="176" r="6" fill="var(--brand-bright)" />
                <circle cx="320" cy="176" r="16" fill="none" stroke="var(--brand-bright)" strokeWidth="1" opacity="0.45" />
              </g>
              <text x="16" y="26" fill="white" opacity="0.4" fontSize="11" letterSpacing="3">
                SURFACE CONTROL / 45°28′
              </text>
            </svg>
            <div className="mt-6 h-px w-full bg-white/12">
              <div
                className="h-px bg-brand transition-all duration-500"
                style={{ width: `${((active + 1) / 4) * 100}%` }}
              />
            </div>
          </div>

          {/* stati */}
          <ol className="flex flex-col">
            {pdrStates.map((s, i) => {
              const on = i === active;
              return (
                <li key={s.code}>
                  <button
                    type="button"
                    onClick={() => setManual(i)}
                    aria-current={on}
                    className={cn(
                      "flex w-full gap-5 border-t border-white/12 py-6 text-left transition-colors last:border-b",
                      on ? "text-offwhite" : "text-mutedgrey hover:text-softgrey",
                    )}
                  >
                    <span
                      className={cn(
                        "font-[family-name:var(--font-display)] text-2xl font-extrabold tabular-nums transition-colors",
                        on ? "text-brand" : "text-white/25",
                      )}
                    >
                      {s.code}
                    </span>
                    <span className="min-w-0">
                      <span className="block text-[0.78rem] font-extrabold uppercase tracking-[0.22em]">
                        {s.label}
                      </span>
                      <span
                        className={cn(
                          "grid transition-all duration-500",
                          on ? "mt-3 grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
                        )}
                      >
                        <span className="overflow-hidden text-sm leading-relaxed text-softgrey">
                          {s.it}
                        </span>
                      </span>
                    </span>
                  </button>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Sticky storytelling                                                 */
/* ------------------------------------------------------------------ */

export type StickyStep = { code: string; title: string; text: string; image: string };

export function StickyProcess({
  kicker,
  title,
  steps,
}: {
  kicker: string;
  title: ReactNode;
  steps: StickyStep[];
}) {
  const [active, setActive] = useState(0);
  const refs = useRef<(HTMLLIElement | null)[]>([]);

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            const i = refs.current.indexOf(e.target as HTMLLIElement);
            if (i >= 0) setActive(i);
          }
        }
      },
      { rootMargin: "-45% 0px -45% 0px" },
    );
    refs.current.forEach((el) => el && io.observe(el));
    return () => io.disconnect();
  }, [steps.length]);

  return (
    <section className="surface-dark relative py-24 lg:py-32">
      <div className="container-x">
        <div className="border-b border-white/12 pb-8">
          <TechLabel>{kicker}</TechLabel>
          <h2 className="h-section mt-6 max-w-3xl text-offwhite">{title}</h2>
        </div>

        <div className="mt-12 grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="hidden lg:block">
            <div className="sticky top-28 aspect-[4/5] overflow-hidden bg-graphite">
              {steps.map((s, i) => (
                <img
                  key={s.image + i}
                  src={s.image}
                  alt={s.title}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover transition-all duration-700"
                  style={{
                    opacity: i === active ? 1 : 0,
                    transform: i === active ? "scale(1)" : "scale(1.05)",
                  }}
                />
              ))}
              <div aria-hidden className="scanline" />
              <div className="absolute inset-x-0 bottom-0 flex items-center justify-between p-5">
                <TechLabel className="text-offwhite">{steps[active]?.code}</TechLabel>
                <TechLabel className="text-offwhite" tick={false}>
                  {String(active + 1).padStart(2, "0")} / {String(steps.length).padStart(2, "0")}
                </TechLabel>
              </div>
            </div>
          </div>

          <ol className="flex flex-col">
            {steps.map((s, i) => (
              <li
                key={s.code}
                ref={(el) => {
                  refs.current[i] = el;
                }}
                className={cn(
                  "border-t border-white/12 py-10 transition-opacity duration-500 last:border-b lg:py-16",
                  i === active ? "opacity-100" : "lg:opacity-45",
                )}
              >
                <span className="flex items-baseline gap-4">
                  <span
                    className={cn(
                      "font-[family-name:var(--font-display)] text-4xl font-extrabold tabular-nums transition-colors lg:text-5xl",
                      i === active ? "text-brand" : "text-white/20",
                    )}
                  >
                    {s.code}
                  </span>
                  <h3 className="h-card text-offwhite">{s.title}</h3>
                </span>
                <p className="mt-4 max-w-md text-[0.98rem] leading-relaxed text-softgrey">
                  {s.text}
                </p>
                <img
                  src={s.image}
                  alt={s.title}
                  loading="lazy"
                  className="mt-6 aspect-[16/10] w-full object-cover lg:hidden"
                />
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Before / After                                                      */
/* ------------------------------------------------------------------ */

export function BeforeAfter({
  before,
  after,
  beforeAlt,
  afterAlt,
  className,
}: {
  before: string;
  after: string;
  beforeAlt: string;
  afterAlt: string;
  className?: string;
}) {
  const [pos, setPos] = useState(50);
  const box = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const move = useCallback((clientX: number) => {
    const el = box.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    setPos(Math.min(100, Math.max(0, ((clientX - r.left) / r.width) * 100)));
  }, []);

  useEffect(() => {
    const onMove = (e: PointerEvent) => dragging.current && move(e.clientX);
    const onUp = () => (dragging.current = false);
    window.addEventListener("pointermove", onMove);
    window.addEventListener("pointerup", onUp);
    return () => {
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerup", onUp);
    };
  }, [move]);

  return (
    <div
      ref={box}
      className={cn("relative isolate select-none overflow-hidden bg-graphite", className)}
      onPointerDown={(e) => {
        dragging.current = true;
        move(e.clientX);
      }}
      data-cursor="compare"
    >
      <img src={after} alt={afterAlt} loading="lazy" className="h-full w-full object-cover" />
      <div
        className="absolute inset-0"
        style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
      >
        <img src={before} alt={beforeAlt} loading="lazy" className="h-full w-full object-cover" />
      </div>

      <span className="pointer-events-none absolute left-5 top-5">
        <TechLabel className="text-offwhite">Before / danno</TechLabel>
      </span>
      <span className="pointer-events-none absolute right-5 top-5">
        <TechLabel className="text-offwhite" tick={false}>
          After / ripristino
        </TechLabel>
      </span>

      <div
        className="pointer-events-none absolute inset-y-0 z-10 w-px bg-brand"
        style={{ left: `${pos}%` }}
      >
        <span className="absolute left-1/2 top-1/2 grid h-14 w-14 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-brand bg-carbon/70 backdrop-blur-sm">
          <svg viewBox="0 0 24 24" className="h-5 w-5 text-brand" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M9 6l-5 6 5 6M15 6l5 6-5 6" />
          </svg>
        </span>
      </div>

      <input
        type="range"
        min={0}
        max={100}
        value={pos}
        onChange={(e) => setPos(Number(e.target.value))}
        aria-label="Confronta prima e dopo"
        className="absolute inset-x-0 bottom-0 z-20 h-10 w-full cursor-ew-resize opacity-0"
      />
      <span className="pointer-events-none absolute inset-x-0 bottom-5 text-center">
        <TechLabel className="text-offwhite" tick={false}>
          Drag to compare
        </TechLabel>
      </span>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Timeline segnale (funnel grandine)                                  */
/* ------------------------------------------------------------------ */

export function SignalTimeline({
  steps,
}: {
  steps: { code: string; title: string; text: string }[];
}) {
  const ref = useRef<HTMLDivElement>(null);
  const p = useScrollProgress(ref);
  const fill = Math.min(1, Math.max(0, (p - 0.18) / 0.5));

  return (
    <div ref={ref} className="relative">
      {/* linea verticale mobile / orizzontale desktop */}
      <div aria-hidden className="absolute left-[13px] top-0 h-full w-px bg-white/12 lg:left-0 lg:top-[13px] lg:h-px lg:w-full">
        <div
          className="h-full w-px bg-brand transition-all duration-300 lg:h-px lg:w-full"
          style={{
            height: `${fill * 100}%`,
            width: "100%",
            ...(typeof window !== "undefined" && window.innerWidth >= 1024
              ? { width: `${fill * 100}%`, height: "1px" }
              : {}),
          }}
        />
      </div>

      <ol className="grid gap-10 lg:grid-cols-6 lg:gap-6">
        {steps.map((s, i) => {
          const on = fill * steps.length > i;
          return (
            <li key={s.code} className="relative pl-12 lg:pl-0 lg:pt-12">
              <span
                aria-hidden
                className={cn(
                  "absolute left-0 top-1 h-[27px] w-[27px] border transition-all duration-500 lg:left-0 lg:top-0",
                  on ? "border-brand bg-brand/20" : "border-white/20 bg-transparent",
                )}
              >
                <span
                  className={cn(
                    "absolute inset-[9px] transition-colors duration-500",
                    on ? "bg-brand" : "bg-white/20",
                  )}
                />
              </span>
              <span
                className={cn(
                  "block font-[family-name:var(--font-display)] text-3xl font-extrabold tabular-nums transition-colors duration-500",
                  on ? "text-brand" : "text-white/20",
                )}
              >
                {s.code}
              </span>
              <h3 className="mt-3 text-[0.8rem] font-extrabold uppercase tracking-[0.18em] text-offwhite">
                {s.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-mutedgrey">{s.text}</p>
            </li>
          );
        })}
      </ol>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Indice servizi editoriale                                           */
/* ------------------------------------------------------------------ */

export function ServiceIndex({
  items,
}: {
  items: { code: string; kicker: string; title: string; text: string; to: string; image: string }[];
}) {
  return (
    <ol>
      {items.map((s, i) => (
        <li key={s.to} className="group border-t border-current/15 last:border-b">
          <Link
            to={s.to}
            className="relative grid items-center gap-6 py-10 lg:grid-cols-[6rem_1fr_auto] lg:gap-10 lg:py-14"
          >
            <span className="font-[family-name:var(--font-display)] text-5xl font-extrabold tabular-nums text-current/20 transition-colors group-hover:text-brand lg:text-6xl">
              {s.code}
            </span>
            <span className="min-w-0">
              <TechLabel>{s.kicker}</TechLabel>
              <span className="mt-3 block font-[family-name:var(--font-display)] text-[clamp(1.9rem,4.4vw,3.6rem)] font-extrabold uppercase leading-[0.95] tracking-[-0.03em] transition-transform duration-500 lg:group-hover:translate-x-3">
                {s.title}
              </span>
              <span className="mt-4 block max-w-lg text-sm leading-relaxed text-muted-foreground">
                {s.text}
              </span>
            </span>
            <span className="hidden h-40 w-64 shrink-0 overflow-hidden bg-graphite lg:block">
              <img
                src={s.image}
                alt=""
                aria-hidden
                loading="lazy"
                className="h-full w-full object-cover opacity-70 transition-all duration-700 group-hover:scale-105 group-hover:opacity-100"
              />
            </span>
            <img
              src={s.image}
              alt=""
              aria-hidden
              loading="lazy"
              className={cn("aspect-[16/9] w-full object-cover lg:hidden", i % 2 ? "" : "")}
            />
          </Link>
        </li>
      ))}
    </ol>
  );
}

/* ------------------------------------------------------------------ */
/* Diagramma di servizio: un solo referente                            */
/* ------------------------------------------------------------------ */

export function OneContactDiagram({
  branches = ["Assicurazione", "Riparazione PDR", "Auto di cortesia"],
}: {
  branches?: string[];
}) {
  return (
    <div className="relative border border-current/15 p-8 lg:p-12">
      <TechLabel className="absolute -top-[0.6rem] left-6 bg-background px-3">
        One problem · one contact
      </TechLabel>
      <div className="grid items-center gap-8 lg:grid-cols-[auto_1fr] lg:gap-14">
        <div className="flex items-center gap-6 lg:flex-col lg:items-start">
          <div>
            <span className="block text-[0.68rem] font-extrabold uppercase tracking-[0.22em] text-muted-foreground">
              Cliente
            </span>
            <span className="mt-1 block font-[family-name:var(--font-display)] text-2xl font-extrabold uppercase">
              Tu
            </span>
          </div>
          <span aria-hidden className="h-px w-10 bg-brand lg:h-10 lg:w-px" />
          <div>
            <span className="block text-[0.68rem] font-extrabold uppercase tracking-[0.22em] text-brand">
              Referente unico
            </span>
            <span className="mt-1 block font-[family-name:var(--font-display)] text-2xl font-extrabold uppercase">
              Radaelli
            </span>
          </div>
        </div>
        <ul className="grid gap-px bg-current/15 sm:grid-cols-3">
          {branches.map((b, i) => (
            <li key={b} className="bg-background p-6">
              <span className="text-[0.68rem] font-extrabold uppercase tracking-[0.22em] text-brand">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="mt-3 block text-[0.95rem] font-extrabold uppercase tracking-[0.04em]">
                {b}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Gallery orizzontale con snap                                        */
/* ------------------------------------------------------------------ */

export function RailGallery({
  images,
  label = "Drag / scroll",
}: {
  images: { src: string; alt: string }[];
  label?: string;
}) {
  return (
    <div>
      <div className="mb-4 flex justify-end">
        <TechLabel tick={false}>{label}</TechLabel>
      </div>
      <div
        className="no-scrollbar -mx-5 flex snap-x snap-mandatory gap-3 overflow-x-auto px-5 lg:mx-0 lg:px-0"
        data-cursor="drag"
      >
        {images.map((img) => (
          <figure
            key={img.src}
            className="relative w-[82vw] shrink-0 snap-start overflow-hidden bg-graphite sm:w-[52vw] lg:w-[38vw]"
          >
            <img
              src={img.src}
              alt={img.alt}
              loading="lazy"
              className="aspect-[4/3] w-full object-cover"
            />
          </figure>
        ))}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* CTA rapida WhatsApp                                                 */
/* ------------------------------------------------------------------ */

export function QuickWhatsapp({ className }: { className?: string }) {
  return (
    <div className={cn("flex flex-col gap-4 border border-current/20 p-6 sm:flex-row sm:items-center sm:justify-between", className)}>
      <div>
        <TechLabel>Non vuoi compilare il form?</TechLabel>
        <p className="mt-3 font-[family-name:var(--font-display)] text-xl font-extrabold uppercase leading-tight">
          WhatsApp → invia le foto
        </p>
      </div>
      <a href={business.whatsapp} className="btn-signal shrink-0">
        Apri WhatsApp
        <Arrow className="h-3.5 w-3.5" />
      </a>
    </div>
  );
}
