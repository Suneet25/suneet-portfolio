import Link from "next/link";
import { navLinks, site, socials } from "@/data/site";
import { socialIcons } from "./Icons";

export default function Footer() {
  return (
    <footer className="mx-auto mt-24 max-w-[700px] px-4 pb-12 md:px-6">
      <div className="flex flex-col items-center gap-6 border-t border-line pt-8 text-sm sm:flex-row sm:justify-between">
        <ul className="flex flex-wrap justify-center gap-x-5 gap-y-2">
          {navLinks.map((l) => (
            <li key={l.href}>
              <Link href={l.href} className="text-secondary transition-colors hover:text-primary">
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
        <ul className="flex gap-3">
          {socials.map((s) => {
            const Icon = socialIcons[s.icon];
            return (
              <li key={s.name}>
                <a href={s.href} aria-label={s.name} target="_blank" rel="noreferrer" className="text-tertiary transition-colors hover:text-accent">
                  <Icon width={18} height={18} />
                </a>
              </li>
            );
          })}
        </ul>
      </div>
      <p className="mt-6 text-center text-sm text-tertiary sm:text-left">
        © {new Date().getFullYear()} {site.name}. All rights reserved.
      </p>
    </footer>
  );
}
