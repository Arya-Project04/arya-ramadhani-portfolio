"use client";

import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import SectionReveal from "./SectionReveal";
import ProjectCard from "./ProjectCard";
import {
  projects,
  projectCategories,
  type ProjectCategory,
} from "@/data/projects";

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState<ProjectCategory>("All");

  const filtered =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.categories.includes(activeFilter));

  return (
    <section id="projects" className="py-24 lg:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <SectionReveal>
          <div className="space-y-4 mb-6">
            <span className="label text-accent">Projects</span>
            <h2 className="heading-lg text-text">Featured Projects</h2>
            <p className="body-lg text-text-secondary max-w-2xl">
              Selected projects showcasing my experience in software
              development, IoT, AI, and digital solutions.
            </p>
            <div className="accent-line" />
          </div>
        </SectionReveal>

        {/* Filter */}
        <SectionReveal delay={0.1}>
          <div className="flex flex-wrap gap-2 mb-12">
            {projectCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-4 py-2 text-sm rounded-lg border transition-all duration-200 ${
                  activeFilter === cat
                    ? "bg-accent text-white border-accent"
                    : "border-border text-text-secondary hover:border-accent hover:text-accent"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </SectionReveal>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
              />
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
