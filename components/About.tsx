"use client";

import { Download, GraduationCap, Code2, Target, Sparkles, FolderGit2, Cpu, Layers, Award } from "lucide-react";
import SectionReveal from "./SectionReveal";
import MagneticButton from "./MagneticButton";
import { motion } from "framer-motion";

const stats = [
  {
    icon: FolderGit2,
    value: "4+",
    label: "Shipped Projects",
    detail: "Web, IoT & AI Systems",
  },
  {
    icon: Cpu,
    value: "20+",
    label: "Technologies",
    detail: "Languages & Frameworks",
  },
  {
    icon: Layers,
    value: "4",
    label: "Core Specializations",
    detail: "Full-Stack • IoT • AI • UI/UX",
  },
  {
    icon: Award,
    value: "3+",
    label: "Real Engagements",
    detail: "Academic & Tech Projects",
  },
];

const keyInfo = [
  {
    icon: GraduationCap,
    label: "Degree",
    value: "Sarjana Terapan Komputer",
  },
  {
    icon: Code2,
    label: "Field of Study",
    value: "Rekayasa Perangkat Lunak",
  },
  {
    icon: Target,
    label: "Core Focus",
    value: "Full-Stack Software Engineering",
  },
  {
    icon: Sparkles,
    label: "Specializations",
    value: "Web • Mobile • IoT • Computer Vision • UI/UX",
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 lg:py-32 relative overflow-hidden">
      {/* Subtle ambient light */}
      <div className="absolute top-1/2 -right-40 w-96 h-96 bg-accent/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <SectionReveal>
          <div className="space-y-4 mb-16">
            <span className="label text-accent">About</span>
            <h2 className="heading-lg text-text">Engineering with Purpose &amp; Precision</h2>
            <div className="accent-line" />
          </div>
        </SectionReveal>

        {/* Top Highlight Statistics Row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-16">
          {stats.map((stat, i) => (
            <SectionReveal key={stat.label} delay={i * 0.08}>
              <motion.div
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className="p-6 rounded-2xl border border-border/80 bg-bg-alt/80 backdrop-blur-sm hover:border-accent/40 hover:shadow-xl hover:shadow-accent/10 transition-all duration-300 group relative overflow-hidden"
              >
                <div className="w-10 h-10 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent mb-4 group-hover:scale-110 group-hover:bg-accent group-hover:text-white transition-all duration-300">
                  <stat.icon className="w-5 h-5" />
                </div>
                <div className="text-3xl lg:text-4xl font-extrabold text-text tracking-tight font-mono mb-1">
                  {stat.value}
                </div>
                <div className="text-sm font-semibold text-text mb-0.5">
                  {stat.label}
                </div>
                <div className="text-xs text-text-muted">
                  {stat.detail}
                </div>
                {/* Subtle border glow on hover */}
                <div className="absolute inset-0 border border-accent/0 group-hover:border-accent/30 rounded-2xl pointer-events-none transition-colors duration-300" />
              </motion.div>
            </SectionReveal>
          ))}
        </div>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left — Narrative & Positioning (7 cols) */}
          <SectionReveal delay={0.2} className="lg:col-span-7">
            <div className="space-y-6">
              <p className="text-lg text-text-secondary leading-relaxed">
                I am a Software Engineer / Full-Stack Developer with an academic background in
                Informatics and Software Engineering (<span className="text-text font-medium">Rekayasa Perangkat Lunak</span>).
                My core drive is translating complex, real-world problems into robust, reliable, and user-centric systems.
              </p>
              <p className="text-base text-text-secondary leading-relaxed">
                Rather than treating web development, IoT, and AI as siloed fields, I bridge them together:
                connecting embedded hardware sensors (<span className="text-text font-medium">ESP32 &amp; Arduino</span>) to real-time cloud dashboards,
                integrating machine learning &amp; computer vision (<span className="text-text font-medium">OCR &amp; Image Processing</span>) into practical business workflows, and wrapping everything in clean, intuitive user interfaces.
              </p>
              <p className="text-base text-text-secondary leading-relaxed">
                Every line of code is structured with maintainability, type safety, and clean architecture in mind, ensuring solutions stay fast, scalable, and easy to extend.
              </p>

              <div className="pt-4 flex items-center gap-4">
                <MagneticButton strength={0.25}>
                  <a
                    href="/resume/cv.pdf"
                    className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-accent hover:bg-accent-dark rounded-xl shadow-md shadow-accent/20 hover:shadow-accent/40 transition-all duration-200"
                  >
                    <Download className="w-4 h-4" />
                    Download Full CV
                  </a>
                </MagneticButton>
                <span className="text-xs font-mono text-text-muted">
                  Updated for 2026 Opportunities
                </span>
              </div>
            </div>
          </SectionReveal>

          {/* Right — Interactive Academic & Engineering Profile Cards (5 cols) */}
          <SectionReveal delay={0.3} className="lg:col-span-5">
            <div className="space-y-3.5">
              {keyInfo.map((item, i) => (
                <motion.div
                  key={item.label}
                  whileHover={{ x: 6, transition: { duration: 0.15 } }}
                  className="p-4 sm:p-5 rounded-xl border border-border/80 bg-bg-alt/90 backdrop-blur-sm hover:border-accent/40 hover:bg-bg-elevated transition-all duration-200 group flex items-start gap-4"
                >
                  <div className="w-10 h-10 rounded-xl bg-accent/10 border border-accent/20 flex-shrink-0 flex items-center justify-center text-accent group-hover:scale-110 group-hover:bg-accent group-hover:text-white transition-all duration-300">
                    <item.icon className="w-5 h-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-[11px] font-mono uppercase tracking-wider text-text-muted mb-0.5">
                      {item.label}
                    </p>
                    <p className="text-sm font-semibold text-text truncate">
                      {item.value}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </SectionReveal>
        </div>
      </div>
    </section>
  );
}
