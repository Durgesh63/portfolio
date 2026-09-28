import { certifications } from "@/data/portfolio";
import { Section } from "../Section";

// Rendered only when `certifications` in data/portfolio.ts has entries.
export function Certifications() {
  if (certifications.length === 0) return null;

  return (
    <Section id="certifications" eyebrow="Certifications" title="Certifications">
      <ul className="grid gap-4 sm:grid-cols-2">
        {certifications.map((cert) => (
          <li key={cert.name} className="glass rounded-xl p-5">
            <h3 className="font-semibold text-ink">
              {cert.url ? (
                <a href={cert.url} target="_blank" rel="noopener noreferrer" className="hover:text-brand">
                  {cert.name}
                </a>
              ) : (
                cert.name
              )}
            </h3>
            <p className="mt-1 text-sm text-muted">
              {cert.issuer} · {cert.year}
            </p>
          </li>
        ))}
      </ul>
    </Section>
  );
}
