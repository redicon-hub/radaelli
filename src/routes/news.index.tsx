import { createFileRoute, Link } from "@tanstack/react-router";
import { Reveal } from "@/components/site/Reveal";
import { PageHero, Section } from "@/components/site/sections";
import { TechLabel } from "@/components/site/lab";
import { Arrow } from "@/components/site/ui";
import { posts } from "@/lib/site";

export const Route = createFileRoute("/news/")({
  head: () => ({
    meta: [
      { title: "News, guide e consigli — Radaelli Levabolli" },
      {
        name: "description",
        content:
          "Guide e approfondimenti su levabolli, auto grandinate, pellicole oscuranti, gestione sinistri e cura dell'auto.",
      },
      { property: "og:title", content: "News — Radaelli Levabolli" },
      { property: "og:description", content: "Guide e consigli dal mondo levabolli e automotive." },
      { property: "og:url", content: "/news/" },
    ],
    links: [{ rel: "canonical", href: "/news/" }],
  }),
  component: News,
});

function News() {
  return (
    <>
      <PageHero
        compact
        eyebrow="Magazine / journal"
        ghost="Journal"
        title="Guide, consigli e aggiornamenti."
        subtitle="Approfondimenti su levabolli, pellicole oscuranti, gestione sinistri e cura dell'auto."
        image={posts[0]?.image ?? ""}
        breadcrumb={[{ label: "Home", to: "/" }, { label: "News" }]}
      />

      <Section>
        <div className="container-x">
          <div className="flex items-end justify-between gap-6 border-b border-border pb-6">
            <TechLabel>Archivio</TechLabel>
            <TechLabel tick={false}>{String(posts.length).padStart(2, "0")} articoli</TechLabel>
          </div>
          <div className="mt-14 grid gap-x-10 gap-y-16 lg:grid-cols-12">
            {posts.map((p, i) => {
              const feature = i === 0;
              const span = feature
                ? "lg:col-span-12"
                : i % 3 === 1
                  ? "lg:col-span-7"
                  : "lg:col-span-5";
              return (
                <Reveal key={p.slug} delay={(i % 3) * 80} className={span}>
                  <article className="group">
                    <Link
                      to="/$slug/"
                      params={{ slug: p.slug }}
                      className="block overflow-hidden bg-graphite"
                    >
                      <img
                        src={p.image}
                        alt={p.title}
                        loading={feature ? "eager" : "lazy"}
                        className={
                          "w-full object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04] " +
                          (feature ? "aspect-[21/9]" : i % 3 === 1 ? "aspect-[16/10]" : "aspect-[4/5]")
                        }
                      />
                    </Link>
                    <div className={feature ? "mt-8 grid gap-6 lg:grid-cols-[1fr_0.9fr]" : "mt-7"}>
                      <div>
                        <span className="text-[0.64rem] font-extrabold uppercase tracking-[0.24em] text-brand">
                          {String(i + 1).padStart(2, "0")} — {p.category}
                        </span>
                        <h2
                          className={
                            "mt-4 font-[family-name:var(--font-display)] font-extrabold leading-[1.02] tracking-tight " +
                            (feature
                              ? "text-[clamp(2rem,4.4vw,3.6rem)] uppercase"
                              : "text-[clamp(1.4rem,2.2vw,2.1rem)]")
                          }
                        >
                          <Link to="/$slug/" params={{ slug: p.slug }} className="hover:text-brand">
                            {p.title}
                          </Link>
                        </h2>
                      </div>
                      <div>
                        <p className="max-w-prose text-[0.98rem] leading-relaxed text-muted-foreground">
                          {p.excerpt}
                        </p>
                        <Link
                          to="/$slug/"
                          params={{ slug: p.slug }}
                          className="mt-6 inline-flex items-center gap-2 border-b border-brand pb-1 text-[0.7rem] font-extrabold uppercase tracking-[0.2em] text-brand"
                        >
                          Leggi
                          <Arrow />
                        </Link>
                      </div>
                    </div>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </Section>
    </>
  );
}
