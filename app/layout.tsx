import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { education, experience, profile } from "@/data/portfolio";
import { siteUrl } from "@/lib/site";
import { themeInitScript } from "@/lib/theme";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

const { availability } = profile;
const title = `${profile.name} — ${profile.role} (Spring Boot, Kafka)`;
const description = `Java Full Stack Developer (${profile.experience}) in Noida, India: Java, Spring Boot, Kafka, microservices, Redis, Elasticsearch, AWS and React / Next.js. ${availability.noticePeriod} notice; open to ${availability.locations.join(", ")}, ${availability.workModes.join(" or ").toLowerCase()}.`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  keywords: [
    "Durgesh Maurya",
    "Java Full Stack Developer",
    "Spring Boot",
    "Microservices",
    "Apache Kafka",
    "React",
    "Next.js",
    "Noida",
    "Gurgaon",
    "Pune",
  ],
  authors: [{ name: profile.name }],
  alternates: { canonical: "/" },
  openGraph: {
    type: "profile",
    title,
    description,
    url: "/",
    images: [{ url: profile.avatar, width: 460, height: 460, alt: profile.name }],
  },
  twitter: { card: "summary", title, description, images: [profile.avatar] },
  // Favicon comes from app/icon.svg.
};

// Structured data so search engines understand this is a person's profile page.
const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  jobTitle: profile.role,
  description,
  worksFor: { "@type": "Organization", name: experience[0].company },
  alumniOf: { "@type": "CollegeOrUniversity", name: education.institute },
  knowsAbout: [
    "Java",
    "Spring Boot",
    "Apache Kafka",
    "Microservices",
    "Spring Security",
    "Elasticsearch",
    "Redis",
    "AWS",
    "React",
    "Next.js",
  ],
  email: `mailto:${profile.email}`,
  image: `${siteUrl}${profile.avatar}`,
  url: siteUrl,
  sameAs: [profile.github, profile.linkedin],
  address: { "@type": "PostalAddress", addressLocality: "Noida", addressRegion: "Uttar Pradesh", addressCountry: "IN" },
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
