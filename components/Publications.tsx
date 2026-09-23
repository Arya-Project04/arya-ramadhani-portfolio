"use client";

import { BookOpen, FileText } from "lucide-react";
import SectionReveal from "./SectionReveal";
import { publications } from "@/data/education";

export default function Publications() {
  if (publications.length === 0) return null;

  return (
    <section className="py-24 lg:py-32 bg-bg-alt">
      <div className="max-w-6xl mx-auto px-6">
        <SectionReveal>
          <div className="space-y-4 mb-16">
            <span className="label text-accent">Research</span>
            <h2 className="heading-lg text-text">
              Publications &amp; Research
            </h2>
            <div className="accent-line" />
          </div>
        </SectionReveal>

        <div className="space-y-6">
          {publications.map((pub, index) => (
            <SectionReveal key={pub.title} delay={index * 0.1}>
              <div className="p-6 lg:p-8 rounded-xl border border-border bg-bg hover:border-accent/30 transition-colors duration-300">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg border border-border bg-bg-alt flex items-center justify-center">
                    <BookOpen className="w-5 h-5 text-accent" />
                  </div>
                  <div className="flex-1 space-y-2">
                    <div className="flex items-center gap-3 flex-wrap">
                      <span className="text-xs font-medium text-accent uppercase tracking-wider">
                        {pub.type}
                      </span>
                      <span className="text-xs text-text-muted font-mono">
                        {pub.year}
                      </span>
                    </div>
                    <h3 className="heading-sm text-text">{pub.title}</h3>
                    {pub.metadata && (
                      <div className="flex items-center gap-2 text-xs text-text-muted">
                        <FileText className="w-3 h-3" />
                        {pub.metadata}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
