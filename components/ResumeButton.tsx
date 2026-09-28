"use client";

import { track } from "@vercel/analytics";
import { profile } from "@/data/portfolio";
import { DownloadIcon } from "./icons";

type ResumeButtonProps = { location: string; compact?: boolean };

// `location` tells analytics which button was used (hero, header, contact).
export function ResumeButton({ location, compact = false }: ResumeButtonProps) {
  return (
    <a
      href={profile.resume}
      download
      onClick={() => track("resume_download", { location })}
      className={`inline-flex items-center justify-center gap-2 rounded-lg bg-brand font-semibold text-on-brand shadow-sm transition-colors hover:bg-brand-dark ${
        compact ? "px-3.5 py-2 text-sm" : "px-5 py-3 text-base"
      }`}
    >
      <DownloadIcon className={compact ? "h-4 w-4" : "h-5 w-5"} />
      {compact ? "Resume" : "Download Resume"}
    </a>
  );
}
