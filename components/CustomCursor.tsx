"use client";

import { useEffect, useRef, useState } from "react";

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [hoverType, setHoverType] = useState<"default" | "pointer" | "view" | "button">("default");
  const [isVisible, setIsVisible] = useState(false);
  const mousePos = useRef({ x: 0, y: 0 });
  const dotPos = useRef({ x: 0, y: 0 });
  const ringPos = useRef({ x: 0, y: 0 });
  const rafId = useRef<number>(0);

  useEffect(() => {
    // Disable completely on mobile / touch screen / fine pointer absence
    const isTouch = window.matchMedia("(pointer: coarse)").matches;
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (isTouch || prefersReduced) return;

    const handleMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target) return;

      const projectCard = target.closest("article, [data-cursor='view']");
      if (projectCard) {
        setHoverType("view");
        return;
      }

      const button = target.closest("button, [role='button'], [data-cursor='button']");
      if (button) {
        setHoverType("button");
        return;
      }

      const link = target.closest("a, input, textarea, select");
      if (link) {
        setHoverType("pointer");
        return;
      }

      setHoverType("default");
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const animate = () => {
      const dotLerp = 0.2;
      const ringLerp = 0.1;

      dotPos.current.x += (mousePos.current.x - dotPos.current.x) * dotLerp;
      dotPos.current.y += (mousePos.current.y - dotPos.current.y) * dotLerp;
      ringPos.current.x += (mousePos.current.x - ringPos.current.x) * ringLerp;
      ringPos.current.y += (mousePos.current.y - ringPos.current.y) * ringLerp;

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${dotPos.current.x - 4}px, ${dotPos.current.y - 4}px, 0)`;
      }
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringPos.current.x - 18}px, ${ringPos.current.y - 18}px, 0)`;
      }

      rafId.current = requestAnimationFrame(animate);
    };

    document.addEventListener("mousemove", handleMouseMove, { passive: true });
    document.addEventListener("mouseover", handleMouseOver, { passive: true });
    document.addEventListener("mouseleave", handleMouseLeave);
    rafId.current = requestAnimationFrame(animate);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseleave", handleMouseLeave);
      cancelAnimationFrame(rafId.current);
    };
  }, [isVisible]);

  // Don't render on SSR or touch devices
  if (typeof window !== "undefined" && window.matchMedia?.("(pointer: coarse)").matches) {
    return null;
  }

  const isExpanded = hoverType !== "default";

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden hidden md:block">
      {/* Inner Dot */}
      <div
        ref={dotRef}
        className={`fixed top-0 left-0 w-2 h-2 rounded-full bg-accent transition-opacity duration-200 ${
          isExpanded ? "scale-0 opacity-0" : "opacity-100"
        }`}
        style={{ opacity: isVisible ? 1 : 0 }}
      />

      {/* Outer Ring */}
      <div
        ref={ringRef}
        className={`fixed top-0 left-0 rounded-full border border-accent/70 transition-all duration-200 flex items-center justify-center ${
          hoverType === "view"
            ? "w-14 h-14 -top-3.5 -left-3.5 bg-accent/90 border-accent text-white backdrop-blur-sm"
            : hoverType === "button"
            ? "w-12 h-12 -top-2.5 -left-2.5 bg-accent/20 border-accent scale-110"
            : hoverType === "pointer"
            ? "w-10 h-10 -top-1.5 -left-1.5 bg-accent/15 border-accent scale-105"
            : "w-9 h-9 bg-transparent"
        }`}
        style={{ opacity: isVisible ? 1 : 0 }}
      >
        {hoverType === "view" && (
          <span className="text-[10px] font-mono font-bold tracking-wider uppercase">
            View
          </span>
        )}
      </div>
    </div>
  );
}
