export interface Experience {
  id: string;
  year: string;
  position: string;
  organization: string;
  description: string;
  technologies?: string[];
  responsibilities?: string[];
}

export const experiences: Experience[] = [
  {
    id: "exp-1",
    year: "2025",
    position: "Technical Team",
    organization: "Digitalisasi Pembelajaran / Interactive Flat Panel",
    description:
      "Contributing to the digital transformation of learning environments through interactive flat panel technology integration and technical implementation.",
    technologies: ["Technical Support", "Digital Learning"],
    responsibilities: [
      "Technical setup and configuration",
      "System integration support",
    ],
  },
  {
    id: "exp-2",
    year: "2024",
    position: "Web Developer",
    organization: "Sistem Manajemen Aset dan Inventaris",
    description:
      "Developed a comprehensive web-based system for digitizing asset management and inventory tracking processes.",
    technologies: ["Laravel", "PHP", "MySQL", "Bootstrap", "JavaScript"],
    responsibilities: [
      "Full-stack development",
      "Database design and implementation",
      "UI/UX implementation",
    ],
  },
  {
    id: "exp-3",
    year: "2024",
    position: "Research Team Member / 2D Artist",
    organization: "Educational Game Development",
    description:
      "Contributed to the research and development of an educational game integrating local culture with Mathematics and Physics.",
    technologies: ["Blender", "2D Asset Design", "Game Development"],
    responsibilities: [
      "2D asset creation and design",
      "Research and documentation",
      "Game concept development",
    ],
  },
];
