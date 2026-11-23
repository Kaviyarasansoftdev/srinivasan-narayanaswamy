import SectionHeading from "./SectionHeading";

export default function GlobalPresence({ forums, countries }) {
  return (
    <section id="global" className="scroll-mt-16 py-20 lg:py-28">
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <SectionHeading eyebrow="International" title="Global Forums & Presence" />

        <div className="grid gap-12 lg:grid-cols-2 lg:gap-0">
          {/* Forums */}
          <div className="lg:border-r lg:border-gold/40 lg:pr-12">
            <p className="mb-6 text-center text-xs font-semibold uppercase tracking-[0.22em] text-ink/50 lg:text-left">
              Forums
            </p>
            <ul className="flex items-center justify-center divide-x divide-gold/50 lg:justify-start">
              {forums.map((f) => (
                <li key={f.name} className="flex flex-col items-center gap-2 px-6 first:pl-0 last:pr-0 sm:px-10">
                  <img src={f.logo} alt={f.name} loading="lazy" className="h-12 w-auto object-contain" />
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-ink/60">
                    {f.name}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Countries */}
          <div className="lg:pl-12">
            <p className="mb-6 text-center text-xs font-semibold uppercase tracking-[0.22em] text-ink/50 lg:text-left">
              Countries
            </p>
            <ul className="grid grid-cols-4 gap-4">
              {countries.map((c) => (
                <li key={c.name} className="flex flex-col items-center gap-2.5">
                  <img
                    src={c.flag}
                    alt={`${c.name} flag`}
                    loading="lazy"
                    className="h-9 w-auto shadow-sm ring-1 ring-ink/10"
                  />
                  <span className="text-center font-display text-sm">{c.name}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
