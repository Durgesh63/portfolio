type SectionProps = {
  id: string;
  eyebrow: string;
  title: string;
  children: React.ReactNode;
};

export function Section({ id, eyebrow, title, children }: SectionProps) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className="scroll-mt-16 py-16 sm:py-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <p className="text-sm font-semibold uppercase tracking-wider text-brand">{eyebrow}</p>
        <h2 id={`${id}-title`} className="mt-2 text-2xl font-bold text-ink sm:text-3xl">
          {title}
        </h2>
        <div className="mt-8 sm:mt-10">{children}</div>
      </div>
    </section>
  );
}

export function Tag({ children }: { children: React.ReactNode }) {
  return <li className="glass-chip rounded-md px-2.5 py-1 text-xs font-medium text-body">{children}</li>;
}
