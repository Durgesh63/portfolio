import { profile } from "@/data/portfolio";
import { Section } from "../Section";
import { ResumeButton } from "../ResumeButton";
import { GitHubIcon, LinkedInIcon, MailIcon, PhoneIcon } from "../icons";

const { availability } = profile;

const channels = [
  { label: "Email", value: profile.email, href: `mailto:${profile.email}`, Icon: MailIcon },
  { label: "Phone", value: profile.phone, href: `tel:${profile.phone.replace(/-/g, "")}`, Icon: PhoneIcon },
  { label: "LinkedIn", value: "in/durgeshmaurya", href: profile.linkedin, Icon: LinkedInIcon },
  { label: "GitHub", value: "Durgesh63", href: profile.github, Icon: GitHubIcon },
];

export function Contact() {
  return (
    <Section id="contact" eyebrow="Contact" title="Let's work together">
      <p className="max-w-2xl text-lg leading-relaxed">
        I&apos;m open to Java Full Stack roles in {availability.locations.join(" or ")}, and to{" "}
        {availability.workModes.join(" or ").toLowerCase()} work. Notice period: {availability.noticePeriod}. You
        can reach me by phone, email or LinkedIn.
      </p>
      <ul className="mt-8 grid gap-4 sm:grid-cols-2">
        {channels.map(({ label, value, href, Icon }) => (
          <li key={label}>
            <a
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              className="glass flex items-center gap-4 rounded-xl p-5 transition-transform hover:-translate-y-0.5"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-brand-soft text-brand">
                <Icon />
              </span>
              <span className="min-w-0">
                <span className="block text-sm text-muted">{label}</span>
                <span className="block truncate font-semibold text-ink">{value}</span>
              </span>
            </a>
          </li>
        ))}
      </ul>
      <div className="mt-8">
        <ResumeButton location="contact" />
      </div>
    </Section>
  );
}
