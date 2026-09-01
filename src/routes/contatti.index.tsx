import { createFileRoute } from "@tanstack/react-router";
import { LeadForm } from "@/components/site/LeadForm";
import { Reveal } from "@/components/site/Reveal";
import { PageHero, Section, SectionHead } from "@/components/site/sections";
import { QuickWhatsapp, TechLabel } from "@/components/site/lab";
import { business, photos } from "@/lib/site";

export const Route = createFileRoute("/contatti/")({
  head: () => ({
    meta: [
      { title: "Contatti — Radaelli Levabolli, Melzo (MI) | Tel. 02.9551729" },
      {
        name: "description",
        content:
          "Contatta Radaelli Levabolli: Via Buozzi 34, Melzo (MI). Telefono 02.9551729, cellulare +39 333 355 0901, info@radaellilevabolli.com. Riparazioni su appuntamento.",
      },
      { property: "og:title", content: "Contatti — Radaelli Levabolli" },
      {
        property: "og:description",
        content:
          "Sede di Melzo (MI), Via Buozzi 34. Chiama, scrivi su WhatsApp o compila il modulo per una valutazione.",
      },
      { property: "og:url", content: "/contatti/" },
      { property: "og:image", content: photos.workshop1 },
      { name: "twitter:image", content: photos.workshop1 },
    ],
    links: [{ rel: "canonical", href: "/contatti/" }],
  }),
  component: Contatti,
});

function Contatti() {
  return (
    <>
      <section className="surface-dark relative isolate flex min-h-[78svh] items-end overflow-hidden">
        <img
          src={photos.workshop1}
          alt="Officina Radaelli Levabolli a Melzo"
          className="absolute inset-0 -z-20 h-full w-full object-cover opacity-45"
        />
        <div aria-hidden className="absolute inset-0 -z-10" style={{ background: "var(--gradient-hero)" }} />
        <div className="container-x relative w-full pb-16 pt-40">
          <TechLabel>Contatti · Melzo 45°30&apos;N / 9°25&apos;E</TechLabel>
          <h1 className="h-xxl mt-8 text-offwhite">
            Parliamo
            <br />
            della tua
            <br />
            <span className="text-brand">auto.</span>
          </h1>
          <div className="mt-12 grid gap-8 border-t border-white/15 pt-8 sm:grid-cols-3">
            <a href={business.phoneHref} className="group block">
              <span className="text-[0.66rem] font-extrabold uppercase tracking-[0.24em] text-mutedgrey">
                Call
              </span>
              <span className="mt-2 block text-xl font-extrabold tracking-tight text-offwhite transition-colors group-hover:text-brand">
                {business.phone}
              </span>
            </a>
            <a href={business.whatsapp} className="group block">
              <span className="text-[0.66rem] font-extrabold uppercase tracking-[0.24em] text-mutedgrey">
                WhatsApp / foto
              </span>
              <span className="mt-2 block text-xl font-extrabold tracking-tight text-offwhite transition-colors group-hover:text-brand">
                {business.mobile}
              </span>
            </a>
            <a href={`mailto:${business.email}`} className="group block">
              <span className="text-[0.66rem] font-extrabold uppercase tracking-[0.24em] text-mutedgrey">
                Email
              </span>
              <span className="mt-2 block break-all text-xl font-extrabold tracking-tight text-offwhite transition-colors group-hover:text-brand">
                {business.email}
              </span>
            </a>
          </div>
        </div>
      </section>

      <Section>
        <div className="container-x grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <Reveal>
            <SectionHead eyebrow="Dove siamo" title="Radaelli Levabolli" />
            <dl className="mt-10 space-y-7 text-[1.02rem]">
              <div>
                <dt className="text-[0.68rem] font-extrabold uppercase tracking-[0.2em] text-muted-foreground">
                  Indirizzo
                </dt>
                <dd className="mt-2">
                  {business.street} — {business.zip} {business.city} ({business.province})
                </dd>
              </div>
              <div>
                <dt className="text-[0.68rem] font-extrabold uppercase tracking-[0.2em] text-muted-foreground">
                  Telefono
                </dt>
                <dd className="mt-2">
                  <a href={business.phoneHref} className="font-bold text-brand">
                    {business.phone}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-[0.68rem] font-extrabold uppercase tracking-[0.2em] text-muted-foreground">
                  Cellulare / WhatsApp
                </dt>
                <dd className="mt-2 flex flex-wrap items-center gap-4">
                  <a href={business.mobileHref} className="font-bold text-brand">
                    {business.mobile}
                  </a>
                  <a
                    href={business.whatsapp}
                    className="text-[0.72rem] font-extrabold uppercase tracking-[0.16em] underline underline-offset-4"
                  >
                    Scrivi su WhatsApp
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-[0.68rem] font-extrabold uppercase tracking-[0.2em] text-muted-foreground">
                  Email
                </dt>
                <dd className="mt-2">
                  <a href={`mailto:${business.email}`} className="font-bold text-brand">
                    {business.email}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-[0.68rem] font-extrabold uppercase tracking-[0.2em] text-muted-foreground">
                  Dati fiscali
                </dt>
                <dd className="mt-2 text-muted-foreground">
                  {business.legal} — P.IVA {business.vat}
                </dd>
              </div>
            </dl>
          </Reveal>

          <Reveal delay={90}>
            <QuickWhatsapp className="mb-6" />
            <div className="border border-border p-8 lg:p-12">
            <LeadForm
              title="Richiedi una valutazione"
              intro="Compila il modulo: ti ricontattiamo con una prima valutazione del danno."
            />
            </div>
          </Reveal>
        </div>
      </Section>

      <section aria-label="Mappa della sede" className="border-t border-border">
        <iframe
          title="Mappa — Radaelli Levabolli, Via Buozzi 34, Melzo (MI)"
          src={business.mapEmbed}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="h-[420px] w-full grayscale-[0.35]"
        />
      </section>
    </>
  );
}
