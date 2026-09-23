"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, ArrowUpRight, Code, Sparkles, Eye } from "lucide-react";
import type { Project } from "@/data/projects";

function GitHubIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [showDetailModal, setShowDetailModal] = useState(false);

  return (
    <>
      <motion.article
        layout
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        transition={{
          duration: 0.45,
          delay: index * 0.08,
          ease: [0.22, 1, 0.36, 1] as const,
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="group relative rounded-2xl border border-border/80 bg-bg-alt/90 backdrop-blur-md overflow-hidden hover:border-accent/50 hover:shadow-2xl hover:shadow-accent/10 transition-all duration-300 flex flex-col h-full"
      >
        {/* Animated Gradient Border Accent (Top) */}
        <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-accent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20" />

        {/* Project Visual / Interactive Header */}
        <div className="relative aspect-[16/10] overflow-hidden bg-bg-elevated border-b border-border/60">
          {/* Stylized Tech Architecture Preview */}
          <div className="absolute inset-0 bg-gradient-to-br from-accent/15 via-bg-alt/80 to-accent/5 flex items-center justify-center p-6 transition-transform duration-500 group-hover:scale-105">
            <div className="text-center space-y-3">
              <div className="w-14 h-14 mx-auto rounded-2xl border border-border/80 bg-bg-alt/90 shadow-md flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-all duration-300">
                <Code className="w-7 h-7" />
              </div>
              <div>
                <p className="font-mono text-xs text-accent font-semibold tracking-wider uppercase">
                  {project.categories.join(" • ")}
                </p>
                <p className="text-[11px] font-mono text-text-muted mt-0.5">
                  ID: {project.id}
                </p>
              </div>
            </div>
          </div>

          {/* Smooth Hover Overlay with Action Button */}
          <div
            className={`absolute inset-0 bg-bg/85 backdrop-blur-sm flex items-center justify-center gap-3 transition-opacity duration-300 ${
              isHovered ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
          >
            <button
              onClick={() => setShowDetailModal(true)}
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-accent hover:bg-accent-dark rounded-xl shadow-lg transition-transform duration-200 transform scale-95 group-hover:scale-100"
            >
              <Eye className="w-3.5 h-3.5" />
              View Details
            </button>
          </div>

          {/* Category Chip in Top Corner */}
          <div className="absolute top-3 left-3 z-10">
            <span className="px-2.5 py-1 rounded-full text-[10px] font-mono font-semibold text-accent bg-bg/90 border border-accent/25 backdrop-blur-md shadow-sm">
              {project.categories[0]}
            </span>
          </div>

          {/* Featured Marker */}
          {project.featured && (
            <div className="absolute top-3 right-3 z-10">
              <span className="flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-mono text-emerald-500 bg-bg/90 border border-emerald-500/30 backdrop-blur-md">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                Featured
              </span>
            </div>
          )}
        </div>

        {/* Content Section */}
        <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
          <div className="space-y-2.5">
            <h3 className="text-xl font-bold text-text group-hover:text-accent transition-colors duration-200 flex items-start justify-between gap-2">
              <span>{project.title}</span>
              <ArrowUpRight className="w-5 h-5 text-text-muted group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all flex-shrink-0 mt-0.5" />
            </h3>

            <p className="text-sm text-text-secondary line-clamp-3 leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Technology Badges with Staggered Hover Effect */}
          <div className="space-y-4 pt-2">
            <div className="flex flex-wrap gap-1.5">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-0.5 text-[11px] font-mono text-text-secondary bg-bg border border-border/80 rounded-md group-hover:border-accent/30 group-hover:text-text transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Bottom Actions */}
            <div className="flex items-center gap-3 pt-3 border-t border-border/60">
              {project.github ? (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-mono text-text-secondary hover:text-accent transition-colors"
                  aria-label={`Source code for ${project.title}`}
                >
                  <GitHubIcon className="w-3.5 h-3.5" />
                  Code
                </a>
              ) : (
                <span className="text-[11px] font-mono text-text-muted">
                  Private Repository
                </span>
              )}

              {project.liveDemo && (
                <a
                  href={project.liveDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-mono text-accent hover:underline ml-auto font-medium"
                  aria-label={`Live demo for ${project.title}`}
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  Live Preview
                </a>
              )}

              <button
                onClick={() => setShowDetailModal(true)}
                className="text-xs font-mono text-text-secondary hover:text-accent ml-auto transition-colors"
              >
                Inspect →
              </button>
            </div>
          </div>
        </div>
      </motion.article>

      {/* Project Details Modal */}
      <AnimatePresence>
        {showDetailModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-lg rounded-2xl bg-bg-elevated border border-border p-6 shadow-2xl space-y-5"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <span className="text-xs font-mono text-accent uppercase tracking-wider">
                    {project.categories.join(" • ")}
                  </span>
                  <h3 className="text-xl font-bold text-text mt-1">{project.title}</h3>
                </div>
                <button
                  onClick={() => setShowDetailModal(false)}
                  className="p-1.5 rounded-lg border border-border text-text-secondary hover:text-text hover:bg-bg-alt"
                >
                  ✕
                </button>
              </div>

              <div className="p-4 rounded-xl bg-bg-alt border border-border/80">
                <p className="text-sm text-text-secondary leading-relaxed">
                  {project.longDescription || project.description}
                </p>
              </div>

              <div>
                <h4 className="text-xs font-mono uppercase text-text-muted mb-2">Technologies Used</h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((t) => (
                    <span key={t} className="px-2.5 py-1 text-xs font-mono rounded-lg bg-bg border border-border text-text">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-end gap-3 pt-3 border-t border-border">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-text border border-border rounded-xl hover:border-accent"
                  >
                    <GitHubIcon className="w-3.5 h-3.5" />
                    GitHub
                  </a>
                )}
                <button
                  onClick={() => setShowDetailModal(false)}
                  className="px-5 py-2 text-xs font-semibold text-white bg-accent rounded-xl hover:bg-accent-dark"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
