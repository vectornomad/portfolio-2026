export type ExperienceStatus = "Active" | "Studying" | "Building" | "Completed";

export type Experience = {
  id: string;
  organization: string;
  role: string;
  period: string;
  status: ExperienceStatus;
  logo: string;
  description: string;
  contributions?: string[];
};

export const experience: Experience[] = [
  {
    id: "mercor-contract",
    organization: "Mercor",
    role: "Software Engineer (Contract)",
    period: "2026",
    status: "Completed",
    logo: "MC",
    description:
      "Contract software engineering focused on coding agent workflows, evaluating and improving AI-assisted development systems.",
    contributions: [
      "Selected for the Exceptional Software Engineers program (Coding Agent Experience).",
      "Applying agent-systems experience from Recuris and PatchPilot to production AI tooling.",
    ],
  },
  {
    id: "series-intern",
    organization: "Series",
    role: "Software Engineering Intern",
    period: "Jul 2024–Jul 2025",
    status: "Completed",
    logo: "SR",
    description:
      "Built distributed backend services and full-stack product features across profile systems, Firebase data structures, and NLP-driven recommendations.",
    contributions: [
      "Built Node.js and Python backend services handling 10,000+ daily API requests at sub-200ms latency.",
      "Designed NLP-driven recommendations that increased engagement by 30% across 1,500+ active users.",
      "Optimized PostgreSQL indexing and query plans, reducing read latency by 20%.",
      "Integrated LLM tooling to automate internal classification and summarization workflows.",
    ],
  },
  {
    id: "lewis-university",
    organization: "Lewis University",
    role: "Computer Science Student",
    period: "2025–Present",
    status: "Studying",
    logo: "LU",
    description:
      "Studying software engineering, operating systems, data structures, computer security, and computer systems.",
    contributions: [
      "Strengthening systems and software engineering fundamentals.",
      "Applying coursework through independent product development.",
    ],
  },
  {
    id: "vector-nomad",
    organization: "Vector Nomad",
    role: "Independent Software Builder",
    period: "2024–Present",
    status: "Building",
    logo: "VN",
    description:
      "Building AI assistants, local knowledge systems, autonomous agents, developer tools, and desktop applications.",
    contributions: [
      "Developing Recuris, Indexia, Ren, and WarmGraph.",
      "Exploring local-first AI and agent coordination workflows.",
    ],
  },
];
