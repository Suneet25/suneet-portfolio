import Link from "next/link";
import { posts, site, socials } from "@/data/site";
import Section from "@/components/Section";
import Gallery from "@/components/Gallery";
import PostList from "@/components/PostList";
import WorkList from "@/components/WorkList";
import Newsletter from "@/components/Newsletter";
import { ArrowUpRightIcon, socialIcons } from "@/components/Icons";

export default function Home() {
  const recent = [...posts].sort((a, b) => b.date.localeCompare(a.date)).slice(0, 4);

  return (
    <div className="flex flex-col gap-16 md:gap-24">
      <Section index={0} className="flex flex-col items-center gap-8 text-center sm:items-start sm:text-left">
        {/* The header renders the avatar here and shrinks it into the nav on scroll */}
        <div id="hero-avatar" className="size-16" aria-hidden />
        <h1 className="text-4xl leading-[1.1] font-bold tracking-tight sm:text-5xl">{site.headline}</h1>
        <p className="text-lg leading-relaxed text-secondary">
          {site.intro.map((part, i) =>
            typeof part === "string" ? (
              part
            ) : (
              <Link
                key={i}
                href={part.href}
                className="text-primary/90 underline decoration-accent/60 decoration-1 underline-offset-[5px] transition-colors hover:text-accent hover:decoration-accent"
              >
                {part.text}
              </Link>
            )
          )}
        </p>
        <ul className="flex justify-center gap-6 sm:justify-start">
          {socials.map((s) => {
            const Icon = socialIcons[s.icon];
            return (
              <li key={s.name}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={s.name}
                  className="text-secondary transition-colors hover:text-accent"
                >
                  <Icon width={22} height={22} />
                </a>
              </li>
            );
          })}
        </ul>
      </Section>

      <Section index={1}>
        <Gallery />
      </Section>

      <Section index={2}>
        <div className="mb-4 flex flex-col items-center gap-1 sm:flex-row sm:items-baseline sm:justify-between">
          <h2 className="text-sm font-medium text-secondary">Recent posts</h2>
          <Link href="/posts" className="inline-flex items-center gap-1 text-sm text-secondary hover:text-accent">
            All posts <ArrowUpRightIcon width={14} height={14} />
          </Link>
        </div>
        <PostList posts={recent} />
      </Section>

      <Section index={3}>
        <Newsletter />
      </Section>

      <Section index={4} title="Work">
        <WorkList />
      </Section>
    </div>
  );
}
