import { FiPhone } from "react-icons/fi";

const links = [
  { href: "#ventures", label: "Ventures" },
  { href: "#global", label: "Global" },
  { href: "#resume", label: "Resume" },
  { href: "#contact", label: "Contact" },
];

export default function TopBar({ profile }) {
  return (
    <header className="sticky top-0 z-30 border-b border-gold/20 bg-paper/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
        <a href="#top" className="flex items-center gap-3">
          <span className="flex h-9 w-9 items-center justify-center border border-gold font-display text-sm font-bold text-ink">
            SN
          </span>
          <span className="hidden font-display text-sm font-semibold tracking-wide sm:block">
            {profile.name}
          </span>
        </a>

        <nav className="flex items-center gap-6">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="hidden text-xs font-semibold uppercase tracking-[0.18em] text-ink/70 transition hover:text-gold md:block"
            >
              {l.label}
            </a>
          ))}
          <a
            href={`tel:${profile.phone.replace(/\s/g, "")}`}
            className="flex items-center gap-2 bg-ink px-4 py-2.5 text-xs font-semibold uppercase tracking-[0.14em] text-white transition hover:bg-gold"
          >
            <FiPhone className="h-3.5 w-3.5" />
            Call
          </a>
        </nav>
      </div>
    </header>
  );
}
