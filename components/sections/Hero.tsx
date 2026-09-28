import Image from "next/image";
import { highlights, profile } from "@/data/portfolio";
import { ResumeButton } from "../ResumeButton";
import { GitHubIcon, LinkedInIcon, MailIcon, MapPinIcon } from "../icons";

const socials = [
  { href: profile.linkedin, label: "LinkedIn", Icon: LinkedInIcon },
  { href: profile.github, label: "GitHub", Icon: GitHubIcon },
  { href: `mailto:${profile.email}`, label: "Email", Icon: MailIcon },
];

export function Hero() {
  return (
    <section id="top">
      <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-24">
        <div className="flex flex-col-reverse items-start gap-10 md:flex-row md:items-center md:justify-between">
          <div className="max-w-2xl">
            <h1 className="text-4xl font-bold tracking-tight text-ink sm:text-5xl">{profile.name}</h1>
            <p className="mt-3 text-xl font-semibold text-brand sm:text-2xl">
              {profile.role} · {profile.experience}
            </p>
            <p className="mt-5 text-lg leading-relaxed text-body">{profile.headline}</p>
            <p className="mt-4 inline-flex items-center gap-1.5 text-sm text-muted">
              <MapPinIcon className="h-4 w-4" />
              {profile.location}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <ResumeButton location="hero" />
              <div className="flex gap-2">
                {socials.map(({ href, label, Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="inline-flex h-11 w-11 items-center justify-center glass rounded-lg text-ink transition-colors hover:text-brand"
                  >
                    <Icon />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <Image
            src={profile.avatar}
            alt={`Photo of ${profile.name}`}
            width={200}
            height={200}
            priority
            className="h-32 w-32 glass rounded-2xl object-cover p-1.5 sm:h-44 sm:w-44 md:h-52 md:w-52"
          />
        </div>

        <ul className="mt-14 grid gap-4 sm:grid-cols-2">
          {highlights.map((item) => (
            <li key={item.title} className="glass rounded-xl p-5">
              <p className="text-lg font-bold text-ink">{item.title}</p>
              <p className="mt-2 text-sm leading-relaxed text-muted">{item.detail}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
