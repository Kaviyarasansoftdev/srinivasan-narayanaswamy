import { FiPhone, FiMail, FiMapPin, FiArrowUpRight } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

export default function QuickActions({ profile }) {
  const actions = [
    profile.phone && {
      label: "Call",
      sub: "Talk directly",
      href: `tel:${profile.phone.replace(/\s/g, "")}`,
      icon: FiPhone,
    },
    profile.whatsapp && {
      label: "WhatsApp",
      sub: "Send a message",
      href: `https://wa.me/${profile.whatsapp}`,
      icon: FaWhatsapp,
      external: true,
    },
    profile.email && {
      label: "Email",
      sub: "Write to me",
      href: `mailto:${profile.email}`,
      icon: FiMail,
    },
    profile.mapUrl && {
      label: "Location",
      sub: "Get directions",
      href: profile.mapUrl,
      icon: FiMapPin,
      external: true,
    },
  ].filter(Boolean);

  return (
    <nav aria-label="Quick contact" className="grid grid-cols-2 gap-3 sm:grid-cols-4">
      {actions.map(({ label, sub, href, icon: Icon, external }) => (
        <a
          key={label}
          href={href}
          {...(external && { target: "_blank", rel: "noopener noreferrer" })}
          className="group relative flex flex-col gap-3 rounded-2xl border border-slate-200 bg-white p-4 transition hover:-translate-y-1 hover:border-ink hover:bg-ink hover:shadow-xl"
        >
          <FiArrowUpRight className="absolute right-3 top-3 h-4 w-4 text-slate-300 transition group-hover:text-gold" />
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gold-soft text-ink transition group-hover:bg-gold">
            <Icon className="h-5 w-5" />
          </span>
          <span>
            <span className="block text-sm font-semibold text-ink group-hover:text-white">
              {label}
            </span>
            <span className="block text-xs text-slate-500 group-hover:text-slate-300">{sub}</span>
          </span>
        </a>
      ))}
    </nav>
  );
}
