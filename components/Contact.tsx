"use client";

import { useState, type FormEvent } from "react";
import { Mail, Send, ArrowUpRight, CheckCircle2, MessageSquare, Sparkles } from "lucide-react";
import SectionReveal from "./SectionReveal";
import MagneticButton from "./MagneticButton";
import { motion } from "framer-motion";

function GitHubIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

const socials = [
  {
    icon: Mail,
    customIcon: null as null | typeof GitHubIcon,
    label: "Direct Email",
    value: "okearya.tube@gmail.com",
    href: "mailto:okearya.tube@gmail.com",
    subtext: "Fastest response within 24h",
  },
  {
    icon: null,
    customIcon: LinkedInIcon,
    label: "LinkedIn Professional",
    value: "linkedin.com/in/arya-ramadhani-id",
    href: "https://linkedin.com/in/arya-ramadhani-id",
    subtext: "Career, network & recommendations",
  },
  {
    icon: null,
    customIcon: GitHubIcon,
    label: "GitHub Profile",
    value: "github.com/arya-ramadhani",
    href: "https://github.com/arya-ramadhani",
    subtext: "Code repositories & contributions",
  },
];

export default function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formState);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setFormState({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute bottom-10 left-1/4 w-[450px] h-[450px] bg-accent/8 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <SectionReveal>
          <div className="space-y-4 mb-16">
            <span className="label text-accent">Get in Touch</span>
            <h2 className="heading-lg text-text">
              Let&apos;s build something meaningful.
            </h2>
            <p className="body-lg text-text-secondary max-w-xl">
              I am open to software engineering opportunities, enterprise collaborations,
              IoT prototypes, and freelance technical challenges.
            </p>
            <div className="accent-line" />
          </div>
        </SectionReveal>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Form (7 cols) */}
          <SectionReveal delay={0.1} className="lg:col-span-7">
            <div className="p-8 rounded-3xl border border-border/80 bg-bg-alt/90 backdrop-blur-xl shadow-xl shadow-black/5">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="block text-xs font-mono font-medium text-text-secondary uppercase tracking-wider mb-2"
                    >
                      Your Name
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      value={formState.name}
                      onChange={(e) =>
                        setFormState((s) => ({ ...s, name: e.target.value }))
                      }
                      className="w-full px-4 py-3 text-sm bg-bg border border-border/90 rounded-xl text-text placeholder:text-text-muted focus:outline-none focus:border-accent transition-colors"
                      placeholder="e.g. Alex Pratama"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="contact-email"
                      className="block text-xs font-mono font-medium text-text-secondary uppercase tracking-wider mb-2"
                    >
                      Email Address
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      value={formState.email}
                      onChange={(e) =>
                        setFormState((s) => ({ ...s, email: e.target.value }))
                      }
                      className="w-full px-4 py-3 text-sm bg-bg border border-border/90 rounded-xl text-text placeholder:text-text-muted focus:outline-none focus:border-accent transition-colors"
                      placeholder="alex@domain.com"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="contact-message"
                    className="block text-xs font-mono font-medium text-text-secondary uppercase tracking-wider mb-2"
                  >
                    Project Details or Opportunity
                  </label>
                  <textarea
                    id="contact-message"
                    required
                    rows={5}
                    value={formState.message}
                    onChange={(e) =>
                      setFormState((s) => ({ ...s, message: e.target.value }))
                    }
                    className="w-full px-4 py-3 text-sm bg-bg border border-border/90 rounded-xl text-text placeholder:text-text-muted focus:outline-none focus:border-accent transition-colors resize-none"
                    placeholder="Tell me about your tech stack, timeline, project scope, or open role..."
                  />
                </div>

                <div className="pt-2 flex items-center justify-between">
                  <MagneticButton strength={0.2}>
                    <button
                      type="submit"
                      disabled={submitted}
                      className="inline-flex items-center gap-2 px-7 py-3 text-sm font-semibold text-white bg-accent hover:bg-accent-dark rounded-xl shadow-lg shadow-accent/25 hover:shadow-accent/40 transition-all duration-200 disabled:opacity-60"
                    >
                      {submitted ? (
                        <>
                          <CheckCircle2 className="w-4 h-4 text-emerald-300" />
                          Message Sent Successfully!
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          Send Message
                        </>
                      )}
                    </button>
                  </MagneticButton>

                  <span className="text-[11px] font-mono text-text-muted hidden sm:inline">
                    🔒 Protected &amp; Direct
                  </span>
                </div>
              </form>
            </div>
          </SectionReveal>

          {/* Right Column: Animated Social Cards (5 cols) */}
          <SectionReveal delay={0.2} className="lg:col-span-5">
            <div className="space-y-4">
              <div className="text-xs font-mono text-text-muted uppercase tracking-wider">
                Direct Communication Channels
              </div>

              {socials.map((social) => {
                const IconComponent = social.icon;
                const CustomIcon = social.customIcon;
                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ x: 6, transition: { duration: 0.15 } }}
                    className="flex items-center gap-4 p-5 rounded-2xl border border-border/80 bg-bg-alt/90 backdrop-blur-md hover:border-accent/40 hover:shadow-xl hover:shadow-accent/5 transition-all duration-300 group"
                  >
                    <div className="w-12 h-12 rounded-xl border border-accent/20 bg-accent/10 flex items-center justify-center group-hover:scale-110 group-hover:bg-accent group-hover:text-white transition-all duration-300 text-accent flex-shrink-0">
                      {IconComponent ? (
                        <IconComponent className="w-5 h-5" />
                      ) : CustomIcon ? (
                        <CustomIcon className="w-5 h-5" />
                      ) : null}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs font-mono text-text-muted">{social.label}</p>
                      <p className="text-sm font-semibold text-text truncate group-hover:text-accent transition-colors">
                        {social.value}
                      </p>
                      <p className="text-[11px] text-text-secondary mt-0.5">
                        {social.subtext}
                      </p>
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-text-muted group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all flex-shrink-0" />
                  </motion.a>
                );
              })}

              {/* Status Note */}
              <div className="p-4 rounded-xl border border-emerald-500/20 bg-emerald-500/5 text-xs text-text-secondary flex items-center gap-2.5">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse flex-shrink-0" />
                <span>I am currently open to internships, freelance work, collaborative projects, and opportunities for professional growth in the fields of software engineering and technology.</span>
              </div>
            </div>
          </SectionReveal>
        </div>
      </div>
    </section>
  );
}
