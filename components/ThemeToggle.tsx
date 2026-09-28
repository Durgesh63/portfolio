"use client";

import { THEME_KEY } from "@/lib/theme";
import { MoonIcon, SunIcon } from "./icons";

export function ThemeToggle() {
  function toggle() {
    const isDark = document.documentElement.classList.toggle("dark");
    try {
      localStorage.setItem(THEME_KEY, isDark ? "dark" : "light");
    } catch {
      // Storage blocked (private mode) — theme still switches for this visit.
    }
  }

  // Icons swap via the `dark:` variant, so no React state or hydration mismatch.
  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Toggle light or dark mode"
      title="Toggle light / dark mode"
      className="rounded-lg p-2 text-ink transition-colors hover:bg-canvas"
    >
      <MoonIcon className="dark:hidden" />
      <SunIcon className="hidden dark:block" />
    </button>
  );
}
