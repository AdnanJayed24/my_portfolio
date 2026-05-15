"use client";

import { useRef } from 'react';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ExternalLink, Mail, Linkedin, MapPin } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import { TypewriterText } from '@/components/typewriter-text';

/* ─── Static particle positions (deterministic — avoids hydration mismatch) ─── */
const PARTICLES = [
  { id: 0,  x: "8%",  y: "18%", size: 4, delay: 0.0 },
  { id: 1,  x: "88%", y: "12%", size: 6, delay: 0.6 },
  { id: 2,  x: "52%", y: "6%",  size: 3, delay: 1.2 },
  { id: 3,  x: "74%", y: "28%", size: 5, delay: 1.8 },
  { id: 4,  x: "22%", y: "62%", size: 4, delay: 2.4 },
  { id: 5,  x: "94%", y: "52%", size: 3, delay: 0.9 },
  { id: 6,  x: "14%", y: "82%", size: 6, delay: 1.5 },
  { id: 7,  x: "62%", y: "88%", size: 4, delay: 0.3 },
  { id: 8,  x: "38%", y: "44%", size: 3, delay: 2.7 },
  { id: 9,  x: "68%", y: "72%", size: 5, delay: 2.1 },
  { id: 10, x: "32%", y: "22%", size: 4, delay: 0.7 },
  { id: 11, x: "82%", y: "48%", size: 3, delay: 1.9 },
  { id: 12, x: "4%",  y: "54%", size: 6, delay: 2.5 },
  { id: 13, x: "56%", y: "66%", size: 4, delay: 0.4 },
  { id: 14, x: "18%", y: "36%", size: 5, delay: 1.6 },
  { id: 15, x: "46%", y: "92%", size: 3, delay: 0.2 },
  { id: 16, x: "78%", y: "82%", size: 4, delay: 2.2 },
  { id: 17, x: "28%", y: "8%",  size: 5, delay: 1.1 },
  { id: 18, x: "92%", y: "34%", size: 3, delay: 2.8 },
  { id: 19, x: "42%", y: "78%", size: 6, delay: 0.8 },
];

function FloatingOrb({
  className,
  delay = 0,
}: {
  className: string;
  delay?: number;
}) {
  return (
    <motion.div
      className={`absolute rounded-full blur-3xl pointer-events-none ${className}`}
      animate={{
        x: [0, 35, -25, 0],
        y: [0, -45, 20, 0],
        scale: [1, 1.12, 0.92, 1],
      }}
      transition={{
        duration: 14 + delay * 2,
        repeat: Infinity,
        ease: "easeInOut",
        delay,
      }}
    />
  );
}

function Particle({
  x, y, size, delay,
}: {
  x: string; y: string; size: number; delay: number;
}) {
  return (
    <motion.div
      className="absolute rounded-full bg-violet-400/40 pointer-events-none"
      style={{ left: x, top: y, width: size, height: size }}
      animate={{
        y: [0, -28, 0],
        opacity: [0.3, 0.85, 0.3],
        scale: [1, 1.6, 1],
      }}
      transition={{
        duration: 4 + delay * 0.5,
        repeat: Infinity,
        ease: "easeInOut",
        delay,
      }}
    />
  );
}

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.18 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 45 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring" as const, damping: 18, stiffness: 90 },
  },
};

const socialLinks = [
  { href: "https://github.com/greenheaven24",              Icon: FaGithub, label: "GitHub" },
  { href: "https://www.linkedin.com/in/greenheaven2002/", Icon: Linkedin, label: "LinkedIn" },
  { href: "mailto:muhammad.adnan.jayed@gmail.com",        Icon: Mail,     label: "Email" },
];

