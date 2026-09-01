import { createFileRoute } from "@tanstack/react-router";
import { LeadForm } from "@/components/site/LeadForm";
import { Reveal } from "@/components/site/Reveal";
import {
  CtaBand,
  Editorial,
  PageHero,
  Section,
  SectionHead,
} from "@/components/site/sections";
import { BtnLink } from "@/components/site/ui";
import { photos } from "@/lib/site";

export const Route = createFileRoute("/lavoro-levabolli-corsi/")({
  head: () => ({
    meta: [
      { title: "Lavora con noi — tecnico levabolli | Radaelli Melzo (MI)" },
      {
        name: "description",
        content:
          "Cerchiamo persone motivate da formare e tecnici levabolli esperti per la nostra sede di Melzo (MI). Invia la tua candidatura a Radaelli Levabolli.",
      },
      { property: "og:title", content: "Lavora con noi — Radaelli Levabolli" },
      {
        property: "og:description",
        content:
          "Entra in un team specializzato nella riparazione di auto grandinate con tecnica PDR.",
      },
      { property: "og:url", content: "/lavoro-levabolli-corsi/" },
      { property: "og:image", content: photos.levabolliCorsi },
      { name: "twitter:image", content: photos.levabolliCorsi },
    ],
    links: [{ rel: "canonical", href: "/lavoro-levabolli-corsi/" }],
  }),
  component: Lavoro,
});

function Lavoro() {
  return (
    <>
      <PageHero
        eyebrow="Recruiting"
        title="Lavora con noi"
        subtitle="Cerchiamo persone motivate da formare e tecnici già esperti nella tecnica levabolli."
        image={photos.levabolliCorsi}
        breadcrumb={[{ label: "Home", to: "/" }, { label: "Lavora con noi" }]}
      />

      <Section>
        <div className="container-x">
          <Editorial
            eyebrow="Il lavoro"
            title="Una professione tecnica, richiesta e in crescita."
            image={photos.course6}
            alt="Tecnico levabolli al lavoro"
          >
            <p>
              Il tecnico levabolli è una figura specializzata: lavora sulla lamiera senza
              stuccatura né verniciatura, con precisione e sensibilità. È una professione
              richiesta, soprattutto dopo gli eventi grandinigeni sempre più frequenti.
            </p>
            <p>
              Chi entra nel nostro team viene formato direttamente in officina, affiancato
              nelle lavorazioni e accompagnato nella crescita tecnica.
            </p>
          </Editorial>
        </div>
      </Section>

      <Section dark className="pt-0 lg:pt-0">
        <div className="container-x">
          <SectionHead eyebrow="Profili" title="Chi stiamo cercando." />
          <div className="mt-14 grid gap-px bg-white/10 md:grid-cols-2">
            {[
              [
                "Tecnico levabolli esperto",
                "Autonomia nelle lavorazioni su auto grandinate, capacità di gestire smontaggi e finiture, precisione e puntualità.",
              ],
              [
                "Apprendista da formare",
                "Nessuna esperienza richiesta: manualità, serietà e voglia di imparare un mestiere tecnico con affiancamento in officina.",
              ],
            ].map(([t, d], i) => (
              <Reveal key={t} delay={i * 80} className="bg-carbon p-8 lg:p-12">
                <h3 className="h-card text-offwhite">{t}</h3>
                <p className="mt-4 text-sm leading-relaxed text-mutedgrey">{d}</p>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-10">
            <BtnLink to="/corsi-levabolli-milano-lombardia/" variant="ghost">
              Scopri anche i corsi
            </BtnLink>
          </Reveal>
        </div>
      </Section>

      <Section>
        <div className="container-x grid gap-14 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
          <Reveal>
            <h2 className="h-section">Cosa offriamo.</h2>
            <ul className="mt-8 space-y-5">
              {[
                "Formazione tecnica continua e aggiornamento professionale.",
                "Un ambiente di lavoro ordinato, pulito e sicuro.",
                "Attrezzatura professionale e lavorazioni di qualità.",
                "Un team appassionato di automobili, con sede a Melzo (MI).",
              ].map((t) => (
                <li key={t} className="flex items-start gap-4 border-b border-border pb-5">
                  <span aria-hidden className="mt-2.5 h-1.5 w-5 shrink-0 bg-brand" />
                  <span className="text-[1.02rem] leading-relaxed">{t}</span>
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={90} className="border border-border p-8 lg:p-12">
            <LeadForm
              variant="job"
              title="Invia la tua candidatura"
              intro="Raccontaci chi sei e allega il tuo CV."
              cta="Invia candidatura"
            />
          </Reveal>
        </div>
      </Section>

      <CtaBand
        title="Vuoi entrare nel team?"
        text="Scrivici anche solo per capire se questo lavoro fa per te."
        cta="Contattaci"
      />
    </>
  );
}
