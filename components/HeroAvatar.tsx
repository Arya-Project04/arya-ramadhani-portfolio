"use client";

import { useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import Image from "next/image";
import { Sparkles, Terminal, Cpu, CheckCircle2, ShieldCheck, Code2 } from "lucide-react";

export default function HeroAvatar() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [mouseCoord, setMouseCoord] = useState({ x: 50, y: 50 });

  // Spring physics for smooth 3D tilt
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 180, mass: 0.6 };
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [10, -10]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-12, 12]), springConfig);

  // Parallax offsets for floating badge cards
  const cardFloatX = useSpring(useTransform(mouseX, [-0.5, 0.5], [-18, 18]), springConfig);
  const cardFloatY = useSpring(useTransform(mouseY, [-0.5, 0.5], [-18, 18]), springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
    setMouseCoord({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
    });
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
    setIsHovered(false);
    setMouseCoord({ x: 50, y: 50 });
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      className="relative w-full max-w-[480px] lg:max-w-[540px] mx-auto flex items-center justify-center select-none"
      style={{ perspective: 1200 }}
    >
      {/* Background Radar / Concentric Geometric Coordinate Rings (like reference image) */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        {/* Ring 1 - Outer Orbit */}
        <div
          className="w-[105%] aspect-square rounded-full border border-dashed border-accent/20 animate-spin"
          style={{ animationDuration: "45s" }}
        />
        {/* Ring 2 - Concentric Mid */}
        <div
          className="absolute w-[85%] aspect-square rounded-full border border-border/40 animate-spin"
          style={{ animationDuration: "30s", animationDirection: "reverse" }}
        />
        {/* Ring 3 - Inner Radar */}
        <div
          className="absolute w-[68%] aspect-square rounded-full border border-accent/15"
        />
      </div>

      {/* Ambient Gradient Glow */}
      <div className="absolute inset-8 rounded-full bg-gradient-to-tr from-accent/20 via-accent/10 to-transparent blur-3xl opacity-60 pointer-events-none" />

      {/* Main 3D Tilted Avatar Container */}
      <motion.div
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        className="relative w-full aspect-[4/5] sm:aspect-square max-h-[540px] rounded-3xl overflow-hidden border border-border/80 bg-bg-alt/40 backdrop-blur-md shadow-2xl shadow-accent/15 group cursor-pointer"
      >
        {/* The 3D Digital Human Avatar Image */}
        <div className="relative w-full h-full">
          <Image
            src="/images/avatar.jpg"
            alt="Arya Ramadhani - 3D Realistic Software Engineer Avatar"
            fill
            priority
            sizes="(max-width: 768px) 360px, 540px"
            className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
          />

          {/* Dynamic Cursor Light Reflection */}
          <div
            className="absolute inset-0 pointer-events-none transition-opacity duration-300"
            style={{
              background: `radial-gradient(circle 280px at ${mouseCoord.x}% ${mouseCoord.y}%, rgba(255, 255, 255, 0.16), transparent 70%)`,
              opacity: isHovered ? 1 : 0.35,
            }}
          />

          {/* Soft Bottom Gradient Fade into Website Theme */}
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-bg via-bg/70 to-transparent pointer-events-none" />

          {/* Bottom In-Frame Status Tag */}
          <div className="absolute bottom-4 inset-x-4 flex items-center justify-between text-white text-xs z-10 pointer-events-none">
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/10 shadow-lg">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="font-mono text-[11px] font-medium tracking-tight text-white">
                Arya Ramadhani • 3D Render
              </span>
            </div>
            <div className="font-mono text-[10px] text-white/80 px-2.5 py-1 rounded-full bg-black/40 backdrop-blur-sm border border-white/10">
              Interactive 3D
            </div>
          </div>
        </div>

        {/* Floating Developer Quote Card (left side - matching reference image) */}
        <motion.div
          style={{
            x: cardFloatX,
            y: cardFloatY,
            transform: "translateZ(50px)",
          }}
          className="absolute bottom-16 -left-3 lg:-left-6 max-w-[240px] sm:max-w-[260px] p-3.5 rounded-2xl bg-bg-elevated/95 backdrop-blur-xl border border-border/90 shadow-2xl shadow-black/20 z-20 pointer-events-none hidden sm:block"
        >
          <div className="flex items-start gap-2.5">
            <div className="mt-0.5 text-accent">
              <Sparkles className="w-4 h-4 fill-accent/20" />
            </div>
            <p className="text-[11px] font-mono text-text-secondary leading-relaxed">
              I love building things that live on the internet. I solve problems pragmatically with clean, scalable architectures.
            </p>
          </div>
        </motion.div>

        {/* Top-Right Holographic Role Badge */}
        <motion.div
          style={{
            x: useTransform(cardFloatX, (v) => -v * 0.7),
            y: useTransform(cardFloatY, (v) => -v * 0.7),
            transform: "translateZ(45px)",
          }}
          className="absolute top-4 -right-2 lg:-right-4 px-3.5 py-2 rounded-xl bg-bg-elevated/95 backdrop-blur-xl border border-border/90 shadow-xl shadow-black/15 z-20 pointer-events-none flex items-center gap-2.5"
        >
          <div className="w-7 h-7 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center text-accent">
            <Terminal className="w-3.5 h-3.5" />
          </div>
          <div>
            <div className="text-[9px] font-mono uppercase text-text-muted leading-none">Role</div>
            <div className="text-xs font-semibold text-text tracking-tight mt-0.5">Full-Stack Dev</div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
