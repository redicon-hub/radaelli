import { createFileRoute } from "@tanstack/react-router";
import { LeadForm } from "@/components/site/LeadForm";
import { Reveal } from "@/components/site/Reveal";
import { PageHero, Section, SectionHead } from "@/components/site/sections";
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
      <PageHero
        compact
        eyebrow="Contatti"
        title="Parliamo della tua auto."
        subtitle="Siamo a Melzo, alle porte di Milano. Riceviamo privati, carrozzerie, concessionarie e parchi auto su appuntamento."
        image={photos.workshop1}
        breadcrumb={[{ label: "Home", to: "/" }, { label: "Contatti" }]}
      />

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

          <Reveal delay={90} className="border border-border p-8 lg:p-12">
            <LeadForm
              title="Richiedi una valutazione"
              intro="Compila il modulo: ti ricontattiamo con una prima valutazione del danno."
            />
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
