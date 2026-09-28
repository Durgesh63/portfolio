import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { profile } from "@/data/portfolio";
import { siteUrl } from "@/lib/site";
import { themeInitScript } from "@/lib/theme";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

const title = `${profile.name} — ${profile.role}`;
const description =
  "Java Full Stack Developer with ~4 years of experience in Java, Spring Boot, microservices, React, Next.js, PostgreSQL, MySQL and MongoDB.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  keywords: [
    "Durgesh Maurya",
    "Java Full Stack Developer",
    "Spring Boot",
    "Microservices",
    "React",
    "Next.js",
    "Noida",
  ],
  authors: [{ name: profile.name }],
  openGraph: {
    type: "profile",
    title,
    description,
    url: "/",
    // Link-preview banner (LinkedIn Featured, WhatsApp, Slack). Source: branding/featured-banner.html
    images: [{ url: "/og-image.png", width: 1200, height: 627, alt: title }],
  },
  twitter: { card: "summary_large_image", title, description, images: ["/og-image.png"] },
  icons: { icon: profile.avatar },
};

// Structured data so search engines understand this is a person's profile page.
const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  jobTitle: profile.role,
  email: `mailto:${profile.email}`,
  image: `${siteUrl}${profile.avatar}`,
  url: siteUrl,
  sameAs: [profile.github, profile.linkedin],
  address: { "@type": "PostalAddress", addressLocality: "Noida", addressCountry: "IN" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    // suppressHydrationWarning: themeInitScript adds the `dark` class before React hydrates.
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body className="font-sans">
        <div className="page-backdrop" aria-hidden />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
