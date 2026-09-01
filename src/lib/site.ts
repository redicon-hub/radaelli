export const CDN = "https://www.radaellilevabolli.com/wp-content/uploads";

export const business = {
  name: "Radaelli Levabolli",
  legal: "Radaelli Pietro",
  street: "Via Buozzi, 34",
  zip: "20066",
  city: "Melzo",
  province: "MI",
  phone: "02.9551729",
  phoneHref: "tel:+390295517 29".replace(" ", ""),
  mobile: "+39 333 355 0901",
  mobileHref: "tel:+393333550901",
  whatsapp: "https://wa.me/393333550901",
  email: "info@radaellilevabolli.com",
  vat: "03786190961",
  facebook: "https://www.facebook.com/RadaelliLevabolli",
  instagram: "https://www.instagram.com/radaelli_levabolli/",
  reviewsCount: 56,
  mapEmbed:
    "https://www.google.com/maps?q=Via+Bruno+Buozzi+34,+20066+Melzo+MI&output=embed",
};

/** Fotografie originali del sito attuale (nessuno stock). */
export const photos = {
  heroHome: `${CDN}/2021/04/IMG_0285-scaled.jpg`,
  hail1: `${CDN}/2025/04/auto-grandinata-a-milano-levabolli-2.jpg`,
  hail2: `${CDN}/2021/05/IMG_8958-scaled.jpg`,
  hail3: `${CDN}/2021/05/IMG_6047-scaled.jpg`,
  hail4: `${CDN}/2021/05/IMG_6181-scaled.jpg`,
  hail5: `${CDN}/2021/05/IMG_6184-scaled.jpg`,
  hail6: `${CDN}/2021/05/IMG_6924-scaled.jpg`,
  hail7: `${CDN}/2021/05/IMG_7125-scaled.jpg`,
  hail8: `${CDN}/2025/04/auto-grandibata-milano.jpg`,
  workshop1: `${CDN}/2021/05/IMG_8096-scaled.jpg`,
  workshop2: `${CDN}/2021/05/IMG_8208-scaled.jpg`,
  workshop3: `${CDN}/2021/05/IMG_9701-scaled.jpg`,
  workshop4: `${CDN}/2021/05/IMG_9714-scaled.jpg`,
  workshop5: `${CDN}/2021/05/IMG_6588-scaled-e1622292417841.jpg`,
  workshop6: `${CDN}/2021/05/IMG_2737-scaled.jpg`,
  company: `${CDN}/2021/06/levabolli-grandine-auto-grandinata-vetri-oscuranti.jpg`,
  courtesyCar: `${CDN}/2024/09/auto-sostitutiva-scaled.jpg`,
  tint1: `${CDN}/2021/06/IMG_E8969.jpeg`,
  tint2: `${CDN}/2021/06/IMG_E8971.jpeg`,
  tint3: `${CDN}/2021/06/IMG_0185-scaled.jpeg`,
  tint4: `${CDN}/2021/06/IMG_0237-scaled.jpeg`,
  tint5: `${CDN}/2021/06/pellicole-oscuranti-milano-car-wrapping.jpg`,
  tint6: `${CDN}/2025/05/renegade-scaled.jpg`,
  tint7: `${CDN}/2025/05/pellicole-oscuranti-per-auto-milano-scaled.jpg`,
  tint8: `${CDN}/2021/01/BMW-X6.jpg`,
  tintSafety: `${CDN}/2025/04/pellicole-di-sicurezza-vetri-per-auto-milano.jpg`,
  tintDifendo: `${CDN}/2021/06/difendo-k.jpg`,
  tintGlass: `${CDN}/2021/05/IMG_9881-scaled.jpg`,
  course1: `${CDN}/2025/04/corsi-levabolli-milano.jpg`,
  course2: `${CDN}/2021/05/IMG_5108-scaled.jpg`,
  course3: `${CDN}/2021/05/IMG_1957-scaled.jpg`,
  course4: `${CDN}/2021/05/IMG_1959-scaled.jpg`,
  course5: `${CDN}/2021/05/IMG_2245-scaled.jpg`,
  course6: `${CDN}/2021/01/IMG_3768.jpg`,
  course7: `${CDN}/2021/01/IMG_4137.jpg`,
  levabolliMilano: `${CDN}/2025/04/levabolli-milano.jpg`,
  levabolliCorsi: `${CDN}/2025/04/levabolli-corsi-milano.jpg`,
  tintMilano: `${CDN}/2025/04/oscuramento-vetri-milano.jpg`,
  tintDark: `${CDN}/2025/04/vetri-oscurati-milano-.jpg`,
  tintDark2: `${CDN}/2025/04/vetri-scuri-milano.jpg`,
  tintWork: `${CDN}/2025/04/vetri-oscuranti-milano.jpg`,
  tintWork2: `${CDN}/2025/04/pellicole-oscuranti-milano.jpg`,
};

