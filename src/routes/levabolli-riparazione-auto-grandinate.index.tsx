import { createFileRoute } from "@tanstack/react-router";
import { LeadForm } from "@/components/site/LeadForm";
import { Reveal } from "@/components/site/Reveal";
import {
  BeforeAfter,
  PdrMethod,
  QuickWhatsapp,
  RailGallery,
  Statement,
  TechLabel,
} from "@/components/site/lab";
import {
  CtaBand,
  Editorial,
  FaqList,
  PageHero,
  ProcessSteps,
  Reviews,
  Section,
  SectionHead,
  faqSchema,
  type Faq,
} from "@/components/site/sections";
import { BtnLink, Eyebrow } from "@/components/site/ui";
import { photos } from "@/lib/site";


const faqs: Faq[] = [
  {
    q: "Cos'è la tecnica levabolli e come funziona?",
    a: "La tecnica levabolli, nota anche come PDR (Paintless Dent Repair), è un metodo di riparazione che consente di eliminare ammaccature dalla carrozzeria senza necessità di stuccatura o riverniciatura. Utilizzando strumenti specifici, i tecnici accedono alla parte posteriore del pannello danneggiato e, con movimenti precisi, ripristinano la forma originale del metallo. Questo processo mantiene intatta la vernice originale, preservando l'estetica e il valore dell'auto.",
  },
  {
    q: "Quali sono i vantaggi della tecnica levabolli rispetto ai metodi tradizionali?",
    a: "I principali vantaggi includono la conservazione della vernice originale, tempi di riparazione più rapidi e costi inferiori. Poiché non si utilizzano stucco o vernici, si evita il rischio di differenze cromatiche e si riduce l'impatto ambientale. Inoltre, l'auto mantiene il suo valore di mercato, essendo priva di interventi invasivi.",
  },
  {
    q: "È possibile riparare qualsiasi tipo di ammaccatura con questa tecnica?",
    a: "La tecnica è efficace per la maggior parte delle ammaccature causate da grandine o piccoli urti, purché la vernice non sia danneggiata. Tuttavia, in caso di danni estesi o vernice scheggiata, potrebbe essere necessario ricorrere a metodi tradizionali di riparazione.",
  },
  {
    q: "La tecnica levabolli è adatta a tutti i tipi di veicoli?",
    a: "Sì, la tecnica può essere applicata a una vasta gamma di veicoli, inclusi quelli con pannelli in alluminio. È importante che la vernice sia intatta e che l'accesso alla parte posteriore del pannello sia possibile per effettuare la riparazione.",
  },
  {
    q: "Quanto tempo richiede la riparazione di un'auto danneggiata dalla grandine?",
    a: "Il tempo varia in base all'entità dei danni. Per ammaccature leggere, la riparazione può essere completata in poche ore. In caso di danni più estesi, potrebbe essere necessario un intervento più lungo, ma generalmente i tempi sono inferiori rispetto ai metodi tradizionali.",
  },
  {
    q: "È necessario smontare parti dell'auto per effettuare la riparazione?",
    a: "In alcuni casi, per accedere correttamente all'area danneggiata, potrebbe essere necessario smontare rivestimenti interni o altre componenti. Tuttavia, i tecnici esperti effettuano queste operazioni con cura, garantendo il ripristino delle parti smontate al termine dell'intervento.",
  },
  {
    q: "La riparazione con tecnica levabolli è coperta dall'assicurazione?",
    a: "Molte polizze assicurative coprono i danni causati dalla grandine. È consigliabile consultare la propria compagnia assicurativa per verificare la copertura e le procedure da seguire per la richiesta di risarcimento.",
  },
  {
    q: "È disponibile un servizio di gestione dei sinistri con l'assicurazione?",
    a: "Offriamo la gestione del sinistro con l'assicurazione e la liquidazione diretta del danno da parte della compagnia, semplificando le pratiche burocratiche per il cliente.",
  },
  {
    q: "È possibile richiedere un'auto di cortesia durante la riparazione?",
    a: "Offriamo un servizio di auto di cortesia per i clienti durante il periodo di intervento. È consigliabile informarsi in anticipo sulla disponibilità del servizio e sulle eventuali condizioni associate.",
  },
  {
    q: "È possibile imparare la tecnica levabolli attraverso corsi di formazione?",
    a: "Sì, esistono corsi di formazione dedicati all'apprendimento della tecnica levabolli. Questi corsi sono rivolti sia a professionisti del settore automobilistico sia a persone senza esperienza, offrendo sia teoria che pratica su veicoli reali.",
  },
];

