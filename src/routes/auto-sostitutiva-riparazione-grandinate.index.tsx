import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/site/Reveal";
import {
  CtaBand,
  Editorial,
  FaqList,
  PageHero,
  Section,
  SectionHead,
  faqSchema,
  type Faq,
} from "@/components/site/sections";
import { BtnLink } from "@/components/site/ui";
import { photos } from "@/lib/site";

const faqs: Faq[] = [
  {
    q: "L'auto di cortesia è inclusa nella riparazione?",
    a: "Mettiamo a disposizione un'auto di cortesia per i clienti durante il periodo di intervento, in base alla disponibilità del momento. È consigliabile informarsi in anticipo e prenotarla insieme all'appuntamento di riparazione.",
  },
  {
    q: "Per quanto tempo posso tenerla?",
    a: "Per tutta la durata della lavorazione del tuo veicolo. Alla consegna dell'auto riparata riconsegni il mezzo di cortesia.",
  },
  {
    q: "Cosa serve per il ritiro?",
    a: "Patente di guida in corso di validità e documento d'identità del conducente.",
  },
  {
    q: "Devo restituirla con il pieno?",
    a: "Il veicolo va restituito con lo stesso livello di carburante con cui è stato consegnato e nelle medesime condizioni di pulizia.",
  },
];

export const Route = createFileRoute("/auto-sostitutiva-riparazione-grandinate/")({
  head: () => ({
    meta: [
      { title: "Auto di cortesia durante la riparazione grandine | Radaelli" },
      {
        name: "description",
        content:
          "Auto sostitutiva a disposizione durante la riparazione del veicolo danneggiato dalla grandine: resti mobile mentre lavoriamo sulla tua auto.",
      },
      { property: "og:title", content: "Auto di cortesia — riparazione grandinate" },
      {
        property: "og:description",
        content:
          "Un mezzo a disposizione per tutta la durata dell'intervento levabolli presso la nostra sede di Melzo (MI).",
      },
      { property: "og:url", content: "/auto-sostitutiva-riparazione-grandinate/" },
      { property: "og:image", content: photos.courtesyCar },
      { name: "twitter:image", content: photos.courtesyCar },
    ],
    links: [
      { rel: "canonical", href: "/auto-sostitutiva-riparazione-grandinate/" },
    ],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(faqSchema(faqs)) },
    ],
  }),
  component: AutoCortesia,
});

function AutoCortesia() {
  return (
    <>
      <PageHero
        eyebrow="Servizio"
        title="Auto di cortesia"
        subtitle="Un mezzo a disposizione per tutta la durata della riparazione del veicolo danneggiato dalla grandine."
        image={photos.courtesyCar}
        breadcrumb={[{ label: "Home", to: "/" }, { label: "Auto di cortesia" }]}
      >
        <BtnLink to="/contatti/" size="lg">
          Prenota con la riparazione
        </BtnLink>
      </PageHero>

      <Section>
        <div className="container-x">
          <Editorial
            eyebrow="Come funziona"
            title="La tua mobilità non si ferma."
            image={photos.workshop6}
            alt="Auto pronta per la consegna al cliente"
          >
            <p>
              Sappiamo che restare senza auto complica la giornata. Per questo offriamo un
              servizio di auto di cortesia ai clienti che affidano a noi la riparazione
              del veicolo grandinato.
            </p>
            <p>
              Il mezzo viene consegnato al momento dell'accettazione dell'auto e
              riconsegnato alla consegna del veicolo riparato, presso la nostra sede di
              Melzo.
            </p>
            <p>
              Il servizio è soggetto a disponibilità: consigliamo di richiederlo già in
              fase di appuntamento.
            </p>
          </Editorial>
        </div>
      </Section>

      <Section dark className="pt-0 lg:pt-0">
        <div className="container-x">
          <SectionHead eyebrow="In breve" title="Le condizioni." />
          <div className="mt-14 grid gap-px bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
            {[
              ["Su prenotazione", "Richiedila insieme all'appuntamento di riparazione."],
              ["Per tutta la lavorazione", "Disponibile fino alla consegna dell'auto riparata."],
              ["Documenti", "Patente valida e documento d'identità del conducente."],
              ["Restituzione", "Stesso livello di carburante e stesse condizioni."],
            ].map(([t, d], i) => (
              <Reveal key={t} delay={i * 70} className="bg-carbon p-8 lg:p-10">
                <h3 className="text-base font-extrabold uppercase tracking-[0.06em] text-brand">
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
          <FaqList items={faqs} title="Auto di cortesia: domande frequenti" />
        </div>
      </Section>

      <CtaBand
        title="Prenota riparazione e auto di cortesia."
        text="Un'unica telefonata: fissiamo l'appuntamento e verifichiamo la disponibilità del mezzo."
      />
    </>
  );
}
