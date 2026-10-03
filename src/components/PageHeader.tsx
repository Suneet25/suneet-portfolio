import Section from "./Section";

export default function PageHeader({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <Section index={0} className="mb-12 text-center sm:text-left">
      <h1 className="text-3xl font-bold tracking-tight">{title}</h1>
      {subtitle && <p className="mt-3 text-secondary">{subtitle}</p>}
    </Section>
  );
}