export type NavItem = { label: string; to: string };

export const servicesNav: NavItem[] = [
  {
    label: "Riparazione auto grandinate / Levabolli",
    to: "/levabolli-riparazione-auto-grandinate",
  },
  { label: "Pellicole oscuranti", to: "/pellicole-per-vetri" },
  { label: "Gestione sinistri da grandine", to: "/gestione-sinistri-da-grandine" },
  { label: "Auto di cortesia", to: "/auto-sostitutiva-riparazione-grandinate" },
];

export const reviews = [
  {
    name: "Alberto C.",
    date: "21/03/2025",
    text: "Centro di riparazione specializzato in danni da grandine alle auto. La mia esperienza è stata ottima, macchina riportata a nuovo, tempi celeri, prezzi onesti. Pietro è gentilissimo e molto appassionato del suo lavoro.",
  },
  {
    name: "Maurizio Rizzo",
    date: "07/12/2024",
    text: "Competenza, affidabilità, serietà ed esperienza. Questi sono gli aggettivi più appropriati per questa officina che in quanto ad ordine e pulizia sembra un ambulatorio medico. Lo straconsiglio perché sono davvero capaci.",
  },
  {
    name: "Arti Barci",
    date: "15/11/2024",
    text: "Professionalità, puntualità, qualità, prezzo onesto. Ho portato la mia Mercedes Classe C grandinata, quando ho ritirato sono rimasto soddisfatto del risultato. Signor Radaelli gentilissimo e pronto ad aiutare.",
  },
  {
    name: "MrErwanix",
    date: "25/09/2024",
    text: "Lavori fatti da vero professionista. Puntuale nella restituzione del mezzo. Auto sostitutiva gratuita. Molta disponibilità per trovare soluzioni personalizzate. Bravissimo!",
  },
  {
    name: "kenny wu",
    date: "14/02/2024",
    text: "A novembre ho fatto aggiustare i segni di grandine sul cofano della mia BMW, il proprietario è stato molto disponibile a venirmi incontro sulle tempistiche. Lavoro fatto perfettamente, qualità prezzo top.",
  },
  {
    name: "fiorenzo molinelli",
    date: "19/12/2023",
    text: "Professionale, preparata, cortesia e gentilezza che oggi è raro trovare.",
  },
];

export type Post = {
  slug: string;
  title: string;
  category: string;
  date: string;
  isoDate: string;
  excerpt: string;
  image: string;
  body: string[];
};

