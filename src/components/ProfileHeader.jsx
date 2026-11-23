import { useState } from "react";
import { HiCheckBadge } from "react-icons/hi2";
import { FiUserPlus, FiShare2, FiCheck } from "react-icons/fi";
import { downloadVCard } from "../utils/vcard";

function initials(name) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();
}

export default function ProfileHeader({ profile }) {
  const [shared, setShared] = useState(false);

  const share = async () => {
    try {
      if (navigator.share) {
        await navigator.share({
          title: profile.name,
          text: `${profile.name} — ${profile.designation}, ${profile.company}`,
          url: window.location.href,
        });
      } else {
        await navigator.clipboard.writeText(window.location.href);
        setShared(true);
        setTimeout(() => setShared(false), 1800);
      }
    } catch {
      /* cancelled */
    }
  };

  // Split name so the badge sticks to the LAST word and never floats alone
  const words = profile.name.trim().split(" ");
  const lastWord = words.pop();

  return (
    <aside className="relative overflow-hidden bg-ink text-white">
      {/* Decorative glows */}
      <div className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-gold/25 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 -right-20 h-80 w-80 rounded-full bg-slate-500/20 blur-3xl" />

      <div className="relative flex h-full flex-col items-center px-6 pb-8 pt-10 text-center sm:px-10 lg:pt-14">
        {/* Portrait */}
        <div className="relative">
          <div className="absolute inset-0 translate-x-3 translate-y-3 rounded-[2rem] border-2 border-gold/70" />
          <div className="relative h-52 w-44 overflow-hidden rounded-[2rem] bg-ink-2 shadow-2xl ring-1 ring-white/10 sm:h-60 sm:w-52 lg:h-72 lg:w-60">
            {profile.photo ? (
              <img
                src={profile.photo}
                alt={profile.name}
                width="240"
                height="288"
                className="h-full w-full object-cover object-[center_20%]"
              />
            ) : (
              <div className="flex h-full w-full items-center justify-center font-display text-6xl font-bold text-gold">
                {initials(profile.name)}
              </div>
            )}
          </div>
        </div>

        {/* Name */}
        <h1 className="mt-9 font-display text-[1.75rem] font-bold leading-tight sm:text-3xl lg:text-[2.1rem]">
          {words.join(" ")}{" "}
          <span className="whitespace-nowrap">
            {lastWord}
            <HiCheckBadge
              className="ml-1.5 inline-block h-6 w-6 -translate-y-1 align-middle text-gold"
              aria-label="Verified"
            />
          </span>
        </h1>

        {profile.designation && (
          <p className="mt-3 text-sm font-semibold uppercase tracking-[0.18em] text-gold">
            {profile.designation}
          </p>
        )}
        {profile.company && (
          <p className="mt-1 text-sm text-slate-300">{profile.company}</p>
        )}

        {profile.tagline && (
          <p className="mt-5 max-w-xs border-t border-white/10 pt-5 font-display text-base italic text-slate-300">
            “{profile.tagline}”
          </p>
        )}

        {/* Buttons */}
        <div className="mt-7 flex w-full max-w-xs gap-2.5 lg:mt-auto lg:pt-8">
          <button
            type="button"
            onClick={() => downloadVCard(profile)}
            className="flex flex-1 items-center justify-center gap-2 rounded-full bg-gold py-3.5 text-sm font-semibold text-ink shadow-lg shadow-gold/20 transition hover:bg-gold-soft active:scale-[0.98]"
          >
            <FiUserPlus className="h-4 w-4" />
            Save Contact
          </button>
          <button
            type="button"
            onClick={share}
            aria-label="Share this page"
            className="flex h-[50px] w-[50px] items-center justify-center rounded-full border border-white/25 text-white transition hover:border-gold hover:text-gold active:scale-[0.98]"
          >
            {shared ? <FiCheck className="h-5 w-5" /> : <FiShare2 className="h-5 w-5" />}
          </button>
        </div>
      </div>
    </aside>
  );
}
