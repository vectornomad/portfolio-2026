export type ExperienceStatus = "Active" | "Studying" | "Building";

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
    id: "series-intern",
    organization: "Series",
    role: "Software Developer Intern",
    period: "2025–Present",
    status: "Active",
    logo: "SR",
    description:
      "Contributing to full-stack product work across profile systems, Firebase data structures, and recommendation features.",
    contributions: [
      "Built and refined user profile workflows.",
      "Supported an NLP-powered recommendation feature.",
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
