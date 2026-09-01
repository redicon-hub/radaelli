import { createFileRoute } from "@tanstack/react-router";
import { LeadForm } from "@/components/site/LeadForm";
import { Reveal } from "@/components/site/Reveal";
import {
  CtaBand,
  Editorial,
  FaqList,
  Gallery,
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
    q: "Serve esperienza pregressa per partecipare?",
    a: "No. I corsi sono rivolti sia a professionisti del settore automobilistico che desiderano ampliare i propri servizi, sia a persone senza esperienza che vogliono avvicinarsi a questa professione.",
  },
  {
    q: "Il corso è teorico o pratico?",
    a: "Entrambi. Dopo una parte teorica sui materiali, sulle lamiere e sulla lettura del riflesso, si lavora in pratica su pannelli e su veicoli reali, con affiancamento costante.",
  },
  {
    q: "Che attrezzatura viene utilizzata?",
    a: "Durante il corso si utilizzano leve, lampada tecnica, sistemi di incollaggio e utensili professionali. Forniamo anche indicazioni su come costruire una dotazione iniziale.",
  },
  {
    q: "Dove si svolgono i corsi?",
    a: "Presso la nostra sede di Melzo, in provincia di Milano, facilmente raggiungibile da tutta la Lombardia.",
  },
  {
    q: "Al termine del corso posso lavorare come levabolli?",
    a: "Il corso fornisce le basi tecniche e la pratica necessaria per iniziare. Il livello professionale si raggiunge con l'esercizio costante; restiamo a disposizione per supporto e aggiornamenti.",
  },
];

export const Route = createFileRoute("/corsi-levabolli-milano-lombardia/")({
  head: () => ({
    meta: [
      { title: "Corsi levabolli a Milano e in Lombardia | Radaelli Levabolli" },
      {
        name: "description",
        content:
          "Corsi di formazione sulla tecnica levabolli (PDR) a Melzo, Milano: teoria e pratica su veicoli reali, per professionisti dell'auto e per chi parte da zero.",
      },
      { property: "og:title", content: "Corsi levabolli Milano e Lombardia" },
      {
        property: "og:description",
        content:
          "Impara la tecnica PDR con affiancamento pratico presso la nostra officina di Melzo (MI).",
      },
      { property: "og:url", content: "/corsi-levabolli-milano-lombardia/" },
      { property: "og:image", content: photos.course1 },
      { name: "twitter:image", content: photos.course1 },
    ],
    links: [{ rel: "canonical", href: "/corsi-levabolli-milano-lombardia/" }],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(faqSchema(faqs)) },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Course",
          name: "Corso levabolli (PDR)",
          description:
            "Corso teorico e pratico sulla tecnica levabolli per la riparazione di ammaccature senza verniciatura.",
          provider: { "@type": "Organization", name: "Radaelli Levabolli" },
          url: "/corsi-levabolli-milano-lombardia/",
        }),
      },
    ],
  }),
  component: Corsi,
});