export function HeroSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section
      id="home"
      ref={ref}
      className="pt-16 min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Grid background */}
      <div className="absolute inset-0 grid-bg" />

      {/* Ambient gradient blobs */}
      <FloatingOrb className="w-[500px] h-[500px] bg-violet-500/15 top-0 -left-32"   delay={0} />
      <FloatingOrb className="w-[400px] h-[400px] bg-cyan-400/12   top-1/3 -right-24" delay={2} />
      <FloatingOrb className="w-[350px] h-[350px] bg-indigo-500/15 bottom-0 left-1/3" delay={4} />

      {/* Floating particles */}
      {PARTICLES.map((p) => (
        <Particle key={p.id} x={p.x} y={p.y} size={p.size} delay={p.delay} />
      ))}

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="flex flex-col md:flex-row items-center md:items-start max-w-4xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* ── Avatar ── */}
          <motion.div variants={itemVariants} className="mb-8 md:mb-0 flex-shrink-0">
            <div className="relative w-52 h-52">
              {/* Outer glow pulse */}
              <motion.div
                className="absolute -inset-4 rounded-full bg-gradient-to-r from-violet-500/30 to-cyan-400/20 blur-xl"
                animate={{ scale: [1, 1.15, 1], opacity: [0.4, 0.7, 0.4] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              />
              {/* Spinning conic-gradient ring */}
              <motion.div
                className="absolute -inset-1 rounded-full"
                style={{
                  background:
                    "conic-gradient(from 0deg, #8b5cf6, #06b6d4, #6366f1, #8b5cf6)",
                }}
                animate={{ rotate: 360 }}
                transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
              />
              {/* Inner gap ring */}
              <div className="absolute inset-0.5 rounded-full bg-background" />
              {/* Profile image */}
              <div className="absolute inset-1.5 rounded-full overflow-hidden z-10">
                <Image
                  src="/Adnan.jpeg"
                  alt="Muhammad Adnan Jayed"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </motion.div>

          {/* ── Text block ── */}
          <div className="text-center md:text-left md:pl-12">
            {/* Name & title */}
            <motion.div variants={itemVariants} className="mb-6">
              <h1
                className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4"
                style={{
                  background:
                    "linear-gradient(135deg, hsl(var(--foreground)) 0%, #8b5cf6 50%, #06b6d4 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Muhammad Adnan Jayed
              </h1>

              <div className="text-xl sm:text-2xl text-muted-foreground mb-4">
                <TypewriterText
                  texts={[
                    "Software Engineer",
                    "Full-Stack Developer",
                    "Competitive Programmer",
                  ]}
                />
              </div>

              <motion.div
                className="flex items-center justify-center md:justify-start text-muted-foreground mb-4 gap-1.5"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <MapPin className="w-4 h-4 text-violet-500" />
                <span>Chittagong, Bangladesh</span>
              </motion.div>
            </motion.div>

            {/* Bio */}
            <motion.div variants={itemVariants} className="mb-8">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Full-stack software engineer with a strong Competitive Programming
                background and experience building scalable web apps using React,
                Node.js, and modern technologies.
              </p>
            </motion.div>

            {/* CTA buttons */}
            <motion.div variants={itemVariants} className="mb-8">
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    size="lg"
                    asChild
                    className="group border-0 text-white"
                    style={{
                      background: "linear-gradient(135deg, #8b5cf6, #06b6d4)",
                      boxShadow: "0 0 24px rgba(139,92,246,0.45)",
                    }}
                  >
                    <a
                      href="https://drive.google.com/file/d/1d3bs1PjfVafggV0GYkqWTlsv31I-1301/view?usp=sharing"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="w-4 h-4 mr-2 group-hover:animate-bounce" />
                      View Resume
                    </a>
                  </Button>
                </motion.div>

                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    size="lg"
                    variant="outline"
                    onClick={() =>
                      document
                        .getElementById("contact")
                        ?.scrollIntoView({ behavior: "smooth" })
                    }
                    className="border-violet-500/50 hover:border-violet-500 hover:bg-violet-500/5 transition-all"
                    style={{ boxShadow: "0 0 0 0 rgba(139,92,246,0)" }}
                    onMouseEnter={(e) =>
                      ((e.currentTarget as HTMLButtonElement).style.boxShadow =
                        "0 0 20px rgba(139,92,246,0.3)")
                    }
                    onMouseLeave={(e) =>
                      ((e.currentTarget as HTMLButtonElement).style.boxShadow =
                        "0 0 0 0 rgba(139,92,246,0)")
                    }
                  >
                    <Mail className="w-4 h-4 mr-2" />
                    Get In Touch
                  </Button>
                </motion.div>
              </div>
            </motion.div>

            {/* Social icons */}
            <motion.div variants={itemVariants}>
              <div className="flex justify-center md:justify-start gap-3">
                {socialLinks.map(({ href, Icon, label }, i) => (
                  <motion.a
                    key={label}
                    href={href}
                    target={href.startsWith("mailto") ? undefined : "_blank"}
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full flex items-center justify-center border border-border/60 text-muted-foreground hover:text-violet-500 hover:border-violet-500/60 hover:bg-violet-500/10 transition-colors"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 + i * 0.1, type: "spring" }}
                    whileHover={{ scale: 1.2, y: -3 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Icon className="w-4 h-4" />
                    <span className="sr-only">{label}</span>
                  </motion.a>
                ))}

                {/* Codeforces icon */}
                <motion.a
                  href="https://codeforces.com/profile/green_heaven"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full flex items-center justify-center border border-border/60 hover:border-violet-500/60 hover:bg-violet-500/10 transition-colors"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.1, type: "spring" }}
                  whileHover={{ scale: 1.2, y: -3 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Image
                    src="/codeforces.png"
                    alt="Codeforces"
                    width={18}
                    height={18}
                    className="object-contain"
                  />
                  <span className="sr-only">Codeforces</span>
                </motion.a>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
