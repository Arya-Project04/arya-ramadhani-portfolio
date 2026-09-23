"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

interface TerminalLine {
  type: "command" | "output" | "blank";
  text: string;
  delay?: number;
}

const terminalSequence: TerminalLine[] = [
  { type: "command", text: "whoami" },
  { type: "output", text: "Arya Ramadhani" },
  { type: "blank", text: "" },
  { type: "command", text: "echo $ROLE" },
  { type: "output", text: "Full Stack Developer" },
  { type: "blank", text: "" },
  { type: "command", text: "cat skills.txt" },
  { type: "output", text: "Web & Mobile Development" },
  { type: "output", text: "IoT" },
  { type: "output", text: "AI & Computer Vision" },
  { type: "output", text: "UI/UX Design" },
  { type: "blank", text: "" },
  { type: "command", text: "ls projects/ | wc -l" },
  { type: "output", text: "4 projects" },
  { type: "blank", text: "" },
  { type: "command", text: "echo $STATUS" },
  { type: "output", text: "Available for opportunities ✓" },
];

export default function InteractiveTerminal() {
  const [visibleLines, setVisibleLines] = useState(0);
  const [typingText, setTypingText] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isInView) return;

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) {
      setVisibleLines(terminalSequence.length);
      return;
    }

    let lineIndex = 0;
    let charIndex = 0;
    let timeout: ReturnType<typeof setTimeout>;

    const processLine = () => {
      if (lineIndex >= terminalSequence.length) return;
      const line = terminalSequence[lineIndex];

      if (line.type === "command") {
        setIsTyping(true);
        const typeChar = () => {
          if (charIndex <= line.text.length) {
            setTypingText(line.text.slice(0, charIndex));
            charIndex++;
            timeout = setTimeout(typeChar, 50 + Math.random() * 30);
          } else {
            setIsTyping(false);
            setTypingText("");
            setVisibleLines(lineIndex + 1);
            lineIndex++;
            charIndex = 0;
            timeout = setTimeout(processLine, 200);
          }
        };
        timeout = setTimeout(typeChar, 400);
      } else {
        setVisibleLines(lineIndex + 1);
        lineIndex++;
        timeout = setTimeout(processLine, 100);
      }
    };

    timeout = setTimeout(processLine, 800);
    return () => clearTimeout(timeout);
  }, [isInView]);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, [visibleLines, typingText]);

  return (
    <div ref={ref} className="terminal-window shadow-2xl shadow-black/20 max-w-2xl mx-auto">
      <div className="terminal-titlebar">
        <div className="terminal-dot bg-[#FF5F57]" />
        <div className="terminal-dot bg-[#FEBC2E]" />
        <div className="terminal-dot bg-[#28C840]" />
        <span className="ml-3 text-xs text-zinc-500">arya@portfolio ~ </span>
      </div>
      <div ref={containerRef} className="p-5 text-sm leading-relaxed max-h-[380px] overflow-y-auto">
        {terminalSequence.slice(0, visibleLines).map((line, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.15 }}
          >
            {line.type === "command" ? (
              <div className="flex items-center gap-2">
                <span className="text-emerald-400">❯</span>
                <span className="text-zinc-200">{line.text}</span>
              </div>
            ) : line.type === "output" ? (
              <div className="text-zinc-400 pl-4">{line.text}</div>
            ) : (
              <div className="h-3" />
            )}
          </motion.div>
        ))}
        {isTyping && (
          <div className="flex items-center gap-2">
            <span className="text-emerald-400">❯</span>
            <span className="text-zinc-200">{typingText}</span>
            <span className="animate-blink text-emerald-400">▊</span>
          </div>
        )}
        {!isTyping && visibleLines >= terminalSequence.length && (
          <div className="flex items-center gap-2 mt-1">
            <span className="text-emerald-400">❯</span>
            <span className="animate-blink text-emerald-400">▊</span>
          </div>
        )}
      </div>
    </div>
  );
}
