// Vercel sets this at build time; falls back to localhost for local builds.
// Replace with the custom domain once one is added.
export const siteUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL
  ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  : "http://localhost:3000";
