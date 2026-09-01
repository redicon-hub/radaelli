import { createFileRoute, notFound } from "@tanstack/react-router";
import { Reveal } from "@/components/site/Reveal";
import { PageHero, Section } from "@/components/site/sections";
import { posts } from "@/lib/site";

export const Route = createFileRoute("/$slug/")({
  head: ({ params }) => {
    const post = posts.find((p) => p.slug === params.slug);
    return {
      meta: post
        ? [
            { title: `${post.title} — Radaelli Levabolli` },
            { name: "description", content: post.excerpt },
            { property: "og:title", content: post.title },
            { property: "og:description", content: post.excerpt },
            { property: "og:url", content: `/${post.slug}/` },
            { property: "og:type", content: "article" },
            { property: "og:image", content: post.image },
            { name: "twitter:image", content: post.image },
          ]
        : [{ title: "Articolo non trovato" }],
      links: post ? [{ rel: "canonical", href: `/${post.slug}/` }] : [],
      scripts: post
        ? [
            {
              type: "application/ld+json",
              children: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "Article",
                headline: post.title,
                description: post.excerpt,
                image: post.image,
                datePublished: post.isoDate,
                url: `/${post.slug}/`,
                author: { "@type": "Organization", name: "Radaelli Levabolli" },
                publisher: { "@type": "Organization", name: "Radaelli Levabolli" },
              }),
            },
          ]
        : [],
    };
  },
  component: PostPage,
});

function PostPage() {
  const { slug } = Route.useParams();
  const post = posts.find((p) => p.slug === slug);
  if (!post) throw notFound();

  return (
    <>
      <PageHero
        compact
        eyebrow={post.category}
        title={post.title}
        subtitle={post.excerpt}
        image={post.image}
        breadcrumb={[
          { label: "Home", to: "/" },
          { label: "News", to: "/news/" },
          { label: post.category },
        ]}
      />

      <Section>
        <div className="container-x max-w-4xl">
          <Reveal>
            <header>
              <time
                dateTime={post.isoDate}
                className="text-[0.72rem] font-extrabold uppercase tracking-[0.16em] text-muted-foreground"
              >
                {post.date}
              </time>
            </header>
            <div className="prose prose-lg mt-10 max-w-none text-foreground prose-headings:font-extrabold prose-headings:tracking-tight prose-a:text-brand hover:prose-a:text-brand-bright">
              {post.body.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </Reveal>
        </div>
      </Section>
    </>
  );
}