export const Route = createFileRoute("/levabolli-riparazione-auto-grandinate/")({
  head: () => ({
    meta: [
      {
        title: "Levabolli Riparazione Auto Grandinate | Radaelli — Melzo (MI)",
      },
      {
        name: "description",
        content:
          "Riparazione auto grandinate con tecnica levabolli (PDR): raddrizziamo le ammaccature senza stuccatura né riverniciatura, mantenendo l'originalità dell'autovettura.",
      },
      { property: "og:title", content: "Levabolli Riparazione Auto Grandinate" },
      {
        property: "og:description",
        content:
          "Tecnica PDR per auto grandinate: vernice originale preservata, tempi e costi ridotti. Gestione del sinistro inclusa.",
      },
      { property: "og:url", content: "/levabolli-riparazione-auto-grandinate/" },
      { property: "og:image", content: photos.hail1 },
      { name: "twitter:image", content: photos.hail1 },
    ],
    links: [{ rel: "canonical", href: "/levabolli-riparazione-auto-grandinate/" }],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(faqSchema(faqs)) },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Levabolli — riparazione auto grandinate",
          serviceType: "Paintless Dent Repair (PDR)",
          areaServed: "Milano, Lombardia",
          provider: { "@type": "AutoRepair", name: "Radaelli Levabolli" },
          url: "/levabolli-riparazione-auto-grandinate/",
        }),
      },
    ],
  }),
  component: Levabolli,
});

