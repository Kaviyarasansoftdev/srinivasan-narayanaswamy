import { useState } from "react";
import { FiPhone, FiMail, FiGlobe, FiMapPin, FiCopy, FiCheck } from "react-icons/fi";

function Row({ icon: Icon, label, value, href, external }) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      /* clipboard blocked */
    }
  };

  return (
    <li className="flex items-center gap-3 rounded-2xl bg-white p-3 ring-1 ring-slate-200/70">
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-ink text-gold">
        <Icon className="h-[18px] w-[18px]" />
      </span>
      <a
        href={href}
        {...(external && { target: "_blank", rel: "noopener noreferrer" })}
        className="min-w-0 flex-1"
      >
        <p className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">{label}</p>
        <p className="truncate text-sm font-medium text-ink hover:text-gold">{value}</p>
      </a>
      <button
        type="button"
        onClick={copy}
        aria-label={`Copy ${label}`}
        className="rounded-lg p-2 text-slate-400 transition hover:bg-slate-100 hover:text-ink"
      >
        {copied ? <FiCheck className="h-4 w-4 text-emerald-600" /> : <FiCopy className="h-4 w-4" />}
      </button>
    </li>
  );
}

export default function ContactDetails({ profile }) {
  const rows = [
    profile.phone && {
      icon: FiPhone,
      label: "Mobile",
      value: profile.phone,
      href: `tel:${profile.phone.replace(/\s/g, "")}`,
    },
    profile.email && {
      icon: FiMail,
      label: "Email",
      value: profile.email,
      href: `mailto:${profile.email}`,
    },
    profile.website && {
      icon: FiGlobe,
      label: "Website",
      value: profile.website.replace(/^https?:\/\//, "").replace(/\/$/, ""),
      href: profile.website,
      external: true,
    },
    profile.address && {
      icon: FiMapPin,
      label: "Address",
      value: profile.address,
      href: profile.mapUrl || `https://maps.google.com/?q=${encodeURIComponent(profile.address)}`,
      external: true,
    },
  ].filter(Boolean);

  return (
    <ul className="grid gap-3 md:grid-cols-2">
      {rows.map((r) => (
        <Row key={r.label} {...r} />
      ))}
    </ul>
  );
}
