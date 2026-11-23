import { profile } from "./data/profile";
import TopBar from "./components/TopBar";
import Hero from "./components/Hero";
import Ventures from "./components/Ventures";
import GlobalPresence from "./components/GlobalPresence";
import Resume from "./components/Resume";
import Contact from "./components/Contact";

export default function App() {
  return (
    <>
      <TopBar profile={profile} />
      <main>
        <Hero profile={profile} />
        <Ventures ventures={profile.ventures} />
        <GlobalPresence forums={profile.forums} countries={profile.countries} />
        <Resume profile={profile} />
        <Contact profile={profile} />
      </main>
      <footer className="bg-ink-deep py-6 text-center text-xs tracking-wide text-white/45">
        © {new Date().getFullYear()} {profile.name}. All rights reserved.
      </footer>
    </>
  );
}
