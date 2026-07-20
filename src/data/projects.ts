export type ProjectStatus =
  | "Active"
  | "In development"
  | "Prototype"
  | "Completed";

export type Project = {
  id: string;
  title: string;
  category: string;
  description: string;
  stack: string[];
  status: ProjectStatus;
  details: string[];
  href?: string;
  github?: string;
};

export const projects: Project[] = [
  {
    id: "recuris",
    title: "Recuris",
    category: "AI Agents",
    description:
      "An autonomous AI software team that coordinates specialized agents, task graphs, shared context, and developer workflows.",
    stack: ["Python", "FastAPI", "Typer", "AI Agents", "Ollama"],
    status: "In development",
    href: "https://recuris.xyz",
    github: "https://github.com/vectornomad/Recuris",
    details: [
      "Coordinates multiple specialized agents",
      "Uses task graphs for workflow execution",
      "Designed for end-to-end software development tasks",
      "Includes a developer-facing CLI",
    ],
  },
  {
    id: "indexia",
    title: "Indexia",
    category: "Local AI",
    description:
      "A local-first AI second brain for storing, embedding, searching, and retrieving personal knowledge.",
    stack: ["Python", "Ollama", "ChromaDB", "Embeddings", "RAG"],
    status: "Active",
    github: "https://github.com/vectornomad/indexia",
    details: [
      "Runs locally",
      "Supports semantic search",
      "Uses vector-based memory",
      "Focused on private personal knowledge workflows",
    ],
  },
  {
    id: "ren",
    title: "Ren",
    category: "Desktop AI",
    description:
      "A voice-enabled desktop assistant with speech recognition, memory, reminders, and local-first workflows.",
    stack: ["Electron", "React", "TypeScript", "Flask", "Whisper", "ElevenLabs"],
    status: "Prototype",
    details: [
      "Voice input and speech output",
      "Semantic and episodic memory",
      "Reminder and dialogue management",
      "Desktop-first interaction model",
    ],
  },
  {
    id: "warmgraph",
    title: "WarmGraph",
    category: "Full Stack",
    description:
      "A relationship intelligence tool for tracking people, conversations, follow-ups, and professional connections.",
    stack: ["Next.js", "FastAPI", "PostgreSQL", "SQLAlchemy"],
    status: "In development",
    details: [
      "Contact and relationship tracking",
      "Follow-up scoring",
      "API-driven architecture",
      "Designed for networking workflows",
    ],
  },
  {
    id: "taahirah-os",
    title: "TaahirahOS",
    category: "Interactive Portfolio",
    description:
      "A retro desktop-style portfolio with draggable windows, apps, CRT effects, and a custom operating-system interface.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS"],
    status: "Active",
    href: "https://taahirah-exe.vercel.app",
    github: "https://github.com/vectornomad/taahirah.exe",
    details: [
      "Window manager",
      "Retro desktop UI",
      "Interactive app-style sections",
      "Custom visual effects",
    ],
  },
];
