"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function HeroAvatar() {
  return (
    <div className="relative w-full max-w-[420px] lg:max-w-[480px] mx-auto flex items-center justify-center select-none">
      {/* Ambient accent glow behind the person */}
      <motion.div
        animate={{ scale: [1, 1.08, 1], opacity: [0.35, 0.6, 0.35] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute w-[80%] aspect-square rounded-full bg-accent/25 blur-[100px] pointer-events-none"
      />

      {/* Secondary subtle glow */}
      <motion.div
        animate={{ scale: [1.05, 1, 1.05], opacity: [0.2, 0.35, 0.2] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="absolute w-[65%] aspect-square rounded-full bg-emerald-500/15 blur-[80px] -translate-y-10 translate-x-6 pointer-events-none"
      />

      {/* Floating portrait with pure transparent background */}
      <motion.div
        animate={{ y: [0, -14, 0] }}
        transition={{
          duration: 5.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="relative w-full flex items-center justify-center"
      >
        {/* Soft bottom ground shadow */}
        <motion.div
          animate={{ scale: [1, 0.9, 1], opacity: [0.35, 0.18, 0.35] }}
          transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-[60%] h-8 bg-accent/25 blur-2xl rounded-full pointer-events-none"
        />

        {/* The portrait — directly loaded from public/images/avatar.jpg */}
        <div
          className="relative w-full max-w-[380px] lg:max-w-[440px] h-[480px] sm:h-[520px] lg:h-[560px]"
          style={{
            maskImage: "linear-gradient(to bottom, rgba(0,0,0,1) 70%, rgba(0,0,0,0) 98%)",
            WebkitMaskImage: "linear-gradient(to bottom, rgba(0,0,0,1) 70%, rgba(0,0,0,0) 98%)",
          }}
        >
          <Image
            src="/images/avatar.jpg"
            alt="Arya Ramadhani - Software Engineer"
            fill
            priority
            unoptimized
            sizes="(max-width: 768px) 360px, 440px"
            className="object-contain object-bottom drop-shadow-[0_20px_40px_rgba(0,0,0,0.5)]"
          />
        </div>
      </motion.div>
    </div>
  );
}
