export default function SectionHeading({ eyebrow, title, light = false }) {
  return (
    <div className="mb-10 text-center lg:mb-14">
      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">{eyebrow}</p>
      <h2
        className={`mt-3 font-display text-3xl font-bold sm:text-4xl ${
          light ? "text-white" : "text-ink"
        }`}
      >
        {title}
      </h2>
      <div className="mx-auto mt-5 flex items-center justify-center gap-2" aria-hidden="true">
        <span className="h-px w-10 bg-gold/60" />
        <span className="h-1.5 w-1.5 rotate-45 bg-gold" />
        <span className="h-px w-10 bg-gold/60" />
      </div>
    </div>
  );
}
