import { work } from "@/data/site";

export default function WorkList() {
  return (
    <ul className="flex flex-col gap-6">
      {work.map((w) => (
        <li key={w.company + w.title} className="flex flex-col items-center gap-3 text-center sm:flex-row sm:gap-4 sm:text-left">
          {w.logo ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={w.logo} alt="" className="size-11 shrink-0 rounded-full border border-line object-cover" />
          ) : (
            <div className="bg-gradient grid size-11 shrink-0 place-items-center rounded-full text-sm font-semibold text-white">
              {w.company[0]}
            </div>
          )}
          <div className="flex min-w-0 flex-1 flex-col gap-1 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
            <div className="min-w-0">
              <a href={w.href} target="_blank" rel="noreferrer" className="font-medium hover:text-accent">
                {w.company}
              </a>
              <p className="text-sm text-secondary">{w.title}</p>
            </div>
            <p className="shrink-0 text-sm text-tertiary">
              {w.start} — {w.end ?? "Present"}
            </p>
          </div>
        </li>
      ))}
    </ul>
  );
}
