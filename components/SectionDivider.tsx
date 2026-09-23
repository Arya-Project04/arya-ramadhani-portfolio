"use client";

export default function SectionDivider() {
  return (
    <div className="relative py-8 overflow-hidden select-none pointer-events-none">
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-center">
        {/* Left fade line */}
        <div className="flex-1 h-px bg-gradient-to-r from-transparent via-border to-accent/30" />
        
        {/* Center glowing node */}
        <div className="mx-4 flex items-center gap-1.5">
          <span className="w-1 h-1 rounded-full bg-accent/40" />
          <div className="w-2 h-2 rounded-full bg-accent/60 shadow-sm shadow-accent animate-pulse" />
          <span className="w-1 h-1 rounded-full bg-accent/40" />
        </div>

        {/* Right fade line */}
        <div className="flex-1 h-px bg-gradient-to-l from-transparent via-border to-accent/30" />
      </div>
    </div>
  );
}
