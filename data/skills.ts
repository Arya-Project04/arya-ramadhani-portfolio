import {
  Globe,
  Cpu,
  Brain,
  Palette,
  type LucideIcon,
} from "lucide-react";

export interface Specialization {
  number: string;
  title: string;
  description: string;
  icon: LucideIcon;
  technologies: string[];
}

export interface SkillCategory {
  title: string;
  skills: string[];
}

export const specializations: Specialization[] = [
  {
    number: "01",
    title: "Web & Mobile Development",
    description:
      "Building responsive web applications and mobile solutions with modern frameworks and best practices.",
    icon: Globe,
    technologies: [
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "HTML",
      "CSS",
      "Tailwind CSS",
      "Bootstrap",
      "PHP",
      "Laravel",
      "Node.js",
      "REST API",
    ],
  },
  {
    number: "02",
    title: "IoT",
    description:
      "Developing embedded systems and IoT solutions for real-world automation and monitoring.",
    icon: Cpu,
    technologies: [
      "ESP32",
      "Arduino",
      "Blynk",
      "Sensors",
      "Servo",
      "Embedded Systems",
      "IoT Communication",
    ],
  },
  {
    number: "03",
    title: "AI & Computer Vision",
    description:
      "Implementing intelligent systems with image processing, OCR, and recognition capabilities.",
    icon: Brain,
    technologies: [
      "Python",
      "OCR",
      "Tesseract",
      "Computer Vision",
      "Image Processing",
      "AI-based Systems",
    ],
  },
  {
    number: "04",
    title: "UI/UX Design",
    description:
      "Crafting user-centered interfaces with focus on usability, aesthetics, and design systems.",
    icon: Palette,
    technologies: [
      "Figma",
      "Wireframing",
      "Prototyping",
      "User Flow",
      "UI Design",
      "UX Design",
      "Design System",
    ],
  },
];

export const supportingSkills: SkillCategory[] = [
  {
    title: "Programming",
    skills: ["JavaScript", "TypeScript", "PHP", "Python", "Java"],
  },
  {
    title: "Frontend",
    skills: ["React", "Next.js", "HTML", "CSS", "Tailwind CSS", "Bootstrap"],
  },
  {
    title: "Backend",
    skills: ["Laravel", "Node.js", "REST API"],
  },
  {
    title: "Database",
    skills: ["MySQL", "PostgreSQL"],
  },
  {
    title: "Dev Tools",
    skills: ["Git", "GitHub", "VS Code", "Postman", "Laragon"],
  },
];
