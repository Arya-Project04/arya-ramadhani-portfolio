"use client";

import { GraduationCap, Users } from "lucide-react";
import SectionReveal from "./SectionReveal";
import { education } from "@/data/education";

export default function Education() {
  return (
    <section id="education" className="py-24 lg:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <SectionReveal>
          <div className="space-y-4 mb-16">
            <span className="label text-accent">Education</span>
            <h2 className="heading-lg text-text">Education</h2>
            <div className="accent-line" />
          </div>
        </SectionReveal>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Degree */}
          <SectionReveal delay={0.1}>
            <div className="p-8 rounded-xl border border-border bg-bg-alt space-y-4">
              <GraduationCap className="w-6 h-6 text-accent" />
              <h3 className="heading-md text-text">{education.institution}</h3>
              <div className="space-y-1">
                <p className="text-sm font-semibold text-text">
                  {education.degree}
                </p>
                <p className="text-sm text-accent">{education.field}</p>
                <p className="text-sm text-text-muted font-mono">
                  {education.period}
                </p>
              </div>
            </div>
          </SectionReveal>

          {/* Organizations */}
          <SectionReveal delay={0.2}>
            <div className="space-y-4">
              <div className="flex items-center gap-2 mb-2">
                <Users className="w-4 h-4 text-accent" />
                <span className="text-sm font-semibold text-text">
                  Organizations
                </span>
              </div>

              {education.organizations.map((org) => (
                <div
                  key={org.name}
                  className="p-5 rounded-xl border border-border bg-bg-alt hover:border-accent/30 transition-colors duration-300"
                >
                  <p className="text-xs text-accent font-medium uppercase tracking-wider mb-1">
                    {org.role}
                  </p>
                  <p className="text-sm text-text">{org.name}</p>
                </div>
              ))}
            </div>
          </SectionReveal>
        </div>
      </div>
    </section>
  );
}
