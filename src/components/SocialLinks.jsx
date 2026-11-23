import { FaLinkedinIn, FaInstagram, FaFacebookF, FaYoutube, FaTelegramPlane } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const NETWORKS = {
  linkedin: { label: "LinkedIn", icon: FaLinkedinIn, color: "hover:bg-[#0a66c2]" },
  instagram: {
    label: "Instagram",
    icon: FaInstagram,
    color: "hover:bg-gradient-to-tr hover:from-[#f9ce34] hover:via-[#ee2a7b] hover:to-[#6228d7]",
  },
  facebook: { label: "Facebook", icon: FaFacebookF, color: "hover:bg-[#1877f2]" },
  x: { label: "X", icon: FaXTwitter, color: "hover:bg-black" },
  youtube: { label: "YouTube", icon: FaYoutube, color: "hover:bg-[#ff0000]" },
  telegram: { label: "Telegram", icon: FaTelegramPlane, color: "hover:bg-[#229ed9]" },
};

export default function SocialLinks({ socials = {} }) {
  const items = Object.entries(socials).filter(([key, url]) => url && NETWORKS[key]);
  if (!items.length) return null;

  return (
    <div className="flex flex-wrap gap-2.5">
      {items.map(([key, url]) => {
        const { label, icon: Icon, color } = NETWORKS[key];
        return (
          <a
            key={key}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className={`flex items-center gap-2 rounded-full bg-white py-2.5 pl-3 pr-4 text-sm font-medium text-ink ring-1 ring-slate-200 transition hover:-translate-y-0.5 hover:text-white hover:shadow-lg hover:ring-transparent ${color}`}
          >
            <Icon className="h-4 w-4" />
            {label}
          </a>
        );
      })}
    </div>
  );
}
