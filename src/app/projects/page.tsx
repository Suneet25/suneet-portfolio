import type { Metadata } from "next";
import { projects } from "@/data/site";
import PageHeader from "@/components/PageHeader";
import Section from "@/components/Section";
import { ArrowUpRightIcon } from "@/components/Icons";

export const metadata: Metadata = { title: "Projects", description: "Things I've built." };

export default function ProjectsPage() {
  return (
    <>
      <PageHeader title="Projects" subtitle="A few things I've built, shipped, and learned from." />
      <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {projects.map((p, i) => (
          <Section key={p.title} index={i + 1}>
            <a
              href={p.href}
              target="_blank"
              rel="noreferrer"
              className="group flex h-full flex-col rounded-2xl border border-line p-5 transition-all hover:-translate-y-0.5 hover:border-accent/50 hover:shadow-lg hover:shadow-accent/5"
            >
              <div className="flex items-start justify-between gap-2">
                <h2 className="font-semibold transition-colors group-hover:text-accent">{p.title}</h2>
                <ArrowUpRightIcon className="mt-0.5 shrink-0 text-tertiary transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent" />
              </div>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-secondary">{p.description}</p>
              <div className="mt-4 flex flex-wrap items-center gap-1.5">
                {p.tags.map((t) => (
                  <span key={t} className="rounded-full bg-surface px-2.5 py-0.5 text-xs text-secondary">
                    {t}
                  </span>
                ))}
                <span className="ml-auto text-xs text-tertiary">{p.year}</span>
              </div>
            </a>
          </Section>
        ))}
      </ul>
    </>
  );
}