/** Articoli esistenti — gli URL restano identici a quelli attuali. */
export const posts: Post[] = [
  {
    slug: "pellicole-oscuranti-per-auto",
    title:
      "Pellicole oscuranti per auto: vantaggi, normativa, durata e come scegliere quelle giuste",
    category: "Pellicole",
    date: "Maggio 2026",
    isoDate: "2026-05-01",
    excerpt:
      "Negli ultimi anni le pellicole oscuranti per auto sono diventate una delle personalizzazioni più richieste: ecco vantaggi reali, cosa dice la normativa e come scegliere.",
    image: `${CDN}/2026/05/pellicole-oscuranti-auto-milano.jpg`,
    body: [
      "Negli ultimi anni le pellicole oscuranti per auto sono diventate una delle personalizzazioni più richieste. Non si tratta soltanto di estetica: una pellicola di qualità incide su comfort termico, protezione dai raggi UV, privacy e sicurezza dell'abitacolo.",
      "Le pellicole per il controllo solare riducono il calore che entra nell'abitacolo e limitano l'abbagliamento, migliorando il comfort di guida e riducendo il ricorso al condizionatore. Le pellicole di sicurezza, invece, trattengono le schegge in caso di rottura accidentale del vetro.",
      "Sul fronte normativo, l'applicazione è consentita nel rispetto delle disposizioni vigenti: il parabrezza e i vetri anteriori laterali hanno vincoli specifici, mentre sui vetri posteriori esistono margini più ampi. Affidarsi a un applicatore esperto è il modo più semplice per restare in regola.",
      "La durata dipende dalla qualità del film e dalla posa. Utilizziamo pellicole selezionate fra i maggiori produttori e partecipiamo regolarmente a corsi di aggiornamento per garantire una posa priva di bolle, con tagli precisi e finitura stabile nel tempo.",
    ],
  },
  {
    slug: "vetri-oscurati-come-migliorare-le-prestazioni-di-un-vetro",
    title: "Vetri oscurati: come migliorare le prestazioni di un vetro",
    category: "Pellicole",
    date: "Ottobre 2020",
    isoDate: "2020-10-15",
    excerpt:
      "Utilizzando specifiche pellicole da applicare sui vetri delle auto si possono migliorare le prestazioni del vetro originale.",
    image: `${CDN}/2020/10/IMG_5576-min-1080x675-1.jpg`,
    body: [
      "Utilizzando delle specifiche pellicole da applicare sui vetri delle auto si possono migliorare sensibilmente le prestazioni del vetro originale, sia in termini di controllo solare sia in termini di resistenza meccanica.",
      "I vetri scuri montati di serie sulle auto non proteggono dai raggi UV e dai raggi infrarossi tanto quanto le pellicole che utilizziamo: il colore del vetro è ottenuto in massa, ma non introduce un vero filtro selettivo.",
      "Una pellicola tecnica riflette una quota significativa dei raggi infrarossi, responsabili del calore percepito all'interno dell'abitacolo, e filtra oltre il 99% dei raggi UV, riducendo lo scolorimento di tappezzerie, pelle e plastiche.",
    ],
  },
  {
    slug: "choosing-the-right-winter-tires-for-your-vehicle",
    title:
      "Ammaccature grandine Milano, ripristino carrozzeria: quali soluzioni adottare?",
    category: "Auto grandinate",
    date: "Ottobre 2020",
    isoDate: "2020-10-05",
    excerpt:
      "Uno degli eventi più sgraditi sono gli eventi naturali come la grandine, specialmente in estate: ecco le soluzioni di ripristino possibili.",
    image: `${CDN}/2020/10/Immagine-003-1080x675-1.jpg`,
    body: [
      "Uno degli eventi più sgraditi sono gli eventi naturali come la grandine, specialmente in estate, quando i temporali violenti possono coprire un'intera carrozzeria di ammaccature in pochi minuti.",
      "La prima valutazione riguarda lo stato della vernice: se il film di vernice è integro, la tecnica levabolli (PDR) permette di raddrizzare le ammaccature dall'interno del pannello, evitando stuccatura e riverniciatura.",
      "Quando invece la vernice risulta scheggiata o il danno è particolarmente esteso, può essere necessario ricorrere ai metodi tradizionali di riparazione. La scelta corretta si compie sempre dopo una valutazione diretta del veicolo.",
    ],
  },
  {
    slug: "cerchi-risparmio-sicurezza-e-privacy-pellicole-oscuranti-per-auto-a-milano",
    title:
      "Cerchi risparmio, sicurezza e privacy? Pellicole oscuranti per auto a Milano!",
    category: "Pellicole",
    date: "Gennaio 2021",
    isoDate: "2021-01-20",
    excerpt:
      "Vetri oscurati: da sempre utilizzati per proteggere l'interno della propria vettura da sguardi indiscreti, oggi fanno molto di più.",
    image: `${CDN}/2021/01/IMG_5569-min-1080x675-1.jpg`,
    body: [
      "Vetri oscurati: da sempre utilizzati per proteggere l'interno della propria vettura da sguardi indiscreti. Oggi però una pellicola tecnica offre molto di più della sola privacy.",
      "Il risparmio arriva dal minor surriscaldamento dell'abitacolo: meno calore significa un impiego più contenuto del condizionatore e quindi consumi inferiori, soprattutto nei mesi estivi.",
      "La sicurezza arriva invece dalla capacità del film di trattenere le schegge in caso di rottura del vetro, scoraggiando allo stesso tempo i tentativi di effrazione rapida.",
    ],
  },
];

export const journalPosts = posts.slice(0, 3);
