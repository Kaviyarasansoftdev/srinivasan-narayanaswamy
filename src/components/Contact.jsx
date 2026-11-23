import { useState } from "react";
import {
  FiPhone,
  FiMail,
  FiMapPin,
  FiCopy,
  FiCheck,
  FiArrowUpRight,
  FiUserPlus,
} from "react-icons/fi";
import { FaWhatsapp, FaLinkedinIn, FaFacebookF } from "react-icons/fa";
import SectionHeading from "./SectionHeading";
import { downloadVCard } from "../utils/vcard";

const SOCIAL_ICONS = { linkedin: FaLinkedinIn, facebook: FaFacebookF };

function Line({ icon: Icon, label, value, display, href, external, copy = true }) {
  const [copied, setCopied] = useState(false);
  const onCopy = async () => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      /* blocked */
    }
  };

  return (
    <li className="flex items-center gap-4 border-b border-white/10 py-5">
      <span className="flex h-11 w-11 shrink-0 items-center justify-center border border-gold/50 text-gold-light">
        <Icon className="h-[18px] w-[18px]" />
      </span>
      <a
        href={href}
        {...(external && { target: "_blank", rel: "noopener noreferrer" })}
        className="group min-w-0 flex-1"
      >
        <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/45">{label}</p>
        <p
          className={`mt-0.5 text-[15px] font-medium text-white transition group-hover:text-gold-light sm:text-base ${
            display ? "leading-relaxed" : "truncate"
          }`}
        >
          {display || value}
        </p>
      </a>
      {copy ? (
        <button
          type="button"
          onClick={onCopy}
          aria-label={`Copy ${label}`}
          className="p-2 text-white/40 transition hover:text-gold-light"
        >
          {copied ? <FiCheck className="h-4 w-4 text-emerald-400" /> : <FiCopy className="h-4 w-4" />}
        </button>
      ) : (
        <FiArrowUpRight className="h-4 w-4 text-white/40" />
      )}
    </li>
  );
}

export default function Contact({ profile }) {
  const tel = profile.phone.replace(/\s/g, "");

  return (
    <section id="contact" className="relative scroll-mt-16 overflow-hidden bg-ink py-20 text-white lg:py-28">
      <div className="pointer-events-none absolute -right-40 -top-40 h-96 w-96 rounded-full border border-gold/20" />
      <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full border border-gold/20" />

      <div className="relative mx-auto max-w-5xl px-5 sm:px-8">
        <SectionHeading eyebrow="Reach Out" title="Get in Touch" light />

        <div className="grid gap-x-14 lg:grid-cols-2">
          <ul>
            <Line icon={FiPhone} label="Mobile" value={profile.phone} href={`tel:${tel}`} />
            <Line
              icon={FaWhatsapp}
              label="WhatsApp"
              value={profile.phone}
              href={`https://wa.me/${profile.whatsapp}`}
              external
              copy={false}
            />
            {profile.emails.map((e) => (
              <Line
                key={e.value}
                icon={FiMail}
                label={`Email · ${e.label}`}
                value={e.value}
                href={`mailto:${e.value}`}
              />
            ))}
          </ul>

          <div className="mt-10 lg:mt-0">
            <ul>
              {profile.address && (
                <Line
                  icon={FiMapPin}
                  label="Office Address"
                  value={profile.address.lines.join(", ")}
                  display={profile.address.lines.map((l, i) => (
                    <span key={l} className="block">
                      {l}
                      {i < profile.address.lines.length - 1 ? "," : ""}
                    </span>
                  ))}
                  href={profile.address.mapUrl}
                  external
                />
              )}
              {profile.socials.map((s) => (
                <Line
                  key={s.network}
                  icon={SOCIAL_ICONS[s.network]}
                  label={s.label}
                  value={s.label === "LinkedIn" ? "Connect on LinkedIn" : "Follow on Facebook"}
                  href={s.url}
                  external
                  copy={false}
                />
              ))}
            </ul>

            <div className="mt-10 border border-gold/40 p-6 sm:p-8">
              <p className="font-display text-xl">Keep my details handy</p>
              <p className="mt-2 text-sm leading-relaxed text-white/60">
                Save the contact to your phone with mobile number, emails, address and links in
                one tap.
              </p>
              <button
                type="button"
                onClick={() => downloadVCard(profile)}
                className="mt-6 flex w-full items-center justify-center gap-2 bg-gold py-3.5 text-sm font-semibold text-ink transition hover:bg-gold-light sm:w-auto sm:px-8"
              >
                <FiUserPlus className="h-4 w-4" />
                Save Contact
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
