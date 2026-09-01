import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { business, servicesNav } from "@/lib/site";
import { cn } from "@/lib/utils";
import { Arrow, BtnLink } from "./ui";

const mainNav = [
  { label: "Azienda", to: "/azienda/" },
  { label: "Corsi", to: "/corsi-levabolli-milano-lombardia/" },
  { label: "Lavora con noi", to: "/lavoro-levabolli-corsi/" },
  { label: "News", to: "/news/" },
  { label: "Contatti", to: "/contatti/" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "surface-dark fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled || open
          ? "bg-carbon/92 supports-[backdrop-filter]:bg-carbon/72 backdrop-blur-xl border-b border-white/10"
          : "bg-transparent",
      )}
    >
      <div className="container-x flex h-[72px] items-center justify-between gap-6 lg:h-20">
        <Link to="/" className="flex items-center gap-3" aria-label="Radaelli Levabolli — home">
          <span aria-hidden className="h-7 w-1.5 bg-brand" />
          <span className="leading-none">
            <span className="block font-[family-name:var(--font-display)] text-lg font-extrabold uppercase tracking-tight text-offwhite">
              Radaelli
            </span>
            <span className="block text-[0.62rem] font-bold uppercase tracking-[0.32em] text-mutedgrey">
              Levabolli
            </span>
          </span>
        </Link>

        <nav aria-label="Principale" className="hidden items-center gap-1 xl:flex">
          <Link
            to="/azienda/"
            className="px-3 py-2 text-[0.74rem] font-bold uppercase tracking-[0.16em] text-softgrey transition-colors hover:text-brand-bright"
          >
            Azienda
          </Link>

          <div className="group relative">
            <button
              type="button"
              className="flex items-center gap-1.5 px-3 py-2 text-[0.74rem] font-bold uppercase tracking-[0.16em] text-softgrey transition-colors group-hover:text-brand-bright"
              aria-haspopup="true"
            >
              Servizi
              <svg viewBox="0 0 24 24" className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth="3">
                <path d="M6 9l6 6 6-6" />
              </svg>
            </button>
            <div className="invisible absolute left-0 top-full w-[22rem] translate-y-1 border border-white/10 bg-graphite/98 opacity-0 shadow-2xl backdrop-blur-xl transition-all duration-200 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
              {servicesNav.map((s) => (
                <Link
                  key={s.to}
                  to={s.to}
                  className="flex items-center justify-between gap-4 border-b border-white/5 px-5 py-4 text-sm font-semibold text-softgrey transition-colors last:border-0 hover:bg-white/5 hover:text-brand-bright"
                >
                  {s.label}
                  <Arrow className="h-3.5 w-3.5 shrink-0 opacity-50" />
                </Link>
              ))}
            </div>
          </div>

          {mainNav.slice(1).map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="px-3 py-2 text-[0.74rem] font-bold uppercase tracking-[0.16em] text-softgrey transition-colors hover:text-brand-bright"
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={business.phoneHref}
            className="hidden text-[0.78rem] font-extrabold tracking-wide text-offwhite transition-colors hover:text-brand-bright lg:block"
          >
            {business.phone}
          </a>
          <BtnLink to="/contatti/" className="hidden sm:inline-flex">
            Auto grandinata?
          </BtnLink>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={open ? "Chiudi menu" : "Apri menu"}
            className="flex h-11 w-11 items-center justify-center border border-white/15 text-offwhite xl:hidden"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2.2">
              {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M3 7h18M3 12h18M3 17h18" />}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <div className="surface-dark max-h-[calc(100dvh-72px)] overflow-y-auto border-t border-white/10 bg-carbon xl:hidden">
          <nav aria-label="Menu mobile" className="container-x py-4">
            {[{ label: "Azienda", to: "/azienda/" }, ...servicesNav, ...mainNav.slice(1)].map(
              (n) => (
                <Link
                  key={n.to}
                  to={n.to}
                  className="block border-b border-white/8 py-4 font-[family-name:var(--font-display)] text-lg font-extrabold uppercase tracking-tight text-offwhite"
                >
                  {n.label}
                </Link>
              ),
            )}
            <div className="flex flex-col gap-3 py-6">
              <BtnLink to="/contatti/" size="lg">
                Richiedi valutazione
              </BtnLink>
              <a
                href={business.phoneHref}
                className="text-center text-sm font-bold uppercase tracking-[0.18em] text-mutedgrey"
              >
                {business.phone}
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
