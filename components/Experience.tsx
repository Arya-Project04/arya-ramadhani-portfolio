"use client";

import { motion } from "framer-motion";
import SectionReveal from "./SectionReveal";
import { experiences } from "@/data/experience";
import { Briefcase, Calendar, CheckCircle2, ChevronRight, Sparkles } from "lucide-react";

export default function Experience() {
  return (
    <section id="experience" className="py-24 lg:py-32 bg-bg-alt/40 relative overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute top-1/4 -right-32 w-80 h-80 bg-accent/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <SectionReveal>
          <div className="space-y-4 mb-16">
            <span className="label text-accent">Career &amp; Research</span>
            <h2 className="heading-lg text-text">Experience Timeline</h2>
            <p className="body-lg text-text-secondary max-w-xl">
              Chronological milestones in software development, technical implementation, and academic research.
            </p>
            <div className="accent-line" />
          </div>
        </SectionReveal>

        <div className="relative">
          {/* Vertical Glowing Timeline Line */}
          <div className="absolute left-4 md:left-[10.5rem] top-2 bottom-4 w-0.5 bg-gradient-to-b from-accent via-accent/40 to-transparent" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <SectionReveal key={exp.id} delay={index * 0.12}>
                <div className="relative flex flex-col md:flex-row gap-6 md:gap-12 group">
                  {/* Left Column: Year & Time Badge */}
                  <div className="pl-12 md:pl-0 md:w-[10.5rem] flex-shrink-0 md:text-right">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold text-accent bg-accent/10 border border-accent/25 shadow-sm">
                      <Calendar className="w-3.5 h-3.5" />
                      {exp.year}
                    </span>
                  </div>

                  {/* Glowing Node Marker */}
                  <div className="absolute left-4 md:left-[10.5rem] -translate-x-1/2 top-1.5 z-10">
                    <div className="relative flex items-center justify-center">
                      <span className="absolute w-6 h-6 rounded-full bg-accent/25 animate-ping opacity-75" />
                      <div className="w-4 h-4 rounded-full border-2 border-accent bg-bg shadow-md shadow-accent/40 flex items-center justify-center group-hover:bg-accent transition-colors duration-200" />
                    </div>
                  </div>

                  {/* Right Column: Experience Card */}
                  <div className="pl-12 md:pl-0 flex-1">
                    <motion.div
                      whileHover={{ y: -3, transition: { duration: 0.15 } }}
                      className="p-6 sm:p-7 rounded-2xl border border-border/80 bg-bg/80 backdrop-blur-md hover:border-accent/40 hover:shadow-xl hover:shadow-accent/5 transition-all duration-300"
                    >
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                        <h3 className="text-xl font-bold text-text group-hover:text-accent transition-colors duration-200">
                          {exp.position}
                        </h3>
                        <span className="text-xs font-mono text-text-muted px-2.5 py-0.5 rounded bg-bg-alt border border-border self-start sm:self-auto">
                          Verified Milestone
                        </span>
                      </div>

                      <p className="text-sm font-semibold text-accent mb-3 flex items-center gap-1.5">
                        <Briefcase className="w-3.5 h-3.5" />
                        {exp.organization}
                      </p>

                      <p className="text-sm text-text-secondary mb-4 leading-relaxed">
                        {exp.description}
                      </p>

                      {/* Responsibilities list if available */}
                      {exp.responsibilities && exp.responsibilities.length > 0 && (
                        <div className="mb-4 space-y-1.5">
                          {exp.responsibilities.map((resp, ri) => (
                            <div key={ri} className="flex items-center gap-2 text-xs text-text-secondary">
                              <ChevronRight className="w-3.5 h-3.5 text-accent flex-shrink-0" />
                              <span>{resp}</span>
                            </div>
                          ))}
                        </div>
                      )}

                      {/* Tech Stack Pills */}
                      {exp.technologies && (
                        <div className="flex flex-wrap gap-1.5 pt-3 border-t border-border/50">
                          {exp.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="px-2.5 py-0.5 text-xs font-mono rounded-md bg-bg-alt border border-border/80 text-text-muted"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      )}
                    </motion.div>
                  </div>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
