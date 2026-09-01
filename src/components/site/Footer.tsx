import { Link } from "@tanstack/react-router";
import { business, servicesNav } from "@/lib/site";
import { Arrow, BtnLink } from "./ui";

export function Footer() {
  return (
    <footer className="surface-dark">
      <div className="container-x border-b border-white/10 py-14 lg:py-20">
        <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
          <h2 className="h-section max-w-2xl text-offwhite">
            Hai l'auto grandinata?
          </h2>
          <div className="flex flex-wrap gap-3">
            <BtnLink to="/contatti/" size="lg">
              Richiedi una valutazione
            </BtnLink>
            <a
              href={business.phoneHref}
              className="inline-flex h-14 items-center px-8 text-[0.82rem] font-extrabold uppercase tracking-[0.14em] text-offwhite ring-1 ring-white/25 transition-colors hover:text-brand-bright hover:ring-brand"
            >
              {business.phone}
            </a>
          </div>
        </div>
      </div>

      <div className="container-x grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-3">
            <span aria-hidden className="h-10 w-2 bg-brand" />
            <span>
              <span className="block font-[family-name:var(--font-display)] text-2xl font-extrabold uppercase tracking-tight text-offwhite">
                Radaelli
              </span>
              <span className="block text-[0.65rem] font-bold uppercase tracking-[0.34em] text-mutedgrey">
                Levabolli
              </span>
            </span>
          </div>
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-mutedgrey">
            Riparazione auto grandinate con tecnica levabolli (PDR), gestione del
            sinistro e pellicole per vetri. Melzo, Milano.
          </p>
          <div className="mt-6 flex gap-3">
            <a
              href={business.facebook}
              className="border border-white/15 px-4 py-2 text-[0.7rem] font-bold uppercase tracking-[0.16em] text-softgrey transition-colors hover:border-brand hover:text-brand-bright"
            >
              Facebook
            </a>
            <a
              href={business.instagram}
              className="border border-white/15 px-4 py-2 text-[0.7rem] font-bold uppercase tracking-[0.16em] text-softgrey transition-colors hover:border-brand hover:text-brand-bright"
            >
              Instagram
            </a>
          </div>
        </div>

        <FooterCol title="Servizi">
          {servicesNav.map((s) => (
            <FooterLink key={s.to} to={s.to}>
              {s.label}
            </FooterLink>
          ))}
        </FooterCol>

        <FooterCol title="Informazioni">
          <FooterLink to="/azienda/">Azienda</FooterLink>
          <FooterLink to="/corsi-levabolli-milano-lombardia/">Corsi levabolli</FooterLink>
          <FooterLink to="/lavoro-levabolli-corsi/">Lavora con noi</FooterLink>
          <FooterLink to="/news/">News</FooterLink>
          <FooterLink to="/contatti/">Contatti</FooterLink>
        </FooterCol>

        <FooterCol title="Contatti">
          <address className="not-italic text-sm leading-relaxed text-mutedgrey">
            <strong className="block text-offwhite">{business.legal}</strong>
            {business.street}
            <br />
            {business.zip} {business.city} ({business.province})
          </address>
          <div className="mt-4 flex flex-col gap-2 text-sm">
            <a href={business.phoneHref} className="text-softgrey hover:text-brand-bright">
              Tel {business.phone}
            </a>
            <a href={business.mobileHref} className="text-softgrey hover:text-brand-bright">
              Mobile {business.mobile}
            </a>
            <a href={business.whatsapp} className="text-softgrey hover:text-brand-bright">
              WhatsApp
            </a>
            <a
              href={`mailto:${business.email}`}
              className="break-all text-softgrey hover:text-brand-bright"
            >
              {business.email}
            </a>
          </div>
        </FooterCol>
      </div>

      <div className="container-x flex flex-col gap-2 border-t border-white/10 py-6 text-xs text-mutedgrey sm:flex-row sm:justify-between">
        <span>
          © {new Date().getFullYear()} {business.legal} — P.IVA {business.vat}
        </span>
        <span>Melzo (MI) · Milano · Lombardia</span>
      </div>
    </footer>
  );
}

function FooterCol({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h3 className="text-[0.7rem] font-extrabold uppercase tracking-[0.24em] text-brand-bright">
        {title}
      </h3>
      <div className="mt-5 flex flex-col gap-3">{children}</div>
    </div>
  );
}

function FooterLink({ to, children }: { to: string; children: React.ReactNode }) {
  return (
    <Link
      to={to}
      className="group flex items-start justify-between gap-3 text-sm text-softgrey transition-colors hover:text-brand-bright"
    >
      <span>{children}</span>
      <Arrow className="mt-1 h-3 w-3 shrink-0 opacity-0 transition-opacity group-hover:opacity-70" />
    </Link>
  );
}
