import { profile } from "@/data/portfolio";
import { Section } from "../Section";

export function About() {
  return (
    <Section id="about" eyebrow="About" title="A little about me">
      <div className="max-w-3xl space-y-4 text-lg leading-relaxed">
        {profile.about.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
    </Section>
  );
}
