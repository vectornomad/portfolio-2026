import { Hero } from "./components/Hero";
import { Projects } from "./components/Projects";
import { ExperienceTimeline } from "./components/ExperienceTimeline";
import { Toolkit } from "./components/Toolkit";
import { Now } from "./components/Now";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Blog } from "./components/Blog";

export default function App() {
  if (window.location.pathname === "/blog" || window.location.pathname.startsWith("/blog/")) return <Blog />;
  return (
    <main className="signal-shell min-h-screen">
      <div className="signal-container">
        <Hero />
        <Projects />
        <Toolkit />
        <ExperienceTimeline />
        <Now />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}
