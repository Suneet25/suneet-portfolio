"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { MoonIcon, SunIcon } from "./Icons";

export default function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const isDark = mounted && resolvedTheme === "dark";
  return (
    <button
      type="button"
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="grid size-11 sm:size-12 shrink-0 place-items-center rounded-full border border-line bg-surface/80 text-accent shadow-lg shadow-black/5 backdrop-blur-md transition hover:scale-105"
    >
      {mounted ? isDark ? <SunIcon width={20} height={20} /> : <MoonIcon width={20} height={20} /> : <span className="size-5" />}
    </button>
  );
}