function Corsi() {
  return (
    <>
      <PageHero
        eyebrow="Technical academy / PDR training"
        ghost="Academy"
        labels={["Teoria + pratica", "Veicoli reali", "Affiancamento in officina"]}
        title="Corsi levabolli a Milano e in Lombardia"
        subtitle="Teoria e pratica su veicoli reali, con affiancamento diretto in officina. Per professionisti dell'auto e per chi parte da zero."
        image={photos.course1}
        breadcrumb={[{ label: "Home", to: "/" }, { label: "Corsi levabolli" }]}
      >
        <BtnLink to="/contatti/" size="lg">
          Richiedi informazioni
        </BtnLink>
      </PageHero>

      <Section>
        <div className="container-x">
          <Editorial
            eyebrow="Il corso"
            title="Una tecnica che si impara con le mani."
            image={photos.course3}
            alt="Allievo durante un corso levabolli"
          >
            <p>
              La tecnica levabolli richiede sensibilità, metodo e molta pratica. Nei
              nostri corsi trasferiamo l'esperienza maturata in anni di lavoro su auto
              grandinate e piccole ammaccature.
            </p>
            <p>
              Si parte dalla lettura del riflesso e dalla comprensione del comportamento
              della lamiera, per arrivare all'uso corretto delle leve e dei sistemi di
              incollaggio su pannelli e veicoli reali.
            </p>
            <p>
              I gruppi sono ridotti: ogni partecipante lavora e viene seguito
              individualmente.
            </p>
          </Editorial>
        </div>
      </Section>

      <Section dark className="pt-0 lg:pt-0">
        <div className="container-x">
          <SectionHead eyebrow="Programma" title="Cosa impari." />
          <div className="mt-14 grid gap-px bg-white/10 sm:grid-cols-2 lg:grid-cols-3">
            {[
              ["Lettura del danno", "Illuminazione tecnica, riflesso e mappatura delle ammaccature."],
              ["Comportamento della lamiera", "Acciaio e alluminio: differenze e limiti di intervento."],
              ["Uso delle leve", "Accesso al pannello, punti di appoggio e controllo della pressione."],
              ["Sistemi di incollaggio", "Quando e come utilizzare la tecnica a trazione."],
              ["Smontaggio", "Rivestimenti, guarnizioni e rimontaggio senza danni."],
              ["Finitura e controllo", "Verifica della superficie e correzione dei residui."],
            ].map(([t, d], i) => (
              <Reveal key={t} delay={(i % 3) * 70} className="bg-carbon p-8 lg:p-10">
                <span className="font-[family-name:var(--font-display)] text-sm font-extrabold text-brand">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-5 text-base font-extrabold uppercase tracking-[0.05em] text-offwhite">
                  {t}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-mutedgrey">{d}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      <Section dark className="pt-0 lg:pt-0">
        <div className="container-x">
          <Gallery
            columns={4}
            images={[
              { src: photos.course2, alt: "Attrezzatura per corso levabolli" },
              { src: photos.course4, alt: "Esercitazione pratica su pannello" },
              { src: photos.course5, alt: "Lavorazione durante il corso" },
              { src: photos.levabolliCorsi, alt: "Corsi levabolli a Milano" },
            ]}
          />
        </div>
      </Section>

      <Section>
        <div className="container-x grid gap-14 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <h2 className="h-section">A chi è rivolto.</h2>
            <ul className="mt-8 space-y-5">
              {[
                "Carrozzieri e autoriparatori che vogliono ampliare i servizi offerti.",
                "Concessionarie e parchi auto con esigenze di ripristino interno.",
                "Persone senza esperienza che vogliono imparare una professione richiesta.",
                "Professionisti già attivi che desiderano perfezionare la tecnica.",
              ].map((t) => (
                <li key={t} className="flex items-start gap-4 border-b border-border pb-5">
                  <span aria-hidden className="mt-2.5 h-1.5 w-5 shrink-0 bg-brand" />
                  <span className="text-[1.02rem] leading-relaxed">{t}</span>
                </li>
              ))}
            </ul>
            <div className="mt-9">
              <BtnLink to="/lavoro-levabolli-corsi/" variant="ghost">
                Lavora con noi
              </BtnLink>
            </div>
          </Reveal>
          <Reveal delay={90} className="border border-border p-8 lg:p-12">
            <LeadForm variant="info" title="Richiedi informazioni sul corso" />
          </Reveal>
        </div>
      </Section>

      <Section dark>
        <div className="container-x">
          <FaqList items={faqs} title="Corsi: domande frequenti" />
        </div>
      </Section>

      <CtaBand
        title="Vuoi imparare la tecnica levabolli?"
        text="Scrivici: ti raccontiamo programma, durata e prossime disponibilità."
        cta="Informazioni sui corsi"
      />
    </>
  );
}
