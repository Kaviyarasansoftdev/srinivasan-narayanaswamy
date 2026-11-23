import { FiArrowUpRight, FiMail } from "react-icons/fi";
import SectionHeading from "./SectionHeading";

export default function Ventures({ ventures }) {
  return (
    <section id="ventures" className="scroll-mt-16 bg-white/60 py-20 lg:py-28">
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <SectionHeading eyebrow="Leadership" title="Ventures & Roles" />

        <div className="gold-rule" />
        {ventures.map((v, i) => (
          <div key={v.company}>
            <article className="group grid items-center gap-5 py-8 sm:grid-cols-[3rem_200px_1fr_auto] sm:gap-8">
              <span className="hidden font-display text-2xl text-gold/70 sm:block">
                {String(i + 1).padStart(2, "0")}
              </span>

              <div className="flex h-20 items-center justify-center sm:justify-start">
                <img
                  src={v.logo}
                  alt={`${v.company} logo`}
                  loading="lazy"
                  className="max-h-20 max-w-[180px] object-contain"
                />
              </div>

              <div className="text-center sm:border-l sm:border-gold/50 sm:pl-8 sm:text-left">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold">
                  {v.role}
                </p>
                <h3 className="mt-1.5 font-display text-2xl font-bold">{v.company}</h3>
                {v.email && (
                  <a
                    href={`mailto:${v.email}`}
                    className="mt-2 inline-flex items-center gap-2 text-sm text-ink/65 transition hover:text-gold"
                  >
                    <FiMail className="h-3.5 w-3.5" />
                    {v.email}
                  </a>
                )}
              </div>

              {v.url ? (
                <a
                  href={v.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mx-auto inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-ink transition hover:text-gold sm:mx-0"
                >
                  {v.url.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "")}
                  <FiArrowUpRight className="h-4 w-4 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>
              ) : (
                <span className="hidden sm:block" />
              )}
            </article>
            <div className="gold-rule" />
          </div>
        ))}
      </div>
    </section>
  );
}
