import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export: the whole site is plain HTML/CSS/JS, no server needed.
  output: "export",
  images: { unoptimized: true },
  // Don't generate AGENTS.md / CLAUDE.md on `next dev`.
  agentRules: false,
};

export default nextConfig;
