"use client";

import { useState, useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import SectionReveal from "./SectionReveal";
import { specializations, supportingSkills } from "@/data/skills";
import {
  Globe,
  Cpu,
  Brain,
  Palette,
  Code,
  Layers,
  Sparkles,
  CheckCircle2,
} from "lucide-react";

// Featured individual core tools highlighted in prompt
const coreTechList = [
  { name: "TypeScript", category: "Web & Mobile", proficiency: "Advanced", icon: "TS" },
  { name: "JavaScript", category: "Web & Mobile", proficiency: "Advanced", icon: "JS" },
  { name: "React", category: "Web & Mobile", proficiency: "Advanced", icon: "⚛" },
  { name: "Next.js", category: "Web & Mobile", proficiency: "Advanced", icon: "▲" },
  { name: "HTML & CSS", category: "Web & Mobile", proficiency: "Advanced", icon: "HTML" },
  { name: "Laravel", category: "Web & Mobile", proficiency: "Advanced", icon: "LV" },
  { name: "PHP", category: "Web & Mobile", proficiency: "Advanced", icon: "PHP" },
  { name: "MySQL", category: "Web & Mobile", proficiency: "Advanced", icon: "SQL" },
  { name: "Python", category: "AI & Vision", proficiency: "Advanced", icon: "PY" },
  { name: "OpenCV & OCR", category: "AI & Vision", proficiency: "Intermediate", icon: "CV" },
  { name: "ESP32", category: "IoT", proficiency: "Advanced", icon: "ESP" },
  { name: "Arduino", category: "IoT", proficiency: "Advanced", icon: "ARD" },
  { name: "Figma", category: "UI/UX Design", proficiency: "Advanced", icon: "FIG" },
  { name: "Git", category: "Dev Tools", proficiency: "Advanced", icon: "GIT" },
  { name: "GitHub", category: "Dev Tools", proficiency: "Advanced", icon: "GH" },
];

function InteractiveTiltCard({
  spec,
  index,
}: {
  spec: (typeof specializations)[0];
  index: number;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [hoverCoord, setHoverCoord] = useState({ x: 50, y: 50 });
  const [isHovered, setIsHovered] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { damping: 20, stiffness: 220 };
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [8, -8]), springConfig);
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-8, 8]), springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const nx = (e.clientX - rect.left) / rect.width - 0.5;
    const ny = (e.clientY - rect.top) / rect.height - 0.5;
    x.set(nx);
    y.set(ny);
    setHoverCoord({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
    });
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    setIsHovered(false);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className="relative p-6 lg:p-8 rounded-2xl border border-border/80 bg-bg-alt/90 backdrop-blur-md transition-shadow duration-300 hover:shadow-2xl hover:shadow-accent/15 group overflow-hidden"
    >
      {/* Dynamic Cursor Light Reflection */}
      <div
        className="absolute inset-0 pointer-events-none transition-opacity duration-300 rounded-2xl"
        style={{
          background: `radial-gradient(circle 280px at ${hoverCoord.x}% ${hoverCoord.y}%, rgba(128, 0, 32, 0.12), transparent 70%)`,
          opacity: isHovered ? 1 : 0,
        }}
      />

      <div className="relative z-10 flex items-start gap-4">
        <span className="font-mono text-sm text-accent/70 font-semibold px-2 py-1 rounded bg-accent/10 border border-accent/20">
          {spec.number}
        </span>
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-2.5">
            <div className="w-9 h-9 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-all duration-300">
              <spec.icon className="w-5 h-5" />
            </div>
            <h3 className="text-xl font-bold text-text group-hover:text-accent transition-colors duration-200">
              {spec.title}
            </h3>
          </div>

          <p className="text-sm text-text-secondary mb-5 leading-relaxed">
            {spec.description}
          </p>

          <div className="flex flex-wrap gap-2 pt-2 border-t border-border/50">
            {spec.technologies.map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 text-xs font-mono font-medium rounded-lg bg-bg border border-border/80 text-text-secondary group-hover:border-accent/30 group-hover:text-text transition-colors duration-200"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const categories = ["All", "Web & Mobile", "IoT", "AI & Vision", "UI/UX Design", "Dev Tools"];

  const filteredCoreTech =
    activeCategory === "All"
      ? coreTechList
      : coreTechList.filter((item) => item.category === activeCategory);

  return (
    <section id="skills" className="py-24 lg:py-32 bg-bg-alt/40 relative overflow-hidden">
      {/* Subtle background ambient mesh */}
      <div className="absolute top-1/3 -left-32 w-80 h-80 bg-accent/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <SectionReveal>
          <div className="space-y-4 mb-16">
            <span className="label text-accent">Skills &amp; Expertise</span>
            <h2 className="heading-lg text-text">Technical Competencies</h2>
            <p className="body-lg text-text-secondary max-w-xl">
              Proven technologies, frameworks, and engineering disciplines practiced across
              full-stack production and research environments.
            </p>
            <div className="accent-line" />
          </div>
        </SectionReveal>

        {/* 1. Primary Specialization Cards with 3D Tilt */}
        <div className="grid md:grid-cols-2 gap-6 mb-20">
          {specializations.map((spec, index) => (
            <SectionReveal key={spec.number} delay={index * 0.1}>
              <InteractiveTiltCard spec={spec} index={index} />
            </SectionReveal>
          ))}
        </div>

        {/* 2. Interactive Technology Grid (Section 7 specific requirement) */}
        <SectionReveal>
          <div className="p-8 rounded-3xl border border-border/80 bg-bg/80 backdrop-blur-xl shadow-xl shadow-black/5">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
              <div>
                <h3 className="text-xl font-bold text-text flex items-center gap-2">
                  <Code className="w-5 h-5 text-accent" />
                  Core Technology Stack
                </h3>
                <p className="text-xs font-mono text-text-muted mt-1">
                  Hover cards for category and proficiency tooltips
                </p>
              </div>

              {/* Filter Pills */}
              <div className="flex flex-wrap gap-1.5">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`px-3 py-1 rounded-full text-xs font-mono transition-all duration-200 ${
                      activeCategory === cat
                        ? "bg-accent text-white font-semibold shadow-sm"
                        : "bg-bg-alt text-text-secondary hover:text-text border border-border"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            {/* Grid of Interactive Tech Cards */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3.5">
              {filteredCoreTech.map((tech, i) => (
                <motion.div
                  key={tech.name}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.2, delay: i * 0.02 }}
                  whileHover={{ y: -4, scale: 1.02 }}
                  className="p-4 rounded-xl border border-border bg-bg-alt/90 hover:border-accent/40 hover:bg-bg-elevated transition-all duration-200 group relative cursor-pointer"
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="w-8 h-8 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center font-mono text-xs font-bold text-accent group-hover:bg-accent group-hover:text-white transition-all duration-300">
                      {tech.icon}
                    </span>
                    <span className="text-[10px] font-mono text-text-muted group-hover:text-accent transition-colors">
                      {tech.proficiency}
                    </span>
                  </div>
                  <div className="font-semibold text-sm text-text group-hover:text-accent transition-colors">
                    {tech.name}
                  </div>
                  <div className="text-[11px] text-text-muted truncate mt-0.5">
                    {tech.category}
                  </div>

                  {/* Subtle hover accent line */}
                  <div className="absolute inset-x-0 bottom-0 h-0.5 bg-accent opacity-0 group-hover:opacity-100 transition-opacity rounded-b-xl" />
                </motion.div>
              ))}
            </div>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
