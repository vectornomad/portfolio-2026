import type { LucideIcon } from "lucide-react";
import {
  AppWindow,
  Bot,
  Braces,
  BrainCircuit,
  Code2,
  Coffee,
  Container,
  Database,
  Flame,
  GitBranch,
  Mic,
  Network,
  Server,
  Terminal,
  WandSparkles,
} from "lucide-react";
import { SectionLabel } from "./SectionLabel";

type Skill = {
  label: string;
  icon: LucideIcon;
};

const productSkills: Skill[] = [
  { label: "Python", icon: Code2 },
  { label: "TypeScript", icon: Braces },
  { label: "JavaScript", icon: Braces },
  { label: "Java", icon: Coffee },
  { label: "React", icon: AppWindow },
  { label: "Vite", icon: WandSparkles },
  { label: "Next.js", icon: AppWindow },
  { label: "Tailwind CSS", icon: Braces },
  { label: "Electron", icon: AppWindow },
  { label: "FastAPI", icon: Server },
  { label: "Node.js", icon: Server },
];

const systemsSkills: Skill[] = [
  { label: "Ollama", icon: Bot },
  { label: "ChromaDB", icon: Database },
  { label: "Whisper", icon: Mic },
  { label: "RAG", icon: BrainCircuit },
  { label: "LLM agents", icon: Network },
  { label: "ElevenLabs", icon: Mic },
  { label: "PostgreSQL", icon: Database },
  { label: "Firebase", icon: Flame },
  { label: "SQLAlchemy", icon: Database },
  { label: "Git", icon: GitBranch },
  { label: "Docker", icon: Container },
  { label: "Linux", icon: Terminal },
];

function SkillGroup({ skills, duplicate = false }: { skills: Skill[]; duplicate?: boolean }) {
  return (
    <div className="skills-group" aria-hidden={duplicate || undefined}>
      {skills.map(({ label, icon: Icon }) => (
        <span className="skills-item" key={label}>
          <Icon size={14} strokeWidth={1.7} aria-hidden="true" />
          <span>{label}</span>
        </span>
      ))}
    </div>
  );
}

function SkillRow({ skills, reverse, label }: { skills: Skill[]; reverse?: boolean; label: string }) {
  return (
    <div
      className="skills-marquee"
      tabIndex={0}
      aria-label={label}
    >
      <div className={`skills-track${reverse ? " skills-track-reverse" : ""}`}>
        <SkillGroup skills={skills} />
        <SkillGroup skills={skills} duplicate />
      </div>
    </div>
  );
}

export function Toolkit() {
  return (
    <section id="toolkit" className="overflow-hidden border-t border-zinc-800 py-7">
      <SectionLabel>My Skills</SectionLabel>

      <div className="mt-5 space-y-3">
        <SkillRow
          skills={productSkills}
          label="Languages, frontend, and backend skills"
        />
        <SkillRow
          skills={systemsSkills}
          reverse
          label="AI, database, and developer tool skills"
        />
      </div>
    </section>
  );
}
