import { projects } from "@/data/portfolio";
import { Section, Tag } from "../Section";
import { ExternalIcon, GitHubIcon } from "../icons";

export function Projects() {
  return (
    <Section id="projects" eyebrow="Projects" title="Things I've built">
      <div className="grid gap-5 md:grid-cols-3">
        {projects.map((project) => (
          <article
            key={project.name}
            className="glass flex flex-col rounded-xl p-6 transition-transform hover:-translate-y-1"
          >
            <div className="flex items-start justify-between gap-3">
              <h3 className="text-lg font-semibold text-ink">{project.name}</h3>
              {project.badge && (
                <span className="shrink-0 rounded-full bg-amber-50 px-2.5 py-0.5 text-xs font-semibold text-amber-700 dark:bg-amber-950 dark:text-amber-300">
                  {project.badge}
                </span>
              )}
            </div>
            <p className="mt-1 text-sm font-medium text-brand">{project.tagline}</p>
            <p className="mt-3 flex-1 leading-relaxed">{project.description}</p>
            <ul className="mt-5 flex flex-wrap gap-2" aria-label="Technologies used">
              {project.stack.map((tech) => (
                <Tag key={tech}>{tech}</Tag>
              ))}
            </ul>
            {(project.github || project.live) && (
              <div className="mt-5 flex gap-4 border-t border-line pt-4 text-sm font-semibold">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-ink hover:text-brand"
                  >
                    <GitHubIcon className="h-4 w-4" /> Code
                  </a>
                )}
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-ink hover:text-brand"
                  >
                    <ExternalIcon className="h-4 w-4" /> Live demo
                  </a>
                )}
              </div>
            )}
          </article>
        ))}
      </div>
    </Section>
  );
}
