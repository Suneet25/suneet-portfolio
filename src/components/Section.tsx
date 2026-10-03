// Wraps a block so it fades in after the ones before it.
export default function Section({
  index,
  title,
  children,
  className = "",
}: {
  index: number;
  title?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section className={`animate-in ${className}`} style={{ "--index": index } as React.CSSProperties}>
      {title && <h2 className="mb-6 text-center text-sm font-medium text-secondary sm:text-left">{title}</h2>}
      {children}
    </section>
  );
}
