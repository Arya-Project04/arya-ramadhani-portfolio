"use client";

import { motion, type Variants } from "framer-motion";
import { ArrowRight, Download, MessageSquare, Sparkles, Circle, Code2, Terminal, Cpu } from "lucide-react";
import TypingAnimation from "./TypingAnimation";
import MagneticButton from "./MagneticButton";
import ParticleField from "./ParticleField";
import HeroAvatar from "./HeroAvatar";

const roles = [
  "Software Engineer"
];

const decorativeCodeFragments = [
  { text: "const developer = true;", top: "12%", left: "5%", delay: 0 },
  { text: "{ }", top: "28%", left: "18%", delay: 1 },
  { text: "git commit -m \"feat: scale\"", top: "78%", left: "8%", delay: 2 },
  { text: "< />", top: "18%", right: "8%", delay: 0.5 },
  { text: "npm run dev", top: "85%", right: "12%", delay: 1.5 },
  { text: "01001001 01001111 01010100", top: "45%", right: "4%", delay: 2.5 },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.15 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export default function Hero() {
  const scrollToSection = (id: string) => {
    const el = document.querySelector(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-[92vh] lg:min-h-screen flex items-center justify-center bg-grid overflow-hidden pt-20 pb-16 lg:py-0"
    >
      {/* Background Interactive Particle Field */}
      <ParticleField />

      {/* Scrolling Backdrop Typography — 4 rows, mid-to-bottom, alternating directions */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden opacity-[0.04] dark:opacity-[0.06] z-0 flex flex-col justify-end gap-2 pb-[4vh]" style={{ paddingTop: '45%' }}>
        {/* Row 1 — scrolls left */}
        <div className="marquee-row">
          <div className="marquee-track marquee-left">
            <span className="text-[8vw] font-black font-mono tracking-tighter text-text whitespace-nowrap px-6">
              PORTOFOLIO
            </span>
            <span className="text-[8vw] font-black font-mono tracking-tighter text-text whitespace-nowrap px-6" aria-hidden="true">
              PORTOFOLIO
            </span>
            <span className="text-[8vw] font-black font-mono tracking-tighter text-text whitespace-nowrap px-6" aria-hidden="true">
              PORTOFOLIO
            </span>
          </div>
        </div>
        {/* Row 2 — scrolls right */}
        <div className="marquee-row">
          <div className="marquee-track marquee-right">
            <span className="text-[8vw] font-black font-mono tracking-tighter text-text whitespace-nowrap px-6">
              PORTOFOLIO
            </span>
            <span className="text-[8vw] font-black font-mono tracking-tighter text-text whitespace-nowrap px-6" aria-hidden="true">
              PORTOFOLIO
            </span>
            <span className="text-[8vw] font-black font-mono tracking-tighter text-text whitespace-nowrap px-6" aria-hidden="true">
              PORTOFOLIO
            </span>
          </div>
        </div>
        {/* Row 3 — scrolls left */}
        <div className="marquee-row">
          <div className="marquee-track marquee-left">
            <span className="text-[8vw] font-black font-mono tracking-tighter text-text whitespace-nowrap px-6">
              PORTOFOLIO
            </span>
            <span className="text-[8vw] font-black font-mono tracking-tighter text-text whitespace-nowrap px-6" aria-hidden="true">
              PORTOFOLIO
            </span>
            <span className="text-[8vw] font-black font-mono tracking-tighter text-text whitespace-nowrap px-6" aria-hidden="true">
              PORTOFOLIO
            </span>
          </div>
        </div>
        {/* Row 4 — scrolls right */}
        <div className="marquee-row">
          <div className="marquee-track marquee-right">
            <span className="text-[8vw] font-black font-mono tracking-tighter text-text whitespace-nowrap px-6">
              PORTOFOLIO
            </span>
            <span className="text-[8vw] font-black font-mono tracking-tighter text-text whitespace-nowrap px-6" aria-hidden="true">
              PORTOFOLIO
            </span>
            <span className="text-[8vw] font-black font-mono tracking-tighter text-text whitespace-nowrap px-6" aria-hidden="true">
              PORTOFOLIO
            </span>
          </div>
        </div>
      </div>

      {/* Futuristic Ambient Gradient Meshes */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 -left-20 w-[420px] h-[420px] bg-accent/10 rounded-full blur-[140px]" />
        <div className="absolute bottom-1/4 -right-20 w-[500px] h-[500px] bg-accent/15 rounded-full blur-[160px]" />
        <div className="absolute top-1/2 left-1/3 w-[300px] h-[300px] bg-emerald-500/5 rounded-full blur-[120px]" />
      </div>

      {/* Decorative Subtle Code Fragments in Background */}
      <div className="absolute inset-0 pointer-events-none select-none hidden md:block overflow-hidden">
        {decorativeCodeFragments.map((fragment, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: [0.2, 0.45, 0.2], y: [0, -8, 0] }}
            transition={{
              duration: 8,
              repeat: Infinity,
              delay: fragment.delay,
              ease: "easeInOut",
            }}
            style={{ top: fragment.top, left: fragment.left, right: fragment.right }}
            className="absolute font-mono text-[11px] text-text-muted/40 tracking-wider bg-bg-alt/40 px-2 py-0.5 rounded border border-border/30 backdrop-blur-[2px]"
          >
            {fragment.text}
          </motion.div>
        ))}
      </div>

      <div className="relative max-w-6xl mx-auto px-6 py-12 lg:py-24 w-full z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column — Professional Presentation (7 cols) */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 space-y-6 text-left"
          >
            {/* Top Greeting Badge */}
            <motion.div variants={itemVariants} className="flex items-center gap-3">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium tracking-widest text-accent bg-accent/10 border border-accent/25">
                <Sparkles className="w-3.5 h-3.5 text-accent" />
                HELLO, I&apos;M
              </span>
              <span className="flex items-center gap-1.5 text-xs text-text-muted font-mono">
                <Circle className="w-2 h-2 fill-emerald-500 text-emerald-500 animate-pulse" />
                Available for Work
              </span>
            </motion.div>

            {/* Name & Headline */}
            <motion.div variants={itemVariants} className="space-y-3">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-text tracking-tight leading-[1.1]">
                Arya <span className="text-accent underline decoration-accent/30 underline-offset-8">Ramadhani</span>
              </h1>

              {/* Dynamic Typing Role */}
              <div className="h-10 sm:h-12 flex items-center">
                <span className="text-xl sm:text-2xl lg:text-3xl font-bold text-text-secondary font-mono">
                  &gt;{" "}
                  <TypingAnimation
                    texts={roles}
                    typingSpeed={75}
                    deletingSpeed={45}
                    pauseDuration={2400}
                    className="text-text font-semibold border-b-2 border-accent pb-0.5"
                  />
                </span>
              </div>
            </motion.div>

            {/* Professional Summary */}
            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg text-text-secondary max-w-xl leading-relaxed font-normal"
            >
              Building scalable digital solutions that turn ideas into meaningful, reliable, and impactful experiences.
            </motion.p>

            {/* Highlight Skill Bar */}
            <motion.div
              variants={itemVariants}
              className="p-3.5 rounded-xl border border-border/80 bg-bg-alt/70 backdrop-blur-md max-w-xl"
            >
              <div className="text-[11px] font-mono text-accent uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                <Terminal className="w-3.5 h-3.5" /> Core Disciplines
              </div>
              <p className="text-xs sm:text-sm font-medium text-text">
                Web &amp; Mobile Development <span className="text-accent font-bold mx-1">•</span> IoT{" "}
                <span className="text-accent font-bold mx-1">•</span> AI &amp; Computer Vision{" "}
                <span className="text-accent font-bold mx-1">•</span> UI/UX Design
              </p>
            </motion.div>

            {/* CTAs with Magnetic Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap items-center gap-3.5 pt-2"
            >
              <MagneticButton strength={0.25}>
                <button
                  onClick={() => scrollToSection("#projects")}
                  className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-accent hover:bg-accent-dark rounded-xl shadow-lg shadow-accent/20 hover:shadow-accent/40 transition-all duration-200 group active:scale-95"
                >
                  View My Work
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </MagneticButton>

              <MagneticButton strength={0.25}>
                <a
                  href="/resume/cv.pdf"
                  className="inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold text-text bg-bg-elevated border border-border hover:border-accent hover:text-accent rounded-xl shadow-sm transition-all duration-200 active:scale-95"
                >
                  <Download className="w-4 h-4" />
                  Download CV
                </a>
              </MagneticButton>

              <MagneticButton strength={0.25}>
                <button
                  onClick={() => scrollToSection("#contact")}
                  className="inline-flex items-center gap-2 px-5 py-3 text-sm font-medium text-text-secondary hover:text-text rounded-xl border border-transparent hover:border-border transition-all duration-200"
                >
                  <MessageSquare className="w-4 h-4 text-accent" />
                  Let&apos;s Connect
                </button>
              </MagneticButton>
            </motion.div>
          </motion.div>

          {/* Right Column — 3D Interactive Personal Avatar (5 cols) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] as const }}
            className="lg:col-span-5 flex justify-center items-center relative"
          >
            <HeroAvatar />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
