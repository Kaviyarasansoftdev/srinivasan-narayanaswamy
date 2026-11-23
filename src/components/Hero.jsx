import { useState } from "react";
import { FiPhone, FiUserPlus, FiShare2, FiCheck } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { downloadVCard, sharePage } from "../utils/vcard";

export default function Hero({ profile }) {
  const [copied, setCopied] = useState(false);

  const onShare = async () => {
    if (await sharePage(profile)) {
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    }
  };

  return (
    <section id="top" className="relative overflow-hidden">
      {/* Gold sweep, echoing the banner */}
      <svg
        className="pointer-events-none absolute -bottom-10 left-0 w-full text-gold/60"
        viewBox="0 0 1440 160"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path d="M0 150 C 480 150, 980 120, 1440 10" fill="none" stroke="currentColor" strokeWidth="2" />
        <path d="M0 158 C 520 158, 1020 132, 1440 34" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.5" />
      </svg>

      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 pb-20 pt-12 sm:px-8 lg:grid-cols-[1.25fr_0.75fr] lg:gap-16 lg:pb-28 lg:pt-20">
        {/* Portrait — first on mobile, right on desktop */}
        <div className="rise relative mx-auto w-56 sm:w-64 lg:order-2 lg:w-full lg:max-w-[340px]">
          <div className="absolute -inset-3 rounded-t-full border border-gold/60" />
          <div className="relative aspect-[4/5] overflow-hidden rounded-t-full bg-paper-2 shadow-[0_30px_60px_-25px_rgba(19,32,74,0.45)]">
            {profile.photo && (
              <img
                src={profile.photo}
                alt={profile.name}
                width="340"
                height="425"
                fetchPriority="high"
                className="h-full w-full object-cover object-[center_15%]"
              />
            )}
          </div>
          <div className="absolute -bottom-4 left-1/2 h-1 w-24 -translate-x-1/2 bg-gold" />
        </div>

        {/* Text */}
        <div className="text-center lg:order-1 lg:text-left">
          <p className="rise text-xs font-semibold uppercase tracking-[0.3em] text-gold">
            Official Profile
          </p>

          <h1 className="rise d1 mt-5 inline-block border-gold font-display text-[2.4rem] font-bold uppercase leading-[1.05] tracking-wide sm:text-6xl lg:border-l-4 lg:pl-6 lg:text-[4.2rem]">
            {profile.firstName}
            <br />
            {profile.lastName}
          </h1>

          <ul className="rise d2 mt-7 flex flex-wrap justify-center gap-x-3 gap-y-1.5 font-display text-base text-ink/80 sm:text-lg lg:justify-start">
            {profile.headline.map((h, i) => (
              <li key={h} className="flex items-center gap-3">
                {i > 0 && <span className="h-4 w-px bg-gold" aria-hidden="true" />}
                {h}
              </li>
            ))}
          </ul>

          <div className="rise d3 mt-10 flex flex-wrap justify-center gap-3 lg:justify-start">
            <a
              href={`tel:${profile.phone.replace(/\s/g, "")}`}
              className="flex items-center gap-2 bg-ink px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-ink-deep"
            >
              <FiPhone className="h-4 w-4 text-gold-light" />
              {profile.phone}
            </a>
            <a
              href={`https://wa.me/${profile.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-white bg-[#25D366] gap-2 border border-ink px-6 py-3.5 text-sm font-semibold text-ink transition hover:bg-ink hover:text-white"
            >
              <FaWhatsapp className="h-4 w-4" />
              WhatsApp
            </a>
            <button
              type="button"
              onClick={() => downloadVCard(profile)}
              className="flex items-center gap-2 border border-gold bg-gold/10 px-6 py-3.5 text-sm font-semibold text-ink transition hover:bg-gold hover:text-white"
            >
              <FiUserPlus className="h-4 w-4" />
              Save Contact
            </button>
            <button
              type="button"
              onClick={onShare}
              aria-label="Share this page"
              className="flex h-[50px] w-[50px] items-center justify-center border border-ink/25 text-ink transition hover:border-gold hover:text-gold"
            >
              {copied ? <FiCheck className="h-4 w-4" /> : <FiShare2 className="h-4 w-4" />}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
