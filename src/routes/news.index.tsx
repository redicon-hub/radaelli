import { createFileRoute, Link } from "@tanstack/react-router";
import { Reveal } from "@/components/site/Reveal";
import { PageHero, Section } from "@/components/site/sections";
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
        eyebrow="News"
        title="Guide, consigli e aggiornamenti."
        subtitle="Approfondimenti su levabolli, pellicole oscuranti, gestione sinistri e cura dell'auto."
        image={posts[0]?.image ?? ""}
        breadcrumb={[{ label: "Home", to: "/" }, { label: "News" }]}
      />

      <Section>
        <div className="container-x">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((p, i) => (
              <Reveal key={p.slug} delay={(i % 3) * 80}>
                <article className="group flex h-full flex-col border border-border bg-card">
                  <Link to="/$/" params={{ splat: { _: p.slug } }} className="block overflow-hidden">
                    <img
                      src={p.image}
                      alt={p.title}
                      loading="lazy"
                      className="aspect-[16/10] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </Link>
                  <div className="flex flex-1 flex-col p-6 lg:p-8">
                    <span className="text-[0.65rem] font-extrabold uppercase tracking-[0.16em] text-brand">
                      {p.category}
                    </span>
                    <h2 className="mt-3 text-lg font-extrabold leading-snug tracking-tight">
                      <Link
                        to="/$/"
                        params={{ splat: { _: p.slug } }}
                        className="hover:text-brand"
                      >
                        {p.title}
                      </Link>
                    </h2>
                    <p className="mt-4 line-clamp-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                      {p.excerpt}
                    </p>
                    <Link
                      to="/$/"
                      params={{ splat: { _: p.slug } }}
                      className="mt-6 inline-flex items-center gap-2 text-[0.72rem] font-extrabold uppercase tracking-[0.14em] text-brand"
                    >
                      Leggi
                      <Arrow />
                    </Link>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>
    </>
  );
}
