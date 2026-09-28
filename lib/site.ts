// Public site URL, used for SEO and link-preview (Open Graph) image URLs.
// Order: SITE_URL (set manually, e.g. for Netlify / custom domain) → Vercel's
// production URL (set automatically on Vercel) → localhost for local builds.
export const siteUrl =
  process.env.SITE_URL?.replace(/\/$/, "") ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "http://localhost:3000");
