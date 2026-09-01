import { Link } from "@tanstack/react-router";
import { useId, useState, type ReactNode } from "react";
import { business, reviews } from "@/lib/site";
import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";
import { ReflectionLines, TechGrid, TechLabel } from "./lab";
import { Arrow, BtnLink, Eyebrow, Figure } from "./ui";

/* ---------------- Page hero (pagine interne) ---------------- */

export function PageHero({
  eyebrow,
  title,
  subtitle,
  image,
  breadcrumb,
  compact,
  ghost,
  labels,
  children,
}: {
  eyebrow: string;
  title: ReactNode;
  subtitle?: string;
  image: string;
  breadcrumb: { label: string; to?: string }[];
  compact?: boolean;
  ghost?: string;
  labels?: string[];
  children?: ReactNode;
}) {
  return (
    <section className="surface-dark relative isolate overflow-hidden">
      <img
        src={image}
        alt=""
        aria-hidden
        fetchPriority="high"
        className="absolute inset-0 -z-30 h-full w-full object-cover"
      />
      <div
        aria-hidden
        className="absolute inset-0 -z-20"
        style={{ background: "var(--gradient-hero)" }}
      />
      <TechGrid className="-z-10 opacity-40" />
      <ReflectionLines progress={0.75} count={5} className="-z-10" />
      <div aria-hidden className="scanline -z-10" />
      {ghost && (
        <span aria-hidden className="ghost-word bottom-[-4%] right-[-3%]">
          {ghost}
        </span>
      )}

      <div
        className={cn(
          "container-x relative flex flex-col justify-end pb-16",
          compact ? "pt-36 lg:pb-20 lg:pt-44" : "pt-40 lg:pb-28 lg:pt-56",
        )}
      >
        <nav aria-label="Breadcrumb" className="mb-10">
          <ol className="flex flex-wrap items-center gap-2 text-[0.62rem] font-extrabold uppercase tracking-[0.24em] text-mutedgrey">
            {breadcrumb.map((b, i) => (
              <li key={b.label} className="flex items-center gap-2">
                {i > 0 && <span aria-hidden className="text-brand">/</span>}
                {b.to ? (
                  <Link to={b.to} className="hover:text-brand-bright">
                    {b.label}
                  </Link>
                ) : (
                  <span className="text-softgrey">{b.label}</span>
                )}
              </li>
            ))}
          </ol>
        </nav>
        <TechLabel>{eyebrow}</TechLabel>
        <h1 className="h-xxl mt-7 max-w-6xl text-offwhite">{title}</h1>
        {subtitle && (
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-softgrey">
            {subtitle}
          </p>
        )}
        {children && <div className="mt-10 flex flex-wrap items-center gap-3">{children}</div>}
        {labels && (
          <div className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-3 border-t border-white/12 pt-5">
            {labels.map((l) => (
              <TechLabel key={l}>{l}</TechLabel>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}


/* ---------------- Section shell ---------------- */

export function Section({
  dark,
  className,
  children,
  id,
}: {
  dark?: boolean;
  className?: string;
  children: ReactNode;
  id?: string;
}) {
  return (
    <section
      id={id}
      className={cn("section-y", dark && "surface-dark", className)}
    >
      {children}
    </section>
  );
}

export function SectionHead({
  eyebrow,
  title,
  intro,
  className,
}: {
  eyebrow?: string;
  title: ReactNode;
  intro?: string;
  className?: string;
}) {
  return (
    <Reveal className={cn("max-w-3xl", className)}>
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <h2 className="h-section mt-5">{title}</h2>
      {intro && <p className="lead mt-6">{intro}</p>}
    </Reveal>
  );
}

/* ---------------- Process / funnel ---------------- */

export function ProcessSteps({
  steps,
  dark,
}: {
  steps: { title: string; text: string }[];
  dark?: boolean;
}) {
  return (
    <ol className="grid gap-px bg-current/10 sm:grid-cols-2 lg:grid-cols-5">
      {steps.map((s, i) => (
        <Reveal
          as="li"
          key={s.title}
          delay={i * 70}
          className={cn("relative p-7 lg:p-8", dark ? "bg-carbon" : "bg-background")}
        >
          <span className="block font-[family-name:var(--font-display)] text-5xl font-extrabold leading-none text-brand lg:text-6xl">
            {String(i + 1).padStart(2, "0")}
          </span>
          <h3 className="mt-6 text-base font-extrabold uppercase tracking-[0.08em]">
            {s.title}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
        </Reveal>
      ))}
    </ol>
  );
}

/* ---------------- FAQ (accordion, AEO friendly) ---------------- */

export type Faq = { q: string; a: string };

export function FaqList({ items, title }: { items: Faq[]; title?: string }) {
  return (
    <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
      <Reveal>
        <Eyebrow>FAQ</Eyebrow>
        <h2 className="h-section mt-5">{title ?? "Domande frequenti"}</h2>
      </Reveal>
      <div className="border-t border-border">
        {items.map((f, i) => (
          <FaqItem key={f.q} item={f} index={i} />
        ))}
      </div>
    </div>
  );
}

function FaqItem({ item, index }: { item: Faq; index: number }) {
  const [open, setOpen] = useState(index === 0);
  const id = useId();
  return (
    <div className="border-b border-border">
      <h3>
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls={id}
          className="flex w-full items-start justify-between gap-6 py-6 text-left"
        >
          <span className="text-base font-extrabold uppercase tracking-[0.03em] lg:text-lg">
            {item.q}
          </span>
          <span
            aria-hidden
            className={cn(
              "mt-1 grid h-7 w-7 shrink-0 place-items-center border border-current/25 text-brand transition-transform duration-300",
              open && "rotate-45",
            )}
          >
            <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M12 5v14M5 12h14" />
            </svg>
          </span>
        </button>
      </h3>
      <div
        id={id}
        hidden={!open}
        className="max-w-2xl pb-7 text-[0.98rem] leading-relaxed text-muted-foreground"
      >
        {item.a}
      </div>
    </div>
  );
}

export function faqSchema(items: Faq[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

/* ---------------- Gallery ---------------- */

export function Gallery({
  images,
  columns = 3,
}: {
  images: { src: string; alt: string }[];
  columns?: 3 | 4;
}) {
  return (
    <div
      className={cn(
        "grid gap-3 sm:grid-cols-2",
        columns === 4 ? "lg:grid-cols-4" : "lg:grid-cols-3",
      )}
    >
      {images.map((img, i) => (
        <Reveal key={img.src} delay={(i % 4) * 60}>
          <Figure src={img.src} alt={img.alt} ratio="aspect-[4/3]" />
        </Reveal>
      ))}
    </div>
  );
}

/* ---------------- Reviews ---------------- */

export function Reviews() {
  return (
    <Section dark>
      <div className="container-x">
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <SectionHead
            eyebrow="Recensioni"
            title={
              <>
                La parola a chi ci ha
                <br className="hidden sm:block" /> affidato la propria auto.
              </>
            }
          />
          <Reveal className="shrink-0">
            <p className="text-sm text-mutedgrey">
              <strong className="text-offwhite">{business.reviewsCount} recensioni</strong> su
              Google
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-px bg-white/10 md:grid-cols-2 lg:grid-cols-3">
          {reviews.map((r, i) => (
            <Reveal key={r.name} delay={(i % 3) * 80} className="bg-carbon p-8 lg:p-10">
              <div aria-label="5 stelle su 5" className="flex gap-1 text-brand">
                {Array.from({ length: 5 }).map((_, s) => (
                  <svg key={s} viewBox="0 0 24 24" className="h-3 w-3" fill="currentColor" aria-hidden>
                    <path d="M12 2l3 6.9 7.5.7-5.6 5 1.6 7.4L12 18l-6.5 4 1.6-7.4-5.6-5 7.5-.7z" />
                  </svg>
                ))}
              </div>
              <p className="mt-6 text-[0.98rem] leading-relaxed text-softgrey">“{r.text}”</p>
              <p className="mt-8 text-xs font-bold uppercase tracking-[0.18em] text-offwhite">
                {r.name}
              </p>
              <p className="mt-1 text-xs text-mutedgrey">{r.date} · Google</p>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}

/* ---------------- CTA band ---------------- */

export function CtaBand({
  title,
  text,
  cta = "Richiedi una valutazione",
  to = "/contatti/",
}: {
  title: ReactNode;
  text?: string;
  cta?: string;
  to?: string;
}) {
  return (
    <section className="surface-dark border-y border-white/10">
      <div className="container-x flex flex-col items-start justify-between gap-8 py-16 lg:flex-row lg:items-center lg:py-20">
        <div className="max-w-2xl">
          <h2 className="h-section text-offwhite">{title}</h2>
          {text && <p className="mt-5 text-softgrey">{text}</p>}
        </div>
        <div className="flex flex-wrap gap-3">
          <BtnLink to={to} size="lg">
            {cta}
          </BtnLink>
          <a
            href={business.whatsapp}
            className="inline-flex h-14 items-center px-8 text-[0.82rem] font-extrabold uppercase tracking-[0.14em] text-offwhite ring-1 ring-white/25 transition-colors hover:text-brand-bright hover:ring-brand"
          >
            WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Editorial split ---------------- */

export function Editorial({
  eyebrow,
  title,
  children,
  image,
  alt,
  to,
  ctaLabel,
  reverse,
}: {
  eyebrow: string;
  title: ReactNode;
  children: ReactNode;
  image: string;
  alt: string;
  to?: string;
  ctaLabel?: string;
  reverse?: boolean;
}) {
  return (
    <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
      <Reveal className={cn(reverse && "lg:order-2")}>
        <Eyebrow>{eyebrow}</Eyebrow>
        <h2 className="h-section mt-5">{title}</h2>
        <div className="mt-7 space-y-5 text-[1.02rem] leading-relaxed text-muted-foreground">
          {children}
        </div>
        {to && ctaLabel && (
          <Link
            to={to}
            className="group mt-9 inline-flex items-center gap-3 text-[0.78rem] font-extrabold uppercase tracking-[0.16em] text-brand"
          >
            {ctaLabel}
            <Arrow className="transition-transform group-hover:translate-x-1" />
          </Link>
        )}
      </Reveal>
      <Reveal delay={90} className={cn(reverse && "lg:order-1")}>
        <Figure src={image} alt={alt} ratio="aspect-[5/4]" />
      </Reveal>
    </div>
  );
}
