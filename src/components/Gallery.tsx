import { gallery } from "@/data/site";

const tilts = ["rotate-2", "-rotate-2", "rotate-2", "rotate-2", "-rotate-2"];

// Full-bleed row that breaks out of the content column. Cards are sized off the
// viewport (5 × 20vw + gaps > 100vw) so the outer ones always run past the screen edges.
export default function Gallery() {
  return (
    <div className="relative left-1/2 w-screen -translate-x-1/2 overflow-hidden py-8">
      <div className="flex justify-center gap-5">
        {gallery.map((img, i) => (
          <div
            key={img.src}
            className={`relative aspect-[9/10] w-[max(11rem,20vw)] shrink-0 overflow-hidden rounded-2xl bg-surface transition-transform duration-300 ease-out hover:rotate-0 hover:scale-[1.03] sm:rounded-3xl ${tilts[i % tilts.length]}`}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={img.src} alt={img.alt} className="size-full object-cover" />
          </div>
        ))}
      </div>
    </div>
  );
}
