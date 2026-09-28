import { experience } from "@/data/portfolio";
import { formatMonths, monthsBetween } from "@/lib/duration";
import { Section, Tag } from "../Section";

// Recruiters compute total vs Java experience from the dates anyway — show it.
const totalMonths = experience.reduce((sum, job) => sum + monthsBetween(job.start, job.end), 0);
const javaMonths = experience
  .filter((job) => job.stack.includes("Spring Boot"))
  .reduce((sum, job) => sum + monthsBetween(job.start, job.end), 0);

export function Experience() {
  return (
    <Section id="experience" eyebrow="Experience" title="Where I've worked">
      <p className="-mt-4 mb-8 text-sm font-medium text-muted">
        {formatMonths(totalMonths)} total · {formatMonths(javaMonths)} in Java / Spring Boot
      </p>
      <ol className="relative space-y-8 border-l-2 border-line pl-6 sm:pl-8">
        {experience.map((job) => (
          <li key={job.company} className="relative">
            <span
              aria-hidden
              className="absolute top-6 -left-[31px] h-4 w-4 rounded-full ring-4 ring-brand-soft bg-brand sm:-left-[39px]"
            />
            <article className="glass rounded-xl p-5 sm:p-6">
              <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-ink">{job.role}</h3>
                  <p className="font-medium text-brand">{job.company}</p>
                </div>
                <p className="text-sm text-muted sm:text-right">
                  {job.start} – {job.end} · {formatMonths(monthsBetween(job.start, job.end))}
                  <br className="hidden sm:block" />
                  <span className="sm:hidden"> · </span>
                  {job.location}
                </p>
              </div>
              <ul className="mt-4 list-disc space-y-2 pl-5 leading-relaxed marker:text-brand">
                {job.highlights.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
              <ul className="mt-5 flex flex-wrap gap-2" aria-label="Technologies used">
                {job.stack.map((tech) => (
                  <Tag key={tech}>{tech}</Tag>
                ))}
              </ul>
            </article>
          </li>
        ))}
      </ol>
    </Section>
  );
}
