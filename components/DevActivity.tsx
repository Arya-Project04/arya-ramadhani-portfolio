"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { GitBranch, GitCommit, GitPullRequest, Star, Terminal, ExternalLink, Code2 } from "lucide-react";
import SectionReveal from "./SectionReveal";
import InteractiveTerminal from "./InteractiveTerminal";

// Generate realistic contribution heatmap representation (52 columns x 7 days)
const contributionWeeks = Array.from({ length: 28 }, (_, w) =>
  Array.from({ length: 7 }, (_, d) => {
    // Generate realistic distribution of commit density
    const seed = (w * 7 + d * 13) % 19;
    if (seed > 14) return 3; // high
    if (seed > 9) return 2;  // medium
    if (seed > 4) return 1;  // low
    return 0;                // none
  })
);

const levelColors = [
  "bg-border/40",
  "bg-emerald-500/30",
  "bg-emerald-500/60",
  "bg-emerald-500",
];

const repos = [
  {
    name: "asset-inventory-system",
    desc: "Web-based asset & inventory tracking system built with Laravel, MySQL & PHP.",
    lang: "PHP",
    langColor: "bg-indigo-500",
    stars: 3,
    forks: 1,
    url: "https://github.com",
  },
  {
    name: "attendance-ocr-recap",
    desc: "Attendance recapitulation powered by Tesseract OCR & image preprocessing.",
    lang: "Python / PHP",
    langColor: "bg-blue-500",
    stars: 5,
    forks: 2,
    url: "https://github.com",
  },
  {
    name: "iot-clothesline-esp32",
    desc: "Automated rain-sensing & clothesline mechanism utilizing ESP32, sensors & Blynk.",
    lang: "C++",
    langColor: "bg-amber-500",
    stars: 4,
    forks: 1,
    url: "https://github.com",
  },
  {
    name: "arya-portfolio-next",
    desc: "Personal portfolio built with Next.js 16, TypeScript, Tailwind CSS & Framer Motion.",
    lang: "TypeScript",
    langColor: "bg-accent",
    stars: 8,
    forks: 2,
    url: "https://github.com",
  },
];

export default function DevActivity() {
  return (
    <section id="dev-activity" className="py-24 lg:py-32 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <SectionReveal>
          <div className="space-y-4 mb-16">
            <span className="label text-accent">Developer Environment</span>
            <h2 className="heading-lg text-text">Code Activity &amp; Live Terminal</h2>
            <p className="body-lg text-text-secondary max-w-xl">
              Engineering workflow, open-source repositories, and an interactive developer CLI.
            </p>
            <div className="accent-line" />
          </div>
        </SectionReveal>

        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start mb-16">
          {/* Left Column: Interactive Terminal (6 cols) */}
          <SectionReveal delay={0.1} className="lg:col-span-6 w-full">
            <div className="space-y-3">
              <div className="flex items-center justify-between text-xs font-mono text-text-muted px-1">
                <span className="flex items-center gap-1.5 text-accent">
                  <Terminal className="w-3.5 h-3.5" />
                  Terminal CLI Simulator
                </span>
                <span>Type &apos;whoami&apos;</span>
              </div>
              <InteractiveTerminal />
            </div>
          </SectionReveal>

          {/* Right Column: GitHub Style Contribution Graph & Metrics (6 cols) */}
          <SectionReveal delay={0.2} className="lg:col-span-6 w-full">
            <div className="p-6 rounded-2xl border border-border/80 bg-bg-alt/90 backdrop-blur-md shadow-xl shadow-black/5 space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-base font-bold text-text flex items-center gap-2">
                    <GitCommit className="w-4 h-4 text-accent" />
                    Activity &amp; Commit History
                  </h3>
                  <p className="text-xs text-text-muted font-mono mt-0.5">
                    Consistent shipping &amp; repository commits
                  </p>
                </div>
                <div className="flex items-center gap-1 text-[11px] font-mono text-text-muted">
                  <span>Less</span>
                  {levelColors.map((col, idx) => (
                    <span key={idx} className={`w-2.5 h-2.5 rounded-sm ${col}`} />
                  ))}
                  <span>More</span>
                </div>
              </div>

              {/* Responsive Contribution Graph */}
              <div className="overflow-x-auto pb-2">
                <div className="flex gap-1 min-w-[340px]">
                  {contributionWeeks.map((week, wIdx) => (
                    <div key={wIdx} className="flex flex-col gap-1">
                      {week.map((level, dIdx) => (
                        <div
                          key={dIdx}
                          title={`Contributions: level ${level}`}
                          className={`w-2.5 h-2.5 rounded-sm ${levelColors[level]} transition-transform hover:scale-125`}
                        />
                      ))}
                    </div>
                  ))}
                </div>
              </div>

              {/* Developer Metrics */}
              <div className="grid grid-cols-3 gap-3 pt-3 border-t border-border/60">
                <div className="p-3 rounded-xl bg-bg border border-border/70 text-center">
                  <div className="text-lg font-bold font-mono text-text">4+</div>
                  <div className="text-[11px] font-mono text-text-muted">Repositories</div>
                </div>
                <div className="p-3 rounded-xl bg-bg border border-border/70 text-center">
                  <div className="text-lg font-bold font-mono text-emerald-500">100%</div>
                  <div className="text-[11px] font-mono text-text-muted">Commit Care</div>
                </div>
                <div className="p-3 rounded-xl bg-bg border border-border/70 text-center">
                  <div className="text-lg font-bold font-mono text-accent">Active</div>
                  <div className="text-[11px] font-mono text-text-muted">Git Workflow</div>
                </div>
              </div>
            </div>
          </SectionReveal>
        </div>

        {/* Repository Cards Grid */}
        <SectionReveal delay={0.3}>
          <div>
            <h3 className="text-lg font-bold text-text mb-4 flex items-center gap-2">
              <GitBranch className="w-4 h-4 text-accent" />
              Featured Repositories
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {repos.map((repo, i) => (
                <div
                  key={repo.name}
                  className="p-5 rounded-xl border border-border/80 bg-bg-alt/90 hover:border-accent/40 hover:shadow-lg transition-all duration-200 flex flex-col justify-between group"
                >
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-xs font-bold text-text group-hover:text-accent transition-colors truncate">
                        {repo.name}
                      </span>
                      <ExternalLink className="w-3.5 h-3.5 text-text-muted group-hover:text-accent transition-colors flex-shrink-0" />
                    </div>
                    <p className="text-xs text-text-secondary line-clamp-2 leading-relaxed">
                      {repo.desc}
                    </p>
                  </div>

                  <div className="flex items-center gap-3 pt-3 mt-3 border-t border-border/50 text-[11px] font-mono text-text-muted">
                    <span className="flex items-center gap-1.5">
                      <span className={`w-2 h-2 rounded-full ${repo.langColor}`} />
                      {repo.lang}
                    </span>
                    <span className="flex items-center gap-1 ml-auto">
                      <Star className="w-3 h-3 text-amber-400 fill-amber-400" />
                      {repo.stars}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
