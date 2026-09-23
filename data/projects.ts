export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  technologies: string[];
  categories: string[];
  image: string;
  github?: string;
  liveDemo?: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: "asset-inventory-management",
    title: "Asset & Inventory Management System",
    description:
      "Web-based asset and inventory management system designed to digitize asset management and inventory processes for efficient tracking and reporting.",
    technologies: ["Laravel", "MySQL", "Bootstrap", "JavaScript", "PHP"],
    categories: ["Web"],
    image: "/images/project-asset.jpg",
    featured: true,
  },
  {
    id: "attendance-ocr-system",
    title: "Automated Attendance Recapitulation System",
    description:
      "Web/mobile-based attendance system that transforms manual attendance records into digital data using OCR technology for automated processing.",
    technologies: [
      "Laravel",
      "PHP",
      "MySQL",
      "Tesseract OCR",
      "JavaScript",
    ],
    categories: ["Web", "AI & Computer Vision"],
    image: "/images/project-attendance.jpg",
    featured: true,
  },
  {
    id: "loms-ethnic-journey",
    title: "Lom's Ethnic Journey",
    description:
      "Educational game integrating local Suku Lom culture with Mathematics and Physics as an interactive and engaging learning medium.",
    technologies: [
      "Blender",
      "2D Asset Design",
      "Educational Game",
      "Game Development",
    ],
    categories: ["Game", "Research"],
    image: "/images/project-game.jpg",
    featured: true,
  },
  {
    id: "iot-clothesline",
    title: "IoT-Based Automated Clothesline",
    description:
      "An automated clothesline system using ESP32, sensors, servo motor, buzzer, and Blynk for remote monitoring and weather-responsive control.",
    technologies: ["ESP32", "Arduino", "Blynk", "Servo", "Sensors", "IoT"],
    categories: ["IoT"],
    image: "/images/project-iot.jpg",
    featured: true,
  },
];

export const projectCategories = [
  "All",
  "Web",
  "IoT",
  "AI & Computer Vision",
  "Game",
  "Research",
] as const;

export type ProjectCategory = (typeof projectCategories)[number];