function Levabolli() {
  return (
    <>
      <PageHero
        eyebrow="Servizio principale"
        title="Levabolli Riparazione Auto Grandinate"
        subtitle="Raddrizziamo le ammaccature da grandine senza stuccatura né riverniciatura, mantenendo inalterata l'originalità della tua auto."
        image={photos.hail1}
        breadcrumb={[
          { label: "Home", to: "/" },
          { label: "Levabolli auto grandinate" },
        ]}
      >
        <BtnLink to="/contatti/" size="lg">
          Richiedi una valutazione
        </BtnLink>
      </PageHero>

      <Section>
        <div className="container-x">
          <Editorial
            eyebrow="La tecnica"
            title="Cosa significa tecnica levabolli."
            image={photos.hail2}
            alt="Tecnico al lavoro con attrezzatura levabolli"
          >
            <p>
              La tecnica che utilizziamo ci permette di raddrizzare le ammaccature,
              evitando la successiva stuccatura e riverniciatura, mantenendo in questo
              modo inalterata l'originalità dell'autovettura.
            </p>
            <p>
              La lunga esperienza maturata nel settore dell'autoriparazione ha permesso a
              me e ai miei collaboratori di metterci al servizio di quelle carrozzerie,
              concessionarie o parchi auto che necessitano dell'ausilio di tecnici
              specializzati per il ripristino di auto danneggiate dalla grandine, o di
              quelle che hanno subito piccoli urti accidentali senza riportare danni alla
              verniciatura.
            </p>
            <p>
              Eseguiamo riparazioni anche per <strong>privati</strong>, sia per auto
              grandinate che per piccole ammaccature, presso la nostra sede sita in Melzo,
              previo appuntamento.
            </p>
          </Editorial>
        </div>
      </Section>

      <Section dark className="pt-0 lg:pt-0">
        <div className="container-x">
          <SectionHead eyebrow="Vantaggi" title="Perché conviene." />
          <div className="mt-14 grid gap-px bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
            {[
              ["Vernice originale", "Nessuna stuccatura, nessuna riverniciatura: niente differenze cromatiche."],
              ["Tempi ridotti", "Un notevole risparmio di tempo rispetto ai metodi tradizionali."],
              ["Costi inferiori", "Meno materiali e meno lavorazioni, quando la tecnica è applicabile."],
              ["Valore mantenuto", "L'auto resta priva di interventi invasivi sulla carrozzeria."],
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
        <div className="container-x grid gap-14 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <Eyebrow>Applicabilità</Eyebrow>
            <h2 className="h-section mt-5">Quando è possibile utilizzarla.</h2>
            <ul className="mt-8 space-y-5">
              {[
                "La vernice del pannello è integra e non scheggiata.",
                "È possibile accedere alla parte posteriore del pannello danneggiato.",
                "Ammaccature da grandine o piccoli urti accidentali senza danni alla verniciatura.",
                "Anche su vetture con parti o scocca interamente in alluminio.",
              ].map((t) => (
                <li key={t} className="flex items-start gap-4 border-b border-border pb-5">
                  <span aria-hidden className="mt-2.5 h-1.5 w-5 shrink-0 bg-brand" />
                  <span className="text-[1.02rem] leading-relaxed">{t}</span>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
              In caso di danni estesi o vernice scheggiata potrebbe essere necessario
              ricorrere ai metodi tradizionali di riparazione: lo valutiamo insieme prima
              di iniziare.
            </p>
          </Reveal>
          <Reveal delay={90}>
            <Eyebrow>Il processo</Eyebrow>
            <h2 className="h-section mt-5">Come avviene la riparazione.</h2>
            <ol className="mt-8 space-y-6">
              {[
                ["Ispezione", "Analisi del danno con illuminazione tecnica per mappare ogni ammaccatura."],
                ["Accesso al pannello", "Smontaggio mirato dei rivestimenti, incluso lo stacco e riattacco dei rivestimenti sottotetto incollati, con totale recupero degli stessi."],
                ["Riparazione a freddo", "Leve e utensili dedicati riportano il metallo alla forma originale."],
                ["Controllo finale", "Verifica dei riflessi sulla superficie e rimontaggio delle parti."],
              ].map(([t, d], i) => (
                <li key={t} className="flex gap-6">
                  <span className="font-[family-name:var(--font-display)] text-3xl font-extrabold leading-none text-brand">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="text-base font-extrabold uppercase tracking-[0.06em]">{t}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{d}</p>
                  </div>
                </li>
              ))}
            </ol>
          </Reveal>
        </div>
      </Section>

      <PdrMethod />

      <section className="relative overflow-hidden py-24 lg:py-32">
        <div className="container-x">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <TechLabel>Comparison / same panel</TechLabel>
              <h2 className="h-xl mt-6">
                Damage
                <br />
                <span className="text-brand">is temporary.</span>
              </h2>
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
              Fotografie reali delle lavorazioni eseguite nella nostra sede.
              Trascina l'indicatore per confrontare superficie deformata e superficie
              ripristinata.
            </p>
          </div>
        </div>
        <div className="mt-12">
          <BeforeAfter
            before={photos.hail5}
            after={photos.hail3}
            beforeAlt="Carrozzeria grandinata prima dell'intervento"
            afterAlt="Carrozzeria ripristinata dopo l'intervento levabolli"
            className="h-[60svh] w-full lg:h-[80svh]"
          />
        </div>
        <div className="container-x mt-10">
          <RailGallery
            images={[
              { src: photos.hail4, alt: "Lavorazione levabolli su parafango" },
              { src: photos.hail6, alt: "Auto grandinata in officina" },
              { src: photos.hail7, alt: "Dettaglio riparazione PDR" },
              { src: photos.levabolliMilano, alt: "Levabolli Milano — intervento su tetto" },
            ]}
          />
        </div>
      </section>

      <Statement
        kicker="Surface control"
        lines={["Precisione", "che non lascia", "segni."]}
        image={photos.workshop5}
        imageAlt="Controllo della superficie in luce radente"
      />


      <Section>
        <div className="container-x">
          <SectionHead
            eyebrow="Servizi collegati"
            title="Non ti lasciamo solo con la pratica."
          />
          <div className="mt-14 grid gap-3 md:grid-cols-2">
            <Reveal className="border border-border p-8 lg:p-12">
              <h3 className="h-card">Gestione assicurazione</h3>
              <p className="mt-4 text-muted-foreground">
                Offriamo la gestione del sinistro con l'assicurazione e liquidazione
                diretta del danno da parte della compagnia.
              </p>
              <div className="mt-8">
                <BtnLink to="/gestione-sinistri-da-grandine/" variant="ghost">
                  Come funziona
                </BtnLink>
              </div>
            </Reveal>
            <Reveal delay={80} className="border border-border p-8 lg:p-12">
              <h3 className="h-card">Auto di cortesia</h3>
              <p className="mt-4 text-muted-foreground">
                Un mezzo a disposizione per tutta la durata della riparazione del veicolo
                danneggiato dalla grandine.
              </p>
              <div className="mt-8">
                <BtnLink to="/auto-sostitutiva-riparazione-grandinate/" variant="ghost">
                  Scopri il servizio
                </BtnLink>
              </div>
            </Reveal>
          </div>
        </div>
      </Section>

      <Section dark>
        <div className="container-x">
          <ProcessSteps
            dark
            steps={[
              { title: "Contattaci", text: "Raccontaci cosa è successo." },
              { title: "Valutiamo il danno", text: "Verifichiamo l'applicabilità del PDR." },
              { title: "Gestiamo il sinistro", text: "Pratica e liquidazione diretta." },
              { title: "Ripariamo l'auto", text: "Riparazione a freddo specializzata." },
              { title: "Torni alla guida", text: "Consegna puntuale." },
            ]}
          />
        </div>
      </Section>

      <Section>
        <div className="container-x">
          <FaqList items={faqs} title="Levabolli: domande frequenti" />
        </div>
      </Section>

      <Reviews />

      <section className="surface-dark">
        <div className="container-x grid items-stretch lg:grid-cols-2">
          <div className="relative min-h-[300px]">
            <img
              src={photos.hail8}
              alt="Auto grandinata pronta per la valutazione"
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
          <div className="bg-graphite p-8 sm:p-12 lg:p-16">
            <LeadForm />
          </div>
        </div>
      </section>

      <CtaBand title="Valutiamo insieme il tuo caso." cta="Parlaci del danno" />
    </>
  );
}
