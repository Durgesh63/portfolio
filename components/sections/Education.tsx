import { achievements, education } from "@/data/portfolio";
import { Section } from "../Section";

export function Education() {
  return (
    <Section id="education" eyebrow="Education & Achievements" title="Background">
      <div className="grid gap-5 md:grid-cols-2">
        <div className="glass rounded-xl p-6">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-muted">Education</h3>
          <p className="mt-3 text-lg font-semibold text-ink">{education.degree}</p>
          <p className="mt-1 font-medium text-brand">{education.institute}</p>
          <p className="mt-1 text-sm text-muted">
            {education.location} · {education.years}
          </p>
        </div>
        <div className="glass rounded-xl p-6">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-muted">Achievements</h3>
          <ul className="mt-3 list-disc space-y-2 pl-5 leading-relaxed marker:text-brand">
            {achievements.map((item) => (
              <li key={item.text}>
                {item.text}
                {item.url && (
                  <>
                    {" "}
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold text-brand hover:underline"
                    >
                      View
                    </a>
                  </>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
