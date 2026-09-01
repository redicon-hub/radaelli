import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/site/Reveal";
import {
  CtaBand,
  Editorial,
  FaqList,
  Gallery,
  PageHero,
  Reviews,
  Section,
  SectionHead,
  faqSchema,
  type Faq,
} from "@/components/site/sections";
import { BtnLink } from "@/components/site/ui";
import { photos } from "@/lib/site";

const faqs: Faq[] = [
  {
    q: "Le pellicole oscuranti sono omologate e a norma di legge?",
    a: "Utilizziamo esclusivamente pellicole omologate. L'oscuramento è consentito sui vetri posteriori alle montanti anteriori (vetri laterali posteriori e lunotto); parabrezza e vetri anteriori non possono essere oscurati oltre i limiti previsti dal Codice della Strada.",
  },
  {
    q: "Quanto dura l'applicazione?",
    a: "L'applicazione richiede in genere una giornata lavorativa, in base al modello di auto e al numero di vetri. Dopo l'installazione è consigliabile non abbassare i finestrini per alcuni giorni per consentire la completa asciugatura.",
  },
  {
    q: "Le pellicole riducono davvero il calore all'interno dell'auto?",
    a: "Sì. Le pellicole filtranti respingono una parte importante della radiazione solare e dei raggi UV, riducendo la temperatura interna dell'abitacolo e proteggendo interni e passeggeri.",
  },
  {
    q: "Che differenza c'è tra pellicola oscurante e pellicola di sicurezza?",
    a: "La pellicola oscurante lavora su privacy e comfort termico. La pellicola di sicurezza è pensata per rendere più difficile l'effrazione del vetro: in caso di rottura trattiene i frammenti e rallenta l'accesso all'abitacolo.",
  },
  {
    q: "La pellicola si può rimuovere?",
    a: "Sì, la pellicola può essere rimossa da personale esperto senza danneggiare il vetro né i fili del lunotto termico.",
  },
];

export const Route = createFileRoute("/pellicole-per-vetri/")({
  head: () => ({
    meta: [
      { title: "Pellicole oscuranti e di sicurezza per auto | Radaelli Melzo (MI)" },
      {
        name: "description",
        content:
          "Applicazione professionale di pellicole oscuranti e di sicurezza per vetri auto a Melzo, vicino a Milano. Privacy, comfort termico, protezione UV e antieffrazione.",
      },
      { property: "og:title", content: "Pellicole oscuranti per vetri auto" },
      {
        property: "og:description",
        content:
          "Pellicole omologate per privacy, riduzione del calore e sicurezza. Applicazione professionale a Melzo (MI).",
      },
      { property: "og:url", content: "/pellicole-per-vetri/" },
      { property: "og:image", content: photos.tint7 },
      { name: "twitter:image", content: photos.tint7 },
    ],
    links: [{ rel: "canonical", href: "/pellicole-per-vetri/" }],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(faqSchema(faqs)) },
    ],
  }),
  component: Pellicole,
});

function Pellicole() {
  return (
    <>
      <PageHero
        eyebrow="Servizio"
        title="Pellicole per vetri auto"
        subtitle="Oscuranti e di sicurezza: privacy, comfort termico e protezione, con applicazione professionale e pellicole omologate."
        image={photos.tint7}
        breadcrumb={[{ label: "Home", to: "/" }, { label: "Pellicole per vetri" }]}
      >
        <BtnLink to="/contatti/" size="lg">
          Richiedi un preventivo
        </BtnLink>
      </PageHero>

      <Section>
        <div className="container-x">
          <Editorial
            eyebrow="Oscuramento vetri"
            title="Estetica, privacy e comfort."
            image={photos.tintMilano}
            alt="Applicazione pellicola oscurante su vetro auto"
          >
            <p>
              L'applicazione di pellicole oscuranti sui vetri dell'auto migliora
              l'estetica del veicolo e garantisce maggiore riservatezza a chi viaggia a
              bordo e agli oggetti lasciati nell'abitacolo.
            </p>
            <p>
              Le pellicole filtrano i raggi solari, riducono il calore interno e
              proteggono i rivestimenti dallo scolorimento, migliorando il comfort
              soprattutto nei mesi estivi.
            </p>
            <p>
              Lavoriamo esclusivamente con pellicole omologate, applicate a regola d'arte
              su ogni tipologia di vetro.
            </p>
          </Editorial>
        </div>
      </Section>

      <Section dark className="pt-0 lg:pt-0">
        <div className="container-x">
          <SectionHead eyebrow="Vantaggi" title="Cosa ottieni." />
          <div className="mt-14 grid gap-px bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
            {[
              ["Privacy", "Riservatezza per passeggeri e oggetti a bordo."],
              ["Meno calore", "Riduzione della radiazione solare e della temperatura interna."],
              ["Protezione UV", "Interni protetti dallo scolorimento e dai raggi ultravioletti."],
              ["Estetica", "Una linea più pulita e omogenea su tutto il veicolo."],
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
          <Editorial
            reverse
            eyebrow="Pellicole di sicurezza"
            title="Un vetro più difficile da forzare."
            image={photos.tintSafety}
            alt="Pellicola di sicurezza per vetri auto"
          >
            <p>
              Le pellicole di sicurezza sono pensate per ostacolare i tentativi di
              effrazione: in caso di rottura trattengono i frammenti di vetro e rendono
              molto più lento e rumoroso l'accesso all'abitacolo.
            </p>
            <p>
              Una soluzione consigliata a chi lascia spesso l'auto in strada, a chi
              trasporta attrezzature di lavoro e ai veicoli commerciali.
            </p>
          </Editorial>
        </div>
      </Section>

      <Section dark>
        <div className="container-x">
          <SectionHead eyebrow="Lavorazioni" title="Alcune applicazioni." />
          <div className="mt-14">
            <Gallery
              columns={4}
              images={[
                { src: photos.tint1, alt: "Vetri oscurati su auto" },
                { src: photos.tint3, alt: "Pellicola oscurante applicata" },
                { src: photos.tint6, alt: "Jeep Renegade con vetri oscurati" },
                { src: photos.tint8, alt: "BMW X6 con pellicole oscuranti" },
                { src: photos.tintDark, alt: "Vetri oscurati Milano" },
                { src: photos.tintDark2, alt: "Vetri scuri su vettura" },
                { src: photos.tintWork, alt: "Applicazione pellicole in officina" },
                { src: photos.tintWork2, alt: "Pellicole oscuranti Milano" },
              ]}
            />
          </div>
        </div>
      </Section>

      <Section>
        <div className="container-x">
          <FaqList items={faqs} title="Pellicole: domande frequenti" />
        </div>
      </Section>

      <Reviews />

      <CtaBand
        title="Vuoi oscurare i vetri della tua auto?"
        text="Scrivici il modello del veicolo: ti indichiamo soluzione, tempi e costo."
        cta="Richiedi un preventivo"
      />
    </>
  );
}
