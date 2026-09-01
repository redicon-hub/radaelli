import { createFileRoute, Link } from "@tanstack/react-router";
import { LeadForm } from "@/components/site/LeadForm";
import { Reveal } from "@/components/site/Reveal";
import {
  BeforeAfter,
  LabHero,
  OneContactDiagram,
  PdrMethod,
  QuickWhatsapp,
  RailGallery,
  ServiceIndex,
  SignalTimeline,
  Statement,
  StickyProcess,
  TechGrid,
  TechLabel,
} from "@/components/site/lab";
import {
  FaqList,
  Reviews,
  Section,
  faqSchema,
  type Faq,
} from "@/components/site/sections";
import { Arrow } from "@/components/site/ui";
import { business, journalPosts, photos } from "@/lib/site";

const faqs: Faq[] = [
  {
    q: "Cos'è la tecnica levabolli e come funziona?",
    a: "La tecnica levabolli, nota anche come PDR (Paintless Dent Repair), è un metodo di riparazione che consente di eliminare ammaccature dalla carrozzeria senza necessità di stuccatura o riverniciatura. Utilizzando strumenti specifici, i tecnici accedono alla parte posteriore del pannello danneggiato e, con movimenti precisi, ripristinano la forma originale del metallo. Questo processo mantiene intatta la vernice originale, preservando l'estetica e il valore dell'auto.",
  },
  {
    q: "Quanto tempo richiede la riparazione di un'auto danneggiata dalla grandine?",
    a: "Il tempo varia in base all'entità dei danni. Per ammaccature leggere, la riparazione può essere completata in poche ore. In caso di danni più estesi, potrebbe essere necessario un intervento più lungo, ma generalmente i tempi sono inferiori rispetto ai metodi tradizionali.",
  },
  {
    q: "La riparazione con tecnica levabolli è coperta dall'assicurazione?",
    a: "Molte polizze assicurative coprono i danni causati dalla grandine. È consigliabile consultare la propria compagnia assicurativa per verificare la copertura e le procedure da seguire per la richiesta di risarcimento.",
  },
  {
    q: "È disponibile un servizio di gestione dei sinistri con l'assicurazione?",
    a: "Sì. Offriamo la gestione del sinistro con l'assicurazione e ci occupiamo della liquidazione diretta del danno da parte della compagnia: lasciateci la vostra auto danneggiata e penseremo noi alla riparazione e alla pratica assicurativa.",
  },
  {
    q: "È possibile richiedere un'auto di cortesia durante la riparazione?",
    a: "Offriamo un servizio di auto di cortesia per tutta la durata della riparazione del veicolo danneggiato dalla grandine, così da permetterti di continuare le tue attività quotidiane senza interruzioni.",
  },
];

