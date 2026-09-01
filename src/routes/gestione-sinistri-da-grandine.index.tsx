import { createFileRoute } from "@tanstack/react-router";
import { LeadForm } from "@/components/site/LeadForm";
import { Reveal } from "@/components/site/Reveal";
import {
  CtaBand,
  Editorial,
  FaqList,
  PageHero,
  ProcessSteps,
  Section,
  SectionHead,
  faqSchema,
  type Faq,
} from "@/components/site/sections";
import {
  OneContactDiagram,
  QuickWhatsapp,
  Statement,
  TechLabel,
} from "@/components/site/lab";
import { BtnLink } from "@/components/site/ui";
import { photos } from "@/lib/site";

const faqs: Faq[] = [
  {
    q: "La mia assicurazione copre i danni da grandine?",
    a: "I danni da grandine sono coperti dalla garanzia \"Eventi atmosferici\" (o \"Eventi naturali\"), una garanzia accessoria della polizza auto. Se è presente nel contratto, la compagnia risarcisce il danno secondo massimali e franchigie previsti.",
  },
  {
    q: "Cosa devo fare subito dopo la grandinata?",
    a: "Fotografa il veicolo, prendi nota di data, ora e luogo dell'evento e apri la denuncia di sinistro alla tua compagnia entro i termini di polizza. Poi contattaci: valutiamo il danno e ci occupiamo del resto.",
  },
  {
    q: "Cosa significa liquidazione diretta del danno?",
    a: "Significa che la compagnia assicurativa liquida direttamente a noi l'importo della riparazione: tu non anticipi l'intero costo e non devi rincorrere rimborsi.",
  },
  {
    q: "Serve la perizia?",
    a: "Nella maggior parte dei casi la compagnia incarica un perito. Prepariamo la documentazione fotografica e la valutazione tecnica, e seguiamo il sopralluogo del perito presso la nostra sede.",
  },
  {
    q: "Perdo la classe di merito?",
    a: "La garanzia eventi atmosferici non incide sulla classe di merito bonus/malus, che riguarda la responsabilità civile. Verifica comunque le condizioni della tua polizza.",
  },
];

export const Route = createFileRoute("/gestione-sinistri-da-grandine/")({
  head: () => ({
    meta: [
      { title: "Gestione sinistri da grandine con l'assicurazione | Radaelli" },
      {
        name: "description",
        content:
          "Ci occupiamo della gestione del sinistro con l'assicurazione e della liquidazione diretta del danno da grandine: pratica, perizia e riparazione in un unico interlocutore.",
      },
      { property: "og:title", content: "Gestione sinistri da grandine" },
      {
        property: "og:description",
        content:
          "Gestione della pratica assicurativa e liquidazione diretta del danno da parte della compagnia.",
      },
      { property: "og:url", content: "/gestione-sinistri-da-grandine/" },
      { property: "og:image", content: photos.hail8 },
      { name: "twitter:image", content: photos.hail8 },
    ],
    links: [{ rel: "canonical", href: "/gestione-sinistri-da-grandine/" }],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(faqSchema(faqs)) },
    ],
  }),
  component: Sinistri,
});

function Sinistri() {
  return (
    <>
      <PageHero
        eyebrow="Service design / claim management"
        ghost="Claim"
        labels={["Liquidazione diretta", "Perizia in sede", "Auto di cortesia"]}
        title="Gestione sinistri da grandine"
        subtitle="Gestiamo la pratica con la tua compagnia assicurativa e la liquidazione diretta del danno. Tu pensi a guidare."
        image={photos.hail8}
        breadcrumb={[{ label: "Home", to: "/" }, { label: "Gestione sinistri" }]}
      >
        <BtnLink to="/contatti/" size="lg">
          Apri la pratica con noi
        </BtnLink>
      </PageHero>

      <Section>
        <div className="container-x">
          <Editorial
            eyebrow="Il servizio"
            title="Un solo interlocutore, dalla denuncia alla consegna."
            image={photos.hail6}
            alt="Auto danneggiata dalla grandine in officina"
          >
            <p>
              Offriamo la gestione del sinistro con l'assicurazione e la liquidazione
              diretta del danno da parte della compagnia: ci occupiamo della
              documentazione, del rapporto con il perito e della riparazione.
            </p>
            <p>
              Il cliente non deve rincorrere pratiche e rimborsi: raccogliamo le
              informazioni necessarie, produciamo il rilievo fotografico del danno e
              seguiamo l'iter fino alla chiusura.
            </p>
            <p>
              Durante la lavorazione è disponibile, su richiesta, un'auto di cortesia.
            </p>
          </Editorial>
        </div>
      </Section>

      <Statement
        kicker="One problem · one contact"
        lines={["Un solo referente.", "Dalla grandine", "alla riconsegna."]}
        image={photos.hail6}
        imageAlt="Auto danneggiata dalla grandine in officina"
      />

      <Section>
        <div className="container-x">
          <OneContactDiagram />
        </div>
      </Section>

      <Section dark>
        <div className="container-x">
          <SectionHead
            eyebrow="Iter / 05 steps"
            title="Come procediamo."
            intro="Cinque passaggi chiari, senza sorprese."
          />
          <div className="mt-14">
            <ProcessSteps
              dark
              steps={[
                { title: "Denuncia", text: "Apertura del sinistro alla compagnia con data e luogo dell'evento." },
                { title: "Rilievo", text: "Documentazione fotografica e valutazione tecnica del danno." },
                { title: "Perizia", text: "Sopralluogo del perito presso la nostra sede." },
                { title: "Autorizzazione", text: "Conferma dell'importo e liquidazione diretta." },
                { title: "Riparazione", text: "Intervento levabolli e consegna del veicolo." },
              ]}
            />
          </div>
        </div>
      </Section>

      <Section>
        <div className="container-x grid gap-14 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <TechLabel>Checklist / documenti</TechLabel>
            <h2 className="h-xl mt-6">Cosa serve per iniziare.</h2>
            <ul className="mt-8 space-y-5">
              {[
                "Numero di polizza e compagnia assicurativa.",
                "Data, ora e comune in cui si è verificata la grandinata.",
                "Libretto di circolazione del veicolo.",
                "Fotografie del danno (se disponibili).",
              ].map((t) => (
                <li key={t} className="flex items-start gap-4 border-b border-border pb-5">
                  <span aria-hidden className="mt-2.5 h-1.5 w-5 shrink-0 bg-brand" />
                  <span className="text-[1.02rem] leading-relaxed">{t}</span>
                </li>
              ))}
            </ul>
            <div className="mt-9 flex flex-wrap gap-3">
              <BtnLink to="/auto-sostitutiva-riparazione-grandinate/" variant="ghost">
                Auto di cortesia
              </BtnLink>
              <BtnLink to="/levabolli-riparazione-auto-grandinate/" variant="ghost">
                Come ripariamo
              </BtnLink>
            </div>
          </Reveal>
          <Reveal delay={90}>
            <div className="border border-current/20 p-8 lg:p-12">
              <LeadForm />
            </div>
            <QuickWhatsapp className="mt-4" />
          </Reveal>
        </div>
      </Section>

      <Section dark>
        <div className="container-x">
          <FaqList items={faqs} title="Sinistri e assicurazione: domande frequenti" />
        </div>
      </Section>

      <CtaBand
        title="Hai già aperto il sinistro?"
        text="Portaci il numero di pratica: seguiamo noi il resto."
        cta="Contattaci"
      />
    </>
  );
}
