"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";
import { navLinks } from "@/data/site";
import Avatar from "./Avatar";
import ThemeToggle from "./ThemeToggle";

const LARGE = 64; // avatar size in the home page hero
const SMALL = 48; // avatar size once docked in the header

// Document offset that ignores transforms (the hero is mid fade-in animation on load).
function docOffset(el: HTMLElement) {
  let top = 0;
  let left = 0;
  for (let n: HTMLElement | null = el; n; n = n.offsetParent as HTMLElement | null) {
    top += n.offsetTop;
    left += n.offsetLeft;
  }
  return { top, left };
}

// On the home page the avatar starts in the hero at 64px. Scrolling moves it up and
// shrinks it into the header's left slot at 36px. The header only sticks while that
// happens (its wrapper is exactly header height + travel tall), then scrolls away.
export default function Header() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const wrapperRef = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLElement>(null);
  const slotRef = useRef<HTMLDivElement>(null);
  const avatarRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    const nav = navRef.current;
    const slot = slotRef.current;
    const avatar = avatarRef.current;
    if (!wrapper || !nav || !slot || !avatar) return;
    const hero = isHome ? document.getElementById("hero-avatar") : null;

    let travel = 0;

    const update = () => {
      // Slot position relative to the nav (the avatar's containing block).
      const slotX = slot.offsetLeft;
      const slotY = slot.offsetTop;
      let x = slotX;
      let y = slotY;
      let p = 1;

      if (hero && travel > 0) {
        p = Math.min(Math.max(window.scrollY / travel, 0), 1);
        const navRect = nav.getBoundingClientRect();
        const h = docOffset(hero);
        const heroX = h.left - (navRect.left + window.scrollX);
        const heroY = h.top - (navRect.top + window.scrollY);
        x = heroX + (slotX - heroX) * p;
        y = Math.max(slotY, heroY); // rides up with the page until it reaches the slot
      }

      const size = LARGE - (LARGE - SMALL) * p;
      avatar.style.transform = `translate(${x}px, ${y}px) scale(${size / LARGE})`;
      avatar.style.setProperty("--docked", String(p));
      avatar.style.visibility = "visible";
    };

    const measure = () => {
      travel = hero ? Math.max(docOffset(hero).top - docOffset(slot).top, 0) : 0;
      wrapper.style.setProperty("--travel", `${travel}px`);
      update();
    };

    measure();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", measure);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", measure);
    };
  }, [isHome]);

  return (
    <div
      ref={wrapperRef}
      className="pointer-events-none absolute inset-x-0 top-0 z-50"
      style={{ height: "calc(6rem + var(--travel, 0px))" }}
    >
      <header className="sticky top-0">
        <nav ref={navRef} className="relative mx-auto flex h-24 max-w-[700px] items-center justify-between gap-2 px-4 md:px-6">
          {/* Docked position of the avatar */}
          <div ref={slotRef} className="size-9 shrink-0" aria-hidden />

          <Link
            ref={avatarRef}
            href="/"
            aria-label="Home"
            className="pointer-events-auto absolute top-0 left-0 block origin-top-left rounded-full"
            style={{ width: LARGE, height: LARGE, visibility: "hidden" }}
          >
            {/* The fade-in lives on this wrapper: an animation's transform would override the scroll transform */}
            <span className={`relative block ${isHome ? "animate-in" : ""}`}>
              {/* Ring + shadow that fade in as the avatar docks */}
              <span
                className="absolute -inset-0.75 rounded-full border border-line bg-surface shadow-lg shadow-black/20"
                style={{ opacity: "var(--docked, 0)" }}
              />
              <Avatar size={LARGE} className="relative block" />
            </span>
          </Link>

          <ul className="pointer-events-auto flex h-11 items-center rounded-full border border-line bg-surface/80 px-1.5 shadow-lg shadow-black/5 backdrop-blur-md sm:absolute sm:left-1/2 sm:h-12 sm:-translate-x-1/2 sm:gap-2 sm:px-3">
            {navLinks.map((l) => {
              const active = pathname.startsWith(l.href);
              return (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className={`rounded-full px-2 py-1.5 text-sm transition-colors sm:px-3 sm:text-[15px] ${
                      active ? "text-accent" : "text-primary hover:text-accent"
                    }`}
                  >
                    {l.label}
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="pointer-events-auto">
            <ThemeToggle />
          </div>
        </nav>
      </header>
    </div>
  );
}
