import type { Metadata } from "next";
import { uses } from "@/data/site";
import PageHeader from "@/components/PageHeader";
import Section from "@/components/Section";

export const metadata: Metadata = { title: "Uses", description: "Tools and gear I use every day." };

export default function UsesPage() {
  return (
    <>
      <PageHeader title="Uses" subtitle="The hardware, software, and tools I use every day." />
      <div className="flex flex-col gap-12">
        {uses.map((group, i) => (
          <Section key={group.category} index={i + 1} title={group.category}>
            <ul className="flex flex-col gap-4">
              {group.items.map((item) => (
                <li key={item.name} className="flex gap-3">
                  <span className="bg-gradient mt-2 size-1.5 shrink-0 rounded-full" />
                  <div>
                    <p className="font-medium">{item.name}</p>
                    <p className="text-sm text-secondary">{item.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </Section>
        ))}
      </div>
    </>
  );
}
