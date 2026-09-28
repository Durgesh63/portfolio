import Image from "next/image";
import { skills } from "@/data/portfolio";
import { Section } from "../Section";

export function Skills() {
  return (
    <Section id="skills" eyebrow="Skills" title="Technologies I work with">
      <div className="grid gap-5 sm:grid-cols-2">
        {skills.map((group) => (
          <div
            key={group.group}
            className={`glass rounded-xl p-6 ${group.wide ? "sm:col-span-2" : ""}`}
          >
            <h3 className="font-semibold text-ink">{group.group}</h3>
            <ul className="mt-4 flex flex-wrap gap-2.5">
              {group.items.map((skill) => (
                <li
                  key={skill.name}
                  className="flex items-center gap-2.5 glass-chip rounded-lg py-1.5 pr-3.5 pl-1.5 text-sm font-medium text-ink"
                >
                  {/* White tile keeps dark logos (Next.js, Express) visible in dark mode. */}
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-white ring-1 ring-slate-200">
                    <Image src={`/tech/${skill.icon}.svg`} alt="" width={20} height={20} className="h-5 w-5" />
                  </span>
                  {skill.name}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
