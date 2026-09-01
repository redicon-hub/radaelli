import { createFileRoute, Link } from "@tanstack/react-router";
import { HeroSlider } from "@/components/site/HeroSlider";
import { LeadForm } from "@/components/site/LeadForm";
import { Reveal } from "@/components/site/Reveal";
import {
  CtaBand,
  Editorial,
  FaqList,
  ProcessSteps,
  Reviews,
  Section,
  SectionHead,
  faqSchema,
  type Faq,
} from "@/components/site/sections";
import { Arrow, BtnLink, Eyebrow, Figure } from "@/components/site/ui";
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
    title: "Levabolli / Auto grandinate",
    desc: "Rimozione delle ammaccature senza riverniciatura, preservando la vernice originale.",
    to: "/levabolli-riparazione-auto-grandinate/",
    image: photos.hail1,
  },
  {
    title: "Gestione sinistri",
    desc: "Pratica con la compagnia e liquidazione diretta del danno: la burocrazia la gestiamo noi.",
    to: "/gestione-sinistri-da-grandine/",
    image: photos.hail6,
  },
  {
    title: "Pellicole oscuranti",
    desc: "Controllo solare e pellicole di sicurezza, applicate nel rispetto delle normative.",
    to: "/pellicole-per-vetri/",
    image: photos.tint6,
  },
  {
    title: "Auto di cortesia",
    desc: "Un mezzo a disposizione per tutta la durata della riparazione.",
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
      {/* HERO SLIDER */}
      <HeroSlider
        slides={[
          {
            id: "hail",
            eyebrow: "Radaelli Levabolli · Melzo / Milano",
            title: (
              <>
                La grandine passa.
                <br />
                <span className="text-brand">I segni possono sparire.</span>
              </>
            ),
            description:
              "Ripristiniamo auto danneggiate dalla grandine con tecnica levabolli, preservando quando possibile la vernice originale. Gestiamo anche la pratica assicurativa.",
            image: photos.heroHome,
            imageAlt: "Auto in lavorazione presso Radaelli Levabolli a Melzo",
            primaryCta: { label: "Ho l'auto grandinata", to: "/contatti/" },
            secondaryCta: { label: "Scopri come lavoriamo", to: "/levabolli-riparazione-auto-grandinate/" },
            badges: ["Tecnica PDR", "Gestione sinistro", "Auto di cortesia"],
          },
          {
            id: "tint",
            eyebrow: "Servizio",
            title: (
              <>
                Pellicole oscuranti
                <br />
                <span className="text-brand">per vetri auto.</span>
              </>
            ),
            description:
              "Privacy, comfort termico e protezione UV con pellicole omologate. Applicazione professionale a Melzo, vicino a Milano.",
            image: photos.tint7,
            imageAlt: "Auto con pellicole oscuranti applicate",
            primaryCta: { label: "Richiedi un preventivo", to: "/contatti/" },
            secondaryCta: { label: "Scopri il servizio", to: "/pellicole-per-vetri/" },
            badges: ["Omologate", "Privacy", "Comfort termico"],
          },
        ]}
      />

      {/* PDR EDITORIALE */}
      <Section>
        <div className="container-x">
          <Editorial
            eyebrow="Tecnica levabolli / PDR"
            title={
              <>
                Dopo la grandine
                <br /> non serve sempre riverniciare.
              </>
            }
            image={photos.hail2}
            alt="Riparazione ammaccature da grandine con tecnica levabolli"
            to="/levabolli-riparazione-auto-grandinate/"
            ctaLabel="Scopri la tecnica levabolli"
          >
            <p>
              La tecnica che utilizziamo permette di raddrizzare le ammaccature
              evitando la successiva stuccatura e riverniciatura, mantenendo in questo
              modo inalterata l'originalità dell'autovettura.
            </p>
            <ul className="grid gap-3 pt-2 sm:grid-cols-2">
              {[
                "Vernice originale preservata",
                "Intervento meno invasivo",
                "Tempi di riparazione ridotti",
                "Valore dell'auto mantenuto",
              ].map((t) => (
                <li key={t} className="flex items-start gap-3 text-foreground">
                  <span aria-hidden className="mt-2 h-1.5 w-4 shrink-0 bg-brand" />
                  <span className="text-[0.95rem] font-semibold">{t}</span>
                </li>
              ))}
            </ul>
          </Editorial>
        </div>
      </Section>

      {/* IL RISULTATO SI VEDE */}
      <Section dark>
        <div className="container-x">
          <SectionHead
            eyebrow="Lavorazioni"
            title="Il risultato si vede."
            intro="Fotografie reali delle auto passate dalla nostra officina di Melzo: pannelli grandinati, lavorazione e ripristino."
          />
          <div className="mt-14 grid gap-3 lg:grid-cols-12">
            <Reveal className="lg:col-span-7">
              <Figure src={photos.hail5} alt="Pannello grandinato prima dell'intervento" ratio="aspect-[16/10]" />
            </Reveal>
            <Reveal delay={80} className="lg:col-span-5">
              <Figure src={photos.hail7} alt="Fase di riparazione con attrezzatura levabolli" ratio="aspect-[16/10]" />
            </Reveal>
            <Reveal delay={120} className="lg:col-span-5">
              <Figure src={photos.hail4} alt="Dettaglio della carrozzeria in lavorazione" ratio="aspect-[16/10]" />
            </Reveal>
            <Reveal delay={160} className="lg:col-span-7">
              <Figure src={photos.hail3} alt="Auto ripristinata dopo riparazione levabolli" ratio="aspect-[16/10]" />
            </Reveal>
          </div>
          <Reveal className="mt-10">
            <Link
              to="/levabolli-riparazione-auto-grandinate/"
              className="group inline-flex items-center gap-3 text-[0.78rem] font-extrabold uppercase tracking-[0.16em] text-brand"
            >
              Guarda i nostri interventi
              <Arrow className="transition-transform group-hover:translate-x-1" />
            </Link>
          </Reveal>
        </div>
      </Section>

      {/* FUNNEL */}
      <Section id="funnel">
        <div className="container-x">
          <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
            <SectionHead
              eyebrow="Il percorso"
              title="Grandinata? Ci occupiamo di tutto."
            />
            <Reveal>
              <BtnLink to="/contatti/" size="lg">
                Inizia da qui
              </BtnLink>
            </Reveal>
          </div>
          <div className="mt-14">
            <ProcessSteps
              steps={[
                { title: "Contattaci", text: "Raccontaci cosa è successo, anche con qualche foto." },
                { title: "Valutiamo il danno", text: "Verifichiamo lo stato della vernice e l'applicabilità del PDR." },
                { title: "Gestiamo il sinistro", text: "Ci occupiamo della pratica con la compagnia assicurativa." },
                { title: "Ripariamo l'auto", text: "Riparazione a freddo, senza stuccatura né riverniciatura." },
                { title: "Torni alla guida", text: "Riconsegna puntuale dell'auto ripristinata." },
              ]}
            />
          </div>
        </div>
      </Section>

      {/* LEAD FORM */}
      <section className="surface-dark">
        <div className="container-x grid items-stretch gap-0 lg:grid-cols-2">
          <div className="relative min-h-[320px] lg:min-h-full">
            <img
              src={photos.hail8}
              alt="Auto grandinata in attesa di valutazione"
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
          <div className="bg-graphite p-8 sm:p-12 lg:p-16">
            <LeadForm />
          </div>
        </div>
      </section>

      {/* GESTIONE SINISTRI */}
      <Section dark>
        <div className="container-x">
          <Editorial
            eyebrow="Gestione sinistri"
            title={
              <>
                La burocrazia?
                <br /> Possiamo pensarci noi.
              </>
            }
            image={photos.workshop2}
            alt="Officina Radaelli Levabolli a Melzo"
            to="/gestione-sinistri-da-grandine/"
            ctaLabel="Come funziona"
            reverse
          >
            <p>
              Offriamo la gestione del sinistro con l'assicurazione e ci occupiamo
              della liquidazione diretta del danno da parte della compagnia.
            </p>
            <p>
              Siamo esperti di procedure burocratiche che richiedono tempo e possono
              causare preoccupazioni ai nostri clienti.{" "}
              <strong className="text-offwhite">
                Affidatevi a noi, vi risolveremo anche questo problema.
              </strong>
            </p>
          </Editorial>
        </div>
      </Section>

      {/* SERVIZI */}
      <Section>
        <div className="container-x">
          <SectionHead eyebrow="Servizi" title="Cosa facciamo." />
          <div className="mt-14 grid gap-3 md:grid-cols-2">
            {services.map((s, i) => (
              <Reveal key={s.to} delay={(i % 2) * 80}>
                <Link to={s.to} className="group relative block overflow-hidden">
                  <div className="aspect-[16/11] overflow-hidden bg-graphite">
                    <img
                      src={s.image}
                      alt={s.title}
                      loading="lazy"
                      className="img-cine opacity-90"
                    />
                  </div>
                  <div
                    aria-hidden
                    className="pointer-events-none absolute inset-0"
                    style={{
                      background:
                        "linear-gradient(180deg, transparent 35%, oklch(0.185 0.006 152 / 0.92) 100%)",
                    }}
                  />
                  <div className="absolute inset-x-0 bottom-0 p-7 lg:p-9">
                    <h3 className="h-card text-offwhite">{s.title}</h3>
                    <p className="mt-3 max-w-md text-sm leading-relaxed text-softgrey">
                      {s.desc}
                    </p>
                    <span className="mt-5 inline-flex items-center gap-3 text-[0.72rem] font-extrabold uppercase tracking-[0.18em] text-brand-bright">
                      Approfondisci
                      <Arrow className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      {/* AUTO DI CORTESIA */}
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
              "linear-gradient(90deg, oklch(0.185 0.006 152 / 0.95) 0%, oklch(0.185 0.006 152 / 0.7) 55%, oklch(0.185 0.006 152 / 0.35) 100%)",
          }}
        />
        <div className="container-x py-24 lg:py-36">
          <Reveal className="max-w-xl">
            <Eyebrow>Auto di cortesia</Eyebrow>
            <h2 className="h-section mt-5 text-offwhite">
              La tua auto si ferma.
              <br />
              Tu no.
            </h2>
            <p className="mt-6 text-softgrey">
              Mettiamo a disposizione un'auto di cortesia per tutta la durata della
              riparazione del veicolo danneggiato dalla grandine, secondo le condizioni
              indicate dall'azienda.
            </p>
            <div className="mt-8">
              <BtnLink to="/auto-sostitutiva-riparazione-grandinate/">
                Scopri il servizio
              </BtnLink>
            </div>
          </Reveal>
        </div>
      </section>

      {/* PELLICOLE */}
      <Section>
        <div className="container-x">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
            <Reveal>
              <Eyebrow>Pellicole oscuranti</Eyebrow>
              <h2 className="h-section mt-5">Comfort. Privacy. Protezione.</h2>
              <p className="lead mt-6">
                Esperienza ventennale nel settore delle applicazioni pellicole per auto,
                con film selezionati fra i maggiori produttori e posa nel rispetto delle
                normative vigenti.
              </p>
              <div className="mt-9 grid grid-cols-2 gap-px bg-border">
                {[
                  ["Sicurezza", "Le schegge restano attaccate al film."],
                  ["Comfort", "Meno abbagliamento, meno calore."],
                  ["Protezione", "Oltre il 99% dei raggi UV filtrati."],
                  ["Estetica", "Un look completamente nuovo."],
                ].map(([t, d]) => (
                  <div key={t} className="bg-background p-6">
                    <h3 className="text-sm font-extrabold uppercase tracking-[0.12em] text-brand">
                      {t}
                    </h3>
                    <p className="mt-2 text-sm text-muted-foreground">{d}</p>
                  </div>
                ))}
              </div>
              <div className="mt-9">
                <BtnLink to="/pellicole-per-vetri/" variant="ghost">
                  Scopri le pellicole
                </BtnLink>
              </div>
            </Reveal>
            <Reveal delay={90} className="grid grid-cols-2 gap-3">
              <Figure src={photos.tint1} alt="Applicazione pellicola oscurante" ratio="aspect-[3/4]" />
              <Figure
                src={photos.tint7}
                alt="Auto con vetri oscurati"
                ratio="aspect-[3/4]"
                className="mt-10"
              />
            </Reveal>
          </div>
        </div>
      </Section>

      {/* AZIENDA / TRUST */}
      <Section dark>
        <div className="container-x">
          <Editorial
            eyebrow="Azienda"
            title={
              <>
                Non ripariamo semplicemente auto.
                <br /> Ci prendiamo cura del loro valore.
              </>
            }
            image={photos.workshop1}
            alt="Il team Radaelli Levabolli al lavoro"
            to="/azienda/"
            ctaLabel="Conosci l'azienda"
          >
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
          </Editorial>
        </div>
      </Section>

      <Reviews />

      {/* JOURNAL */}
      <Section>
        <div className="container-x">
          <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
            <SectionHead eyebrow="News" title="Dal nostro garage" />
            <Reveal>
              <Link
                to="/news/"
                className="group inline-flex items-center gap-3 text-[0.78rem] font-extrabold uppercase tracking-[0.16em] text-brand"
              >
                Tutti gli articoli
                <Arrow className="transition-transform group-hover:translate-x-1" />
              </Link>
            </Reveal>
          </div>
          <div className="mt-14 grid gap-10 md:grid-cols-3">
            {journalPosts.map((p, i) => (
              <Reveal key={p.slug} delay={i * 80}>
                <Link to="/$slug/" params={{ slug: p.slug }} className="group block">
                  <Figure src={p.image} alt={p.title} ratio="aspect-[16/10]" />
                  <p className="mt-5 text-[0.68rem] font-extrabold uppercase tracking-[0.2em] text-brand">
                    {p.category} · {p.date}
                  </p>
                  <h3 className="mt-3 text-xl font-extrabold leading-tight tracking-tight transition-colors group-hover:text-brand">
                    {p.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {p.excerpt}
                  </p>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      {/* FAQ */}
      <Section dark>
        <div className="container-x">
          <FaqList items={faqs} title="Auto grandinata: le domande più frequenti" />
        </div>
      </Section>

      <CtaBand
        title="Parlaci del danno."
        text={`Siamo a ${business.street} — ${business.city} (${business.province}). Chiamaci, scrivici su WhatsApp o richiedi una valutazione online.`}
      />
    </>
  );
}
