import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/site/Reveal";
import {
  CtaBand,
  Editorial,
  Gallery,
  PageHero,
  Section,
  SectionHead,
} from "@/components/site/sections";
import { Figure } from "@/components/site/ui";
import { photos } from "@/lib/site";

const values = [
  ["Competenza", "Esperienza maturata nel settore dell'autoriparazione e continua specializzazione."],
  ["Aggiornamento", "Partecipiamo regolarmente a corsi di formazione e aggiornamento."],
  ["Ordine e precisione", "Un ambiente ordinato, pulito e sicuro in cui custodire la vostra auto."],
  ["Passione automotive", "Un team di professionisti appassionati di automobili."],
  ["Affidabilità", "Abbiamo l'esperienza e le competenze per superare ogni aspettativa."],
  ["Puntualità", "La serietà e la puntualità nella consegna dei lavori sono i nostri punti di forza."],
];

export const Route = createFileRoute("/azienda/")({
  head: () => ({
    meta: [
      { title: "Azienda — Radaelli Levabolli, specialisti auto grandinate a Melzo" },
      {
        name: "description",
        content:
          "Siamo qualificati e con esperienza nel settore dell'autoriparazione: team, sede di Melzo, aggiornamento professionale e cura del veicolo. Scopri Radaelli Levabolli.",
      },
      { property: "og:title", content: "Azienda — Radaelli Levabolli" },
      {
        property: "og:description",
        content:
          "Un team di professionisti appassionati di automobili. Sede a Melzo (MI), ambiente ordinato, pulito e sicuro.",
      },
      { property: "og:url", content: "/azienda/" },
      { property: "og:image", content: photos.company },
      { name: "twitter:image", content: photos.company },
    ],
    links: [{ rel: "canonical", href: "/azienda/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "/" },
            { "@type": "ListItem", position: 2, name: "Azienda", item: "/azienda/" },
          ],
        }),
      },
    ],
  }),
  component: Azienda,
});

function Azienda() {
  return (
    <>
      <PageHero
        eyebrow="Chi siamo"
        title={
          <>
            Siamo qualificati
            <br />e con esperienza
            <br />
            in questo settore.
          </>
        }
        subtitle="Un team di professionisti appassionati di automobili, che ha sempre operato nel settore dell'autoriparazione."
        image={photos.company}
        breadcrumb={[{ label: "Home", to: "/" }, { label: "Azienda" }]}
      />

      <Section>
        <div className="container-x grid gap-14 lg:grid-cols-[1fr_1fr] lg:gap-24">
          <Reveal className="space-y-6 text-[1.05rem] leading-relaxed text-muted-foreground">
            <p>
              Siamo un Team di professionisti appassionati di automobili, che ha sempre
              operato nel settore dell'autoriparazione. Il nostro obiettivo primario è
              soddisfare al meglio le richieste dei nostri clienti con un servizio
              efficiente e di qualità.
            </p>
            <p>
              L'evoluzione delle autovetture e l'acquisizione di nuove competenze ci ha
              permesso di crescere, di ampliare l'offerta dei servizi per i clienti e
              l'apertura dell'attuale sede di Melzo.
            </p>
            <p>
              Potete stare certi che la vostra auto nelle nostre mani, custodita in un
              ambiente ordinato, pulito e sicuro, non può che lasciarvi tranquilli e il
              risultato lo vedrete con i vostri occhi.
            </p>
          </Reveal>
          <Reveal delay={90} className="space-y-6 text-[1.05rem] leading-relaxed text-muted-foreground">
            <p>
              Curiamo ogni aspetto della nostra attività, che consiste anche nel
              partecipare regolarmente a corsi di formazione e aggiornamento.
            </p>
            <p className="text-2xl font-extrabold leading-tight tracking-tight text-foreground">
              Chiedeteci tutto! Abbiamo l'esperienza e le competenze per superare ogni
              aspettativa.
            </p>
            <p>
              La serietà e la puntualità nella consegna dei lavori sono i nostri punti di
              forza.
            </p>
          </Reveal>
        </div>
      </Section>

      <Section dark className="pt-0 lg:pt-0">
        <div className="container-x">
          <div className="grid gap-3 lg:grid-cols-3">
            <Reveal className="lg:col-span-2">
              <Figure src={photos.workshop1} alt="Officina Radaelli Levabolli" ratio="aspect-[16/9]" />
            </Reveal>
            <Reveal delay={80}>
              <Figure src={photos.workshop3} alt="Dettaglio lavorazione levabolli" ratio="aspect-[16/9]" />
            </Reveal>
          </div>
        </div>
      </Section>

      <Section dark className="pt-0 lg:pt-0">
        <div className="container-x">
          <SectionHead eyebrow="Come lavoriamo" title="I nostri principi." />
          <div className="mt-14 grid gap-px bg-white/10 sm:grid-cols-2 lg:grid-cols-3">
            {values.map(([t, d], i) => (
              <Reveal key={t} delay={(i % 3) * 70} className="bg-carbon p-8 lg:p-10">
                <span className="font-[family-name:var(--font-display)] text-sm font-extrabold text-brand">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-5 text-lg font-extrabold uppercase tracking-[0.05em] text-offwhite">
                  {t}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-mutedgrey">{d}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      <Section>
        <div className="container-x">
          <Editorial
            eyebrow="La sede"
            title="Melzo, alle porte di Milano."
            image={photos.workshop5}
            alt="Sede Radaelli Levabolli a Melzo"
            to="/contatti/"
            ctaLabel="Vieni a trovarci"
            reverse
          >
            <p>
              L'evoluzione delle autovetture e l'acquisizione di nuove competenze ci
              hanno portato all'apertura dell'attuale sede di Melzo, in provincia di
              Milano, dove riceviamo privati, carrozzerie, concessionarie e parchi auto.
            </p>
            <p>
              Le riparazioni per privati vengono eseguite presso la nostra sede, previo
              appuntamento.
            </p>
          </Editorial>
        </div>
      </Section>

      <Section dark className="pt-0 lg:pt-0">
        <div className="container-x">
          <SectionHead eyebrow="Gallery" title="Dentro l'officina." />
          <div className="mt-12">
            <Gallery
              images={[
                { src: photos.workshop1, alt: "Lavorazione levabolli in officina" },
                { src: photos.workshop2, alt: "Attrezzatura per riparazione PDR" },
                { src: photos.workshop3, alt: "Auto in lavorazione" },
                { src: photos.workshop4, alt: "Applicazione pellicole di sicurezza" },
                { src: photos.workshop5, alt: "Dettaglio carrozzeria" },
                { src: photos.workshop6, alt: "Interno della sede di Melzo" },
              ]}
            />
          </div>
        </div>
      </Section>

      <CtaBand
        title="Affidaci la tua auto."
        text="Raccontaci il danno: ti diciamo se la tecnica levabolli è applicabile."
      />
    </>
  );
}
