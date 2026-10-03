import type { Metadata } from "next";
import { about, site, socials } from "@/data/site";
import Avatar from "@/components/Avatar";
import Section from "@/components/Section";
import WorkList from "@/components/WorkList";
import { socialIcons } from "@/components/Icons";

export const metadata: Metadata = { title: "About", description: `About ${site.name}` };

export default function AboutPage() {
  return (
    <div className="flex flex-col gap-16">
      <Section index={0} className="flex flex-col items-center gap-8 text-center sm:flex-row sm:text-left">
        {/* <Avatar size={140} className="shrink-0 ring-4 ring-accent-soft" /> */}
        <div>
          <h1 className="text-3xl font-bold tracking-tight">{site.name}</h1>
          <p className="mt-2 text-gradient font-medium">{site.headline}</p>
        </div>
      </Section>

      <Section index={1} className="space-y-4 leading-relaxed text-secondary">
        {about.paragraphs.map((p) => (
          <p key={p}>{p}</p>
        ))}
      </Section>

      <Section index={2} title="Connect">
        <ul className="grid grid-cols-1 gap-2 sm:grid-cols-2">
          {socials.map((s) => {
            const Icon = socialIcons[s.icon];
            return (
              <li key={s.name}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 rounded-xl border border-line px-4 py-3 text-sm transition-colors hover:border-accent/50 hover:bg-accent-soft hover:text-accent"
                >
                  <Icon width={18} height={18} /> {s.name}
                </a>
              </li>
            );
          })}
        </ul>
      </Section>

      <Section index={3} title="Work">
        <WorkList />
      </Section>
    </div>
  );
}