const services = [
  {
    code: "01",
    kicker: "PDR / Paintless dent repair",
    title: "Auto grandinate",
    text: "Rimozione delle ammaccature senza riverniciatura, preservando la vernice originale.",
    to: "/levabolli-riparazione-auto-grandinate/",
    image: photos.hail1,
  },
  {
    code: "02",
    kicker: "Claim management",
    title: "Gestione sinistri",
    text: "Pratica con la compagnia e liquidazione diretta del danno: la burocrazia la gestiamo noi.",
    to: "/gestione-sinistri-da-grandine/",
    image: photos.hail6,
  },
  {
    code: "03",
    kicker: "Window film",
    title: "Pellicole oscuranti",
    text: "Controllo solare e pellicole di sicurezza, applicate nel rispetto delle normative.",
    to: "/pellicole-per-vetri/",
    image: photos.tint6,
  },
  {
    code: "04",
    kicker: "Mobility",
    title: "Auto di cortesia",
    text: "Un mezzo a disposizione per tutta la durata della riparazione.",
    to: "/auto-sostitutiva-riparazione-grandinate/",
    image: photos.courtesyCar,
  },
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title: "Riparazione auto grandinate e pellicole oscuranti | Radaelli Levabolli",
      },
      {
        name: "description",
        content:
          "Riparazione auto grandinate con tecnica levabolli (PDR) a Melzo, Milano. Gestione del sinistro assicurativo, auto di cortesia e pellicole oscuranti per vetri.",
      },
      {
        property: "og:title",
        content: "Riparazione auto grandinate e pellicole oscuranti | Radaelli Levabolli",
      },
      {
        property: "og:description",
        content:
          "Specialisti dell'auto grandinata: tecnica levabolli, gestione sinistro e auto di cortesia. Melzo (MI).",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:url", content: "/" },
      { property: "og:image", content: photos.heroHome },
      { name: "twitter:image", content: photos.heroHome },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [{ type: "application/ld+json", children: JSON.stringify(faqSchema(faqs)) }],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      {/* ------------------------------------------------ HERO / SCANNER */}
      <LabHero
        image={photos.heroHome}
        imageAlt="Carrozzeria in lavorazione presso Radaelli Levabolli a Melzo"
        index="00 / SURFACE"
        ghost="PDR"
        title={
          <>
            La grandine
            <br />
            lascia il segno.
            <br />
            <span className="text-brand">Noi lo cancelliamo.</span>
          </>
        }
        intro="Riparazione auto grandinate con tecnica levabolli a Melzo, Milano. La lamiera torna planare, la vernice originale resta dov'è."
        labels={[
          "PDR / Paintless dent repair",
          "45°28′ · Surface control",
          "Original paint / preserved",
          "Melzo · Milano",
          "Gestione sinistro inclusa",
        ]}
        primary={{ label: "Ho l'auto grandinata", to: "/contatti/" }}
        secondary={{ label: "Il metodo Radaelli", to: "/levabolli-riparazione-auto-grandinate/" }}
      />

      {/* ------------------------------------------------ STATEMENT 01 */}
      <Statement
        kicker="Original paint / preserved"
        lines={["La vernice originale", "è parte del valore", "della tua auto."]}
        image={photos.hail2}
        imageAlt="Dettaglio di carrozzeria durante la riparazione levabolli"
        note={
          <>
            <strong className="block text-offwhite">No stucco</strong>
            <strong className="block text-offwhite">No verniciatura*</strong>
            <strong className="block text-offwhite">No compromessi</strong>
            <span className="mt-3 block text-mutedgrey">
              *quando la tecnica PDR è applicabile.
            </span>
          </>
        }
        cta={{ label: "Scopri il metodo Radaelli", to: "/levabolli-riparazione-auto-grandinate/" }}
      />

      {/* ------------------------------------------------ THE PDR METHOD */}
      <PdrMethod />

      {/* ------------------------------------------------ BEFORE / AFTER */}
      <section className="relative overflow-hidden py-24 lg:py-32">
        <div className="container-x">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <TechLabel>Comparison / same panel</TechLabel>
              <h2 className="h-xl mt-6">
                Prima. Dopo.
                <br />
                <span className="text-brand">Nessuna verniciatura.</span>
              </h2>
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
              Fotografie reali di auto passate dalla nostra officina di Melzo.
              Trascina l'indicatore per leggere la differenza sulla superficie.
            </p>
          </div>
        </div>

        <div className="mt-12">
          <BeforeAfter
            before={photos.hail5}
            after={photos.hail3}
            beforeAlt="Pannello grandinato prima dell'intervento levabolli"
            afterAlt="Carrozzeria ripristinata dopo la riparazione levabolli"
            className="h-[62svh] w-full lg:h-[82svh]"
          />
        </div>

        <div className="container-x mt-10">
          <RailGallery
            label="Scorri le lavorazioni"
            images={[
              { src: photos.hail4, alt: "Dettaglio della carrozzeria in lavorazione" },
              { src: photos.hail7, alt: "Fase di riparazione con attrezzatura levabolli" },
              { src: photos.hail1, alt: "Auto grandinata a Milano in valutazione" },
              { src: photos.hail6, alt: "Auto grandinata pronta per la lavorazione" },
              { src: photos.workshop3, alt: "Officina Radaelli Levabolli a Melzo" },
            ]}
          />
        </div>
      </section>

      {/* ------------------------------------------------ STATEMENT 02 */}
      <Statement
        kicker="Quality standard"
        lines={["Il miglior intervento", "è quello che", "non si vede."]}
        image={photos.workshop5}
        imageAlt="Superficie della carrozzeria controllata in luce radente"
      />

      {/* ------------------------------------------------ STICKY PROCESS */}
      <StickyProcess
        kicker="Process / surface restoration"
        title={
          <>
            Cinque passaggi tra la grandine
            <br className="hidden lg:block" /> e una superficie perfetta.
          </>
        }
        steps={[
          {
            code: "01",
            title: "Analisi",
            text: "Verifichiamo lo stato del film di vernice, la profondità di ogni bollo e l'applicabilità della tecnica levabolli.",
            image: photos.hail5,
          },
          {
            code: "02",
            title: "Accesso",
            text: "Studiamo il punto di accesso al retro del pannello, smontando solo ciò che è strettamente necessario.",
            image: photos.workshop1,
          },
          {
            code: "03",
            title: "Micro-pressione",
            text: "Con leve dedicate applichiamo micro-pressioni calibrate: la lamiera viene riportata in forma senza stress della vernice.",
            image: photos.hail7,
          },
          {
            code: "04",
            title: "Controllo superficie",
            text: "Le linee di riflessione confermano la planarità del pannello in luce radente, millimetro per millimetro.",
            image: photos.workshop5,
          },
          {
            code: "05",
            title: "Ripristino",
            text: "Rimontaggio, pulizia e riconsegna nei tempi concordati: l'auto torna con la sua vernice originale.",
            image: photos.hail3,
          },
        ]}
      />

      {/* ------------------------------------------------ CLAIM INTERMEDIO */}
      <Statement
        dark={false}
        kicker="Point of view"
        lines={["Tu vedi decine di bolli.", "Noi vediamo una superficie", "da ripristinare."]}
      />

      {/* ------------------------------------------------ FUNNEL GRANDINE */}
      <section className="surface-dark relative overflow-hidden py-24 lg:py-32">
        <TechGrid className="opacity-40" />
        <div className="container-x relative">
          <div className="border-b border-white/12 pb-8">
            <TechLabel>Hail workflow / 06 steps</TechLabel>
            <h2 className="h-xl mt-6 text-offwhite">
              Grandine.
              <br />
              Da problema <span className="text-brand">a pratica risolta.</span>
            </h2>
          </div>
          <div className="mt-16">
            <SignalTimeline
              steps={[
                { code: "01", title: "Impatto", text: "La grandinata colpisce: fotografa subito l'auto." },
                { code: "02", title: "Contatto", text: "Raccontaci cosa è successo, anche con qualche foto." },
                { code: "03", title: "Valutazione", text: "Verifichiamo lo stato della vernice e l'applicabilità del PDR." },
                { code: "04", title: "Assicurazione", text: "Ci occupiamo della pratica con la compagnia assicurativa." },
                { code: "05", title: "Riparazione", text: "Riparazione a freddo, senza stuccatura né riverniciatura." },
                { code: "06", title: "Consegna", text: "Riconsegna puntuale dell'auto ripristinata." },
              ]}
            />
          </div>
        </div>
      </section>

      {/* ------------------------------------------------ FORM / CLAIM */}
      <section id="valutazione" className="surface-dark relative isolate overflow-hidden border-t border-white/10">
        <img
          src={photos.hail8}
          alt=""
          aria-hidden
          loading="lazy"
          className="absolute inset-0 -z-20 h-full w-full object-cover opacity-25"
        />
        <div
          aria-hidden
          className="absolute inset-0 -z-10"
          style={{ background: "var(--gradient-hero)" }}
        />
        <div className="container-x grid gap-14 py-24 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20 lg:py-32">
          <div>
            <TechLabel>Damage intake</TechLabel>
            <h2 className="h-xl mt-6 text-offwhite">
              Facci vedere
              <br />
              <span className="text-brand">il danno.</span>
            </h2>
            <p className="mt-7 max-w-md text-lg leading-relaxed text-softgrey">
              Carica qualche fotografia. Al resto pensiamo insieme.
            </p>
            <div className="mt-10 max-w-md">
              <QuickWhatsapp />
            </div>
            <dl className="mt-10 grid max-w-md grid-cols-2 gap-px bg-white/12">
              {[
                ["Risposta", "In giornata lavorativa"],
                ["Sinistro", "Gestito da noi"],
                ["Auto di cortesia", "Su disponibilità"],
                ["Sede", "Melzo · Milano"],
              ].map(([t, d]) => (
                <div key={t} className="bg-carbon p-5">
                  <dt className="text-[0.62rem] font-extrabold uppercase tracking-[0.22em] text-brand">
                    {t}
                  </dt>
                  <dd className="mt-2 text-sm text-softgrey">{d}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="border border-white/12 bg-carbon/80 p-7 backdrop-blur-sm sm:p-10 lg:p-12">
            <LeadForm
              title="Richiedi la valutazione"
              intro="Bastano meno di un minuto e qualche foto per iniziare."
            />
          </div>
        </div>
      </section>

      {/* ------------------------------------------------ GESTIONE SINISTRI */}
      <Section>
        <div className="container-x">
          <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:gap-20">
            <Reveal>
              <TechLabel>One problem · one contact</TechLabel>
              <h2 className="h-xl mt-6">
                Un solo referente.
                <br />
                Dalla grandine
                <br />
                <span className="text-brand">alla riconsegna.</span>
              </h2>
            </Reveal>
            <Reveal delay={80} className="space-y-6 text-[1.02rem] leading-relaxed text-muted-foreground">
              <p>
                Offriamo la gestione del sinistro con l'assicurazione e ci occupiamo
                della liquidazione diretta del danno da parte della compagnia.
              </p>
              <p>
                Siamo esperti di procedure burocratiche che richiedono tempo e possono
                causare preoccupazioni ai nostri clienti.{" "}
                <strong className="text-foreground">
                  Affidatevi a noi, vi risolveremo anche questo problema.
                </strong>
              </p>
              <Link
                to="/gestione-sinistri-da-grandine/"
                className="group inline-flex items-center gap-3 text-[0.76rem] font-extrabold uppercase tracking-[0.18em] text-brand"
              >
                Come funziona
                <Arrow className="transition-transform group-hover:translate-x-1" />
              </Link>
            </Reveal>
          </div>
          <Reveal className="mt-16">
            <OneContactDiagram />
          </Reveal>
        </div>
      </Section>

      {/* ------------------------------------------------ SERVIZI EDITORIALI */}
      <Section className="pt-0">
        <div className="container-x">
          <div className="mb-12 flex items-end justify-between gap-6 border-b border-current/15 pb-6">
            <TechLabel>Index / services</TechLabel>
            <TechLabel tick={false}>04 lavorazioni</TechLabel>
          </div>
          <ServiceIndex items={services} />
        </div>
      </Section>

      {/* ------------------------------------------------ AUTO DI CORTESIA */}
      <section className="surface-dark relative isolate overflow-hidden">
        <img
          src={photos.courtesyCar}
          alt="Auto di cortesia Radaelli Levabolli"
          loading="lazy"
          className="absolute inset-0 -z-20 h-full w-full object-cover"
        />
        <div
          aria-hidden
          className="absolute inset-0 -z-10"
          style={{
            background:
              "linear-gradient(90deg, oklch(0.185 0.006 152 / 0.95) 0%, oklch(0.185 0.006 152 / 0.7) 55%, oklch(0.185 0.006 152 / 0.3) 100%)",
          }}
        />
        <div className="container-x py-24 lg:py-36">
          <Reveal className="max-w-xl">
            <TechLabel>Mobility / courtesy car</TechLabel>
            <h2 className="h-xl mt-6 text-offwhite">
              La tua auto si ferma.
              <br />
              <span className="text-brand">Tu no.</span>
            </h2>
            <p className="mt-6 max-w-md text-softgrey">
              Mettiamo a disposizione un'auto di cortesia per tutta la durata della
              riparazione del veicolo danneggiato dalla grandine, secondo le condizioni
              indicate dall'azienda.
            </p>
            <Link to="/auto-sostitutiva-riparazione-grandinate/" className="btn-signal mt-9">
              Scopri il servizio
              <Arrow className="h-3.5 w-3.5" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ------------------------------------------------ PELLICOLE */}
      <Section>
        <div className="container-x">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.05fr] lg:gap-20">
            <Reveal>
              <TechLabel>Window film / dark glass</TechLabel>
              <h2 className="h-xl mt-6">
                Comfort. Privacy.
                <br />
                <span className="text-brand">Protezione.</span>
              </h2>
              <p className="lead mt-7">
                Esperienza ventennale nel settore delle applicazioni pellicole per auto,
                con film selezionati fra i maggiori produttori e posa nel rispetto delle
                normative vigenti.
              </p>
              <ul className="mt-10">
                {[
                  ["Sicurezza", "Le schegge restano attaccate al film."],
                  ["Comfort", "Meno abbagliamento, meno calore."],
                  ["Protezione", "Oltre il 99% dei raggi UV filtrati."],
                  ["Estetica", "Un look completamente nuovo."],
                ].map(([t, d]) => (
                  <li
                    key={t}
                    className="flex flex-wrap items-baseline gap-x-6 gap-y-1 border-t border-current/15 py-4 last:border-b"
                  >
                    <span className="w-32 text-[0.7rem] font-extrabold uppercase tracking-[0.2em] text-brand">
                      {t}
                    </span>
                    <span className="text-sm text-muted-foreground">{d}</span>
                  </li>
                ))}
              </ul>
              <Link to="/pellicole-per-vetri/" className="btn-wire mt-9 text-foreground">
                Scopri le pellicole
              </Link>
            </Reveal>
            <Reveal delay={90} className="relative">
              <img
                src={photos.tint7}
                alt="Auto con vetri oscurati"
                loading="lazy"
                className="aspect-[4/5] w-full object-cover"
              />
              <img
                src={photos.tint1}
                alt="Applicazione della pellicola oscurante"
                loading="lazy"
                className="absolute -bottom-8 -left-6 hidden w-40 object-cover shadow-[var(--shadow-panel)] lg:block lg:w-56"
              />
            </Reveal>
          </div>
        </div>
      </Section>

      {/* ------------------------------------------------ AZIENDA */}
      <section className="surface-dark relative isolate overflow-hidden py-24 lg:py-32">
        <span aria-hidden className="ghost-word right-[-4%] top-[8%]">
          Original
        </span>
        <div className="container-x relative grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
          <Reveal>
            <img
              src={photos.workshop1}
              alt="Il team Radaelli Levabolli al lavoro"
              loading="lazy"
              className="aspect-[5/4] w-full object-cover"
            />
          </Reveal>
          <Reveal delay={80}>
            <TechLabel>Lab / since 2003</TechLabel>
            <h2 className="h-xl mt-6 text-offwhite">
              Non ripariamo auto.
              <br />
              <span className="text-brand">Ne difendiamo il valore.</span>
            </h2>
            <div className="mt-7 space-y-5 text-[1.02rem] leading-relaxed text-softgrey">
              <p>
                Siamo un team di professionisti appassionati di automobili, che ha sempre
                operato nel settore dell'autoriparazione. Il nostro obiettivo primario è
                soddisfare al meglio le richieste dei clienti con un servizio efficiente e
                di qualità.
              </p>
              <p>
                La vostra auto è custodita in un ambiente ordinato, pulito e sicuro. La
                serietà e la puntualità nella consegna dei lavori sono i nostri punti di
                forza.
              </p>
            </div>
            <Link
              to="/azienda/"
              className="group mt-9 inline-flex items-center gap-3 text-[0.76rem] font-extrabold uppercase tracking-[0.18em] text-brand"
            >
              Conosci l'azienda
              <Arrow className="transition-transform group-hover:translate-x-1" />
            </Link>
          </Reveal>
        </div>
      </section>

      <Reviews />

      {/* ------------------------------------------------ NEWS */}
      <Section>
        <div className="container-x">
          <div className="flex items-end justify-between gap-6 border-b border-current/15 pb-6">
            <TechLabel>Journal / automotive</TechLabel>
            <Link
              to="/news/"
              className="group inline-flex items-center gap-3 text-[0.72rem] font-extrabold uppercase tracking-[0.18em] text-brand"
            >
              Tutti gli articoli
              <Arrow className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
          <div className="mt-12 grid gap-10 md:grid-cols-3">
            {journalPosts.map((p, i) => (
              <Reveal key={p.slug} delay={i * 80} className={i === 1 ? "md:mt-14" : undefined}>
                <Link to="/$slug/" params={{ slug: p.slug }} className="group block">
                  <div className="overflow-hidden bg-graphite">
                    <img
                      src={p.image}
                      alt={p.title}
                      loading="lazy"
                      className="img-cine aspect-[16/11]"
                    />
                  </div>
                  <p className="mt-5 text-[0.64rem] font-extrabold uppercase tracking-[0.22em] text-brand">
                    {p.category} · {p.date}
                  </p>
                  <h3 className="mt-3 text-xl font-extrabold leading-tight tracking-tight transition-colors group-hover:text-brand">
                    {p.title}
                  </h3>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      {/* ------------------------------------------------ FAQ */}
      <Section dark>
        <div className="container-x">
          <FaqList items={faqs} title="Domande frequenti" />
        </div>
      </Section>

      {/* ------------------------------------------------ CTA FINALE */}
      <section className="relative isolate overflow-hidden border-t border-current/15">
        <div className="container-x flex flex-col gap-10 py-20 lg:flex-row lg:items-end lg:justify-between lg:py-28">
          <div>
            <TechLabel>Start here</TechLabel>
            <h2 className="h-xl mt-6 max-w-2xl">
              Parliamo
              <br />
              <span className="text-brand">della tua auto.</span>
            </h2>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link to="/contatti/" className="btn-signal">
              Richiedi una valutazione
              <Arrow className="h-3.5 w-3.5" />
            </Link>
            <a href={business.phoneHref} className="btn-wire text-foreground">
              {business.phone}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
