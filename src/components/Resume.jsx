import { FiDownload, FiBriefcase, FiBookOpen, FiGlobe } from "react-icons/fi";
import SectionHeading from "./SectionHeading";

function TimelineGroup({ icon: Icon, title, items }) {
  if (!items.length) return null;
  return (
    <div>
      <h3 className="mb-6 flex items-center gap-3 font-display text-xl font-bold">
        <span className="flex h-9 w-9 items-center justify-center border border-gold/60 text-gold">
          <Icon className="h-4 w-4" />
        </span>
        {title}
      </h3>
      <ol className="relative ml-[17px] border-l border-gold/40">
        {items.map((it, i) => (
          <li key={i} className="relative pb-8 pl-8 last:pb-0">
            <span className="absolute -left-[5px] top-1.5 h-2.5 w-2.5 rotate-45 bg-gold" />
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">{it.period}</p>
            <p className="mt-1 font-display text-lg font-bold leading-snug">{it.title}</p>
            {it.subtitle && <p className="text-sm font-medium text-ink/70">{it.subtitle}</p>}
            {it.note && <p className="mt-1.5 text-sm leading-relaxed text-ink/60">{it.note}</p>}
          </li>
        ))}
      </ol>
    </div>
  );
}

export default function Resume({ profile }) {
  const { resume, ventures, forums, countries } = profile;

  const current = ventures.map((v) => ({
    period: "Present",
    title: v.role,
    subtitle: v.company,
  }));

  const experience = resume.experience.map((e) => ({
    period: e.period,
    title: e.role,
    subtitle: e.company,
    note: e.note,
  }));

  const education = resume.education.map((e) => ({
    period: e.period,
    title: e.degree,
    subtitle: e.institution,
  }));

  const global = [
    {
      period: "International",
      title: forums.map((f) => f.name).join(" · "),
      subtitle: countries.map((c) => c.name).join(", "),
    },
  ];

  return (
    <section id="resume" className="scroll-mt-16 bg-paper-2/60 py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading eyebrow="Curriculum Vitae" title="Resume" />

        <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          {/* Left: summary + expertise */}
          <div className="lg:sticky lg:top-24 lg:self-start">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-ink/50">
              Professional Summary
            </p>
            <p className="mt-4 border-l-2 border-gold pl-5 font-display text-lg leading-relaxed text-ink/85">
              {resume.summary}
            </p>

            <p className="mt-10 text-xs font-semibold uppercase tracking-[0.22em] text-ink/50">
              Areas of Expertise
            </p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {resume.expertise.map((x) => (
                <li
                  key={x}
                  className="border border-ink/15 bg-white/70 px-3.5 py-2 text-[13px] font-medium text-ink"
                >
                  {x}
                </li>
              ))}
            </ul>

            {resume.file && (
              <a
                href={resume.file}
                download
                className="mt-10 inline-flex w-full items-center justify-center gap-2 bg-ink px-8 py-4 text-sm font-semibold text-white transition hover:bg-gold sm:w-auto"
              >
                <FiDownload className="h-4 w-4 text-gold-light" />
                To Know More About Me
              </a>
            )}
          </div>

          {/* Right: timeline */}
          <div className="space-y-12">
            <TimelineGroup icon={FiBriefcase} title="Current Positions" items={current} />
            <TimelineGroup icon={FiBriefcase} title="Experience" items={experience} />
            <TimelineGroup icon={FiGlobe} title="Global Engagements" items={global} />
            <TimelineGroup icon={FiBookOpen} title="Education" items={education} />
          </div>
        </div>
      </div>
    </section>
  );
}
