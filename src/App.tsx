import { Hero } from "./components/Hero";
import { Projects } from "./components/Projects";
import { ExperienceTimeline } from "./components/ExperienceTimeline";
import { Toolkit } from "./components/Toolkit";
import { Now } from "./components/Now";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <main className="min-h-screen bg-[#080c0b] text-zinc-100">
      <div className="mx-auto max-w-[760px] px-4 py-10 sm:px-6 sm:py-14">
        <Hero />
        <Toolkit />
        <ExperienceTimeline />
        <Projects />
        <Now />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}
